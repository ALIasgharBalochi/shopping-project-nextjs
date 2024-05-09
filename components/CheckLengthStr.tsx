type Props = {
  str: string;
  n: number;
};
const CheckLengthStr: React.FC<Props> = ({ str, n }): string => {
  return str?.length > n ? str.substring(0, n - 1) + "..." : str;
};
export default CheckLengthStr
