type Props = {
  style: string;
  text: string;
};
const LogoComponent: React.FC<Props> = ({ style, text }) => {
  return (
    <div className={style}>
      <h1>{text}</h1>
    </div>
  );
};

export default LogoComponent;
