import { cvFileName } from "../constants";

export const sleep = (ms: number): Promise<void> =>
  new Promise((res) => setTimeout(res, ms));

export const getNameFromLink = (link: string) => {
  const name = link.replace("/", "").trim();
  return name ? name.charAt(0).toUpperCase() + name.slice(1) : "Home";
};

export const handlePrint = (url?: string | null) => {
  if (!url) return;
  const printWindow = window.open(url, "_blank");
  printWindow?.focus();
  printWindow?.print();
};

export const handleDownload = (
  url?: string | null,
  fileName: string = cvFileName
) => {
  if (!url) return;
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const getCurrentYear = () =>
  new Date().toLocaleDateString(undefined, {
    year: "numeric",
  });

export function multiplyArray<T>(array: T[], iter: number): T[] {
  return iter <= 1 ? array : [...array, ...multiplyArray(array, iter - 1)];
}

export function calculateMultiplyNumber(val: number) {
  if (val <= 1) return 10;
  if (val < 6) return val * 5;
  if (val <= 10) return 1;
  return 0;
}
