export const isStorybook = () =>
  typeof window !== 'undefined' &&
  !!window.location.href.includes('localhost:6006');
