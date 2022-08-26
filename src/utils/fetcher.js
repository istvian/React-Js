export const fetcher = (Fn, params) => {
  return () => Fn(params);
};
