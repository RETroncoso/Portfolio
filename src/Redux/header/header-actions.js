export const SHOW_HEADER = "SHOW_HEADER";
export const HIDE_HEADER = "HIDE_HEADER";
export const TOGGLE_HEADER = "TOGGLE_HEADER";

export const showHeader = () => ({
  type: SHOW_HEADER,
});

export const hideHeader = () => ({
  type: HIDE_HEADER,
});

export const toggleHeader = () => ({
  type: TOGGLE_HEADER,
});
