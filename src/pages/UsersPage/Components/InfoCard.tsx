import styles from "./InfoCard.module.scss";

type InfoCardProps = {
  info: {
    icon: string;
    textDescription: string;
    number: string;
  };
};

const InfoCard = (props: InfoCardProps) => {
  return (
    <>
      <div className={styles.InfoCard}>
        <img src={props.info.icon} alt={`${props.info.textDescription}_icon`} />
        <p>{props.info.textDescription}</p>
        <h2>{props.info.number}</h2>
      </div>
    </>
  );
};

export default InfoCard;
