import { cvFileName } from "../constants";

export const sleep = (ms: number): Promise<void> =>
  new Promise((res) => setTimeout(res, ms));

export const getNameFromLink = (link: string) => {
  const name = link.replace("/", "").trim();
  return name ? name.charAt(0).toUpperCase() + name.slice(1) : "Home";
};

export const handlePrint = (url: string) => {
  if (!url) return;
  const printWindow = window.open(url, "_blank");
  printWindow?.focus();
  printWindow?.print();
};

export const handleDownload = (url: string, fileName: string = cvFileName) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
