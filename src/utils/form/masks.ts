export const normalizeCNH = (value: string | undefined) => {
  if (!value) return;

  return value.replace(/[\D]/g, "");
};
