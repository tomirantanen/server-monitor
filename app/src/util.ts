export const bytesToHumanReadable = (bytes: number): string => {
  if (bytes === 0) {
    return "0 Bytes";
  }

  const k = 1024;
  const decimals = 2;
  const units = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const index = Math.floor(Math.log(bytes) / Math.log(k));

  const value = parseFloat((bytes / Math.pow(k, index)).toFixed(decimals));
  const unit = units[index];

  return `${value} ${unit}`;
};
