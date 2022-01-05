export const limitText = (text, limit = 25) => {
  if (!text) return;

  let ellipsis = "";
  text = text.trim();

  if (!/\s/.test(text.substr(0, limit))) {
    limit = 20;
  }

  if (text.length > limit) {
    ellipsis = "...";
  }

  return `${text.substr(0, limit)}${ellipsis}`;
};

export const capitalizeText = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
