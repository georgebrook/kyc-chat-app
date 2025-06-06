import Heading from '@atoms/Heading';
import Icon from '@atoms/Icon';
import Button from '@molecules/Button';
import { bem } from '@/lib/bem';

interface Props {
  sender: 'desktop' | 'mobile';
  onBack: () => void;
  onClearChat: () => void;
}

export default function MessagesHeader({ sender, onBack, onClearChat }: Props) {
  return (
    <div className={bem('message-view', 'header')}>
      <Heading level={2}>
        {sender === 'desktop' ? (
          <>
            <Icon name="desktop" desc="Desktop Client" size={25} />
            Desktop
          </>
        ) : (
          <>
            <Icon name="mobile" desc="Mobile Client" size={25} />
            Mobile
          </>
        )}
      </Heading>
      <Button onClick={onBack} iconName="home" iconPosition="before" modifiers={['secondary']}>
        Home
      </Button>
      <Button onClick={onClearChat} iconName="bin" iconPosition="before" modifiers={['caution']}>
        Clear Chat
      </Button>


      <style jsx>{`
        .message-view__header {
          display: flex;
          align-items: center;
          padding: 10px var(--space-default);
          margin-bottom: auto;
          box-shadow: var(--shadow);
          background: var(--color-background);
        }

        :global(.message-view__header .button--secondary) {
          margin: 0 10px 0 auto;
        }
      `}</style>
    </div>
  );
}
