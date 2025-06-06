'use client';

import { useState, useRef } from 'react';
import { ref, push, set, remove } from 'firebase/database';
import { database } from '@lib/firebase';
import TextInput from '@atoms/TextInput';
import Button from '@/components/molecules/Button';
import { bem } from '@/lib/bem';

interface Props {
  sender: 'desktop' | 'mobile';
  onError: (msg: string) => void;
}

export default function MessageBar({ sender, onError }: Props) {
  const [input, setInput] = useState('');
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleTyping = () => {
    const typingRef = ref(database, `typingStatus/${sender}`);
    set(typingRef, true).catch((err) => {
      console.error('Typing status error:', err);
    });

    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

    typingTimeoutRef.current = setTimeout(() => {
      remove(typingRef).catch((err) => {
        console.error('Error clearing typing status:', err);
      });
    }, 3000);
  };

  const handleInputChange = (value: string) => {
    setInput(value);
    handleTyping();
  };

  const handleSend = async () => {
    if (input.trim() === '') return;

    try {
      const messagesRef = ref(database, 'messages');
      await push(messagesRef, {
        text: input,
        sender,
        timestamp: Date.now(),
      });

      setInput('');
      onError('');
      const typingRef = ref(database, `typingStatus/${sender}`);
      await remove(typingRef);
    } catch (err) {
      console.error('Send error:', err);
      onError('Failed to send message. Please try again.');
    }
  };

  return (
    <div className={bem('message-bar')}>
      <div className={bem('message-bar', 'input')}>
        <TextInput
          value={input}
          onChange={handleInputChange}
          onEnterPress={handleSend}
        />
        <Button onClick={handleSend} iconName="send" iconPosition="before">
          Send Message
        </Button>
      </div>

      <style jsx>{`
        .message-bar {
          background-color: var(--color-background);
          box-shadow: var(--shadow);
          padding: var(--space-default);
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .message-bar__input {
          display: flex;
          width: 100%;
          gap: 10px
        }
      `}</style>
    </div>
  );
}
