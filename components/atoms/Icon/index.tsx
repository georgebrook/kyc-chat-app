interface Props extends React.SVGProps<SVGSVGElement> {
  name: string;
  desc?: string;
  size?: number;
}

export default function Icon({ name, desc, size = 24, ...rest }: Props) {
  const isDecorative = !desc?.trim();
  const titleId = `icon-title-${name}`;
  const descId = desc?.trim() ? `icon-desc-${name}` : undefined;

  return (
    <svg
      role={isDecorative ? 'presentation' : 'img'}
      aria-hidden={isDecorative ? true : undefined}
      aria-labelledby={!isDecorative ? titleId : undefined}
      aria-describedby={!isDecorative ? descId : undefined}
      width={size}
      height={size}
      {...rest}
    >
      <use href={`/icon-sprite.svg#${name}`} />
      {!isDecorative && (
        <>
          <title id={titleId}>{desc || name}</title>
          {desc && <desc id={descId}>{desc}</desc>}
        </>
      )}
    </svg>
  );
}
