interface Props {
  text: string;
  className?: string;
}

export default function ErrorText({ text, className = '' }: Props) {
  return (
    <span className={`error ${className}`.trim()}>{text}</span>
  );
}

