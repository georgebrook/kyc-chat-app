import Icon from '@atoms/Icon';
import { bem } from '@/lib/bem';
import { ReactNode } from 'react';

interface Props {
  onClick: () => void;
  children: ReactNode;
  iconName?: string;
  iconPosition?: 'before' | 'after' | 'only';
  modifiers?: string[];
  iconSize?: number;
}

export default function Button({
  onClick,
  children,
  iconName,
  iconPosition = 'before',
  modifiers = [],
  iconSize = 20,
}: Props) {
  const isIconOnly = iconName && iconPosition === 'only';
  const iconClasses = bem('button', 'icon', [iconPosition]);

  return (
    <button onClick={onClick} className={bem('button', '', modifiers)}>
      {iconName && iconPosition === 'before' && (
        <Icon
          className={iconClasses}
          name={iconName}
          desc={typeof children === 'string' ? children : undefined}
          size={iconSize}
        />
      )}
      {isIconOnly ? (
        <>
          <Icon
            className={iconClasses}
            name={iconName}
            desc={typeof children === 'string' ? children : undefined}
            size={iconSize}
          />
          <span className="sr-only">
            {children}
          </span>
        </>
      ) : (
        <span className='button__text'>{children}</span>
      )}
      {iconName && iconPosition === 'after' && (
        <Icon
          className={iconClasses}
          name={iconName}
          desc={typeof children === 'string' ? children : undefined}
          size={iconSize}
        />
      )}

      <style jsx>{`
        .button {
          display: inline-flex;
          gap: 10px;
          padding: 0.75rem 1rem;
          background-color: var(--color-neutral);
          color: #fff;
          border: none;
          flex: none;
          border-radius: 0.5rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
          font-family: var(--font-heading);
          align-items: center;
        }

        .button--caution {
          background-color: var(--color-caution);
        }

        .button:hover {
          background-color: var(--color-primary);
          box-shadow: var(--shadow-small);
        }
      `}</style>
    </button>
  );
}
