type Modifiers = string[] | undefined;
type ExtraClasses = string | string[] | undefined;

export function bem(
  block: string,
  element?: string | null,
  modifiers?: Modifiers,
  extra?: ExtraClasses
): string {
  const base = element ? `${block}__${element}` : block;
  const modClasses = modifiers?.map(mod => `${base}--${mod}`) || [];

  const extraClasses = Array.isArray(extra)
    ? extra
    : extra
    ? [extra]
    : [];

  return [base, ...modClasses, ...extraClasses].join(' ');
}
