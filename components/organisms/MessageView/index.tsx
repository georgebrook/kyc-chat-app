'use client';

import { useEffect, useState } from 'react';
import { ref, onValue, remove } from 'firebase/database';
import { database } from '@lib/firebase';
import { Message } from '@/types/Messaging';
import MessageList from '@molecules/MessageList';
import MessageBar from '@organisms/MessageBar';
import { bem } from '@/lib/bem';
import ErrorText from '@atoms/ErrorText';
import MessageNode from '@atoms/MessageNode';
import MessagesHeader from '@molecules/MessagesHeader';
import { useRouter } from 'next/navigation';

interface Props {
  sender: 'desktop' | 'mobile';
}

export default function MessageView({ sender }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [error, setError] = useState<string>('');
  const [isTyping, setIsTyping] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const otherSender = sender === 'desktop' ? 'mobile' : 'desktop';
    const typingRef = ref(database, `typingStatus/${otherSender}`);

    const unsubscribe = onValue(typingRef, (snapshot) => {
      setIsTyping(snapshot.exists());
    });

    return () => unsubscribe();
  }, [sender]);


  useEffect(() => {
    const messagesRef = ref(database, 'messages');
    const unsubscribe = onValue(
      messagesRef,
      (snapshot) => {
        const data = snapshot.val() || {};
        const messagesArray: Message[] = Object.entries(data).map(([key, val]) => ({
          id: key,
          ...(val as Omit<Message, 'id'>),
        }));
        setMessages(messagesArray);
        setError('');
      },
      (err) => {
        console.error('Read error:', err);
        setError('Failed to load messages.');
      }
    );

    return () => unsubscribe();
  }, []);

  const handleBack = () => {
    router.push('/');
  };

  const handleClearChat = async () => {
    try {
      await remove(ref(database, 'messages'));
    } catch (err) {
      console.error('Clear chat error:', err);
      setError('Failed to clear chat.');
    }
  };

  return (
    <div className={bem('message-view')}>
      <div className={bem('message-view', 'window')}>
        <MessagesHeader sender={sender} onBack={handleBack} onClearChat={handleClearChat} />
        {error && <ErrorText className={bem('message', 'error')} text={error} />}
        <MessageList messages={messages} currentSender={sender} />
        {isTyping && (
          <MessageNode sender={sender} currentSender={sender} modifiers={['typing']}>
          </MessageNode>
        )}
        <MessageBar sender={sender} onError={setError} />
      </div>


      <style jsx>{`
        .message-view {
          display: flex;
          width: 100%;
          height: 100%;
          background-color: var(--color--neutral);
          background: linear-gradient(353deg, #db5945 0, #fbf0adeb 59%);
          background-repeat: no-repeat;
          background-attachment: fixed;
        }

        .message-view__window {
          overflow-x: hidden;
          width: 60vw;
          height: 100%;
          border-right: 5px solid var(--color-background);
          border-left: 5px solid var(--color-background);
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          position: relative;
          box-shadow: var(--shadow);
        }

        :global(.message-view .heading) {
          margin: 0;
        }
        
        @media (max-width: 1199px) {
          .message-view__window {
            width: 100%;
            border: 0;
          }

          :global(.message-view .button__text) {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0,0,0,0);
            border: 0;
          }
        }
      `}</style>
    </div>
  );
}
