import { bem } from "@/lib/bem";

interface Props {
  value: string;
  onChange: (value: string) => void;
  onEnterPress: () => void;
  className?: string;
  id?: string;
  label?: string;
}

export default function TextInput({
  value,
  onChange,
  onEnterPress,
  className = bem('input'),
  id = 'chat-input',
  label = 'Type your message and press Enter to send',
}: Props) {
  return (
    <>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onEnterPress()}
        placeholder="Type a message"
        className={className}
      />


      <style jsx>{`
        .input {
          width: 100%;
          padding: 10px 15px;
          font-size: 1rem;
          border: 2px solid var(--color-border);
          border-radius: 6px;
          outline-offset: 2px;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          background-color: var(--color-background);
          font-family: var(--font-heading);
          flex-grow: 1;
        }

        .input::placeholder {
          color: var(--color-border);
        }

        .input:focus {
          border-color: var(--color-neutral);
          outline: none;
          box-shadow: var(--shadow-small);
        }
      `}</style>
    </>
  );
}
