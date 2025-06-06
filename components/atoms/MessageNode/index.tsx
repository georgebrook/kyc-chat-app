import { bem } from "@/lib/bem";
import { ReactNode } from "react";

interface Props {
  sender: 'desktop' | 'mobile';
  children?: ReactNode;
  currentSender: 'desktop' | 'mobile';
  className?: string;
  modifiers?: string[];
}

export default function MessageNode({
  sender,
  children,
  currentSender,
  className,
  modifiers = [],
}: Props) {
  const isCurrent = sender === currentSender;
  const baseModifiers = isCurrent ? [sender, 'current'] : [sender];
  const combinedModifiers = [...baseModifiers, ...modifiers];
  const finalClassName = className ?? bem('message', '', combinedModifiers);
  const formattedSender = isCurrent ? 'You' : sender.charAt(0).toUpperCase() + sender.slice(1);

  return (
    <div className={finalClassName}>
      <span className={bem('message', 'label')}>{formattedSender}:</span>
      <div className={bem('message', 'text')}>
        {children}
      </div>


      <style jsx>{`
        .message {
          margin: 0 var(--space-default);
          width: max-content;
          z-index: 1;
          position: relative;
        }

        .message__label {
          margin-bottom: 10px;
          display: block;
          font-family: var(--font-copy);
          font-size: 16px;
          font-weight: 600;
          color: #ffffff;
        }
        
        .message__text {
          padding: 10px var(--space-default);
          width: max-content;
          position: relative;
          display: flex;
          background-color: var(--color-background);
          border-radius: var(--radius-small);
          box-shadow: var(--shadow);
          margin-bottom:var(--space-default);
          font-size: 18px;
          font-weight: 100;
        }

        .message__text::before {
          content: '';
          position: absolute;
          width: 0;
          height: 0;
          left: 0;
          right: auto;
          top: auto;
          bottom: -7px;
          border: 10px solid;
          border-color: transparent transparent transparent var(--color-background);
        }

        .message--current {
          align-self: flex-end;
        }

        .message--current .message__label {
          text-align: right;
        }
        
        .message--current .message__text::before {
          left: auto;
          right: 0;
          transform: rotate(180deg);
        }
      `}</style>
    </div>
  );
}

