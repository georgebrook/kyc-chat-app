import { Message } from '@/types/Messaging';
import MessageNode from '@atoms/MessageNode';

interface Props {
  messages: Message[];
  currentSender: 'desktop' | 'mobile';
}

export default function MessageList({ messages, currentSender }: Props) {
  return (
    <div className='message-list'>
      {messages.map((msg) => (
        <MessageNode key={msg.id} currentSender={currentSender} sender={msg.sender}>{msg.text}</MessageNode>
      ))}


      <style jsx>{`
        .message-list {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding-bottom: var(--space-default);
          background-image: url('/chat-bg.webp');
          background-size: 800px;
          width: 100%;
          height: 100%;
          position: relative;
        }

        .message-list::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--color-foreground);
          opacity: 0.15;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
