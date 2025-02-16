export const sleep = (ms: number): Promise<void> =>
  new Promise((res) => setTimeout(res, ms));

export const getNameFromLink = (link: string) => {
  const name = link.replace("/", "").trim();
  return name ? name.charAt(0).toUpperCase() + name.slice(1) : "Home";
};
