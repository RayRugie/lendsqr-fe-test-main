import styles from "./Loader.module.scss";
import BounceLoader from "react-spinners/BounceLoader";

const Loader = () => {
  return (
    <>
      <section className={styles.Loader}>
        <BounceLoader color="#39cdcc" size={80} speedMultiplier={3} />
      </section>
    </>
  );
};

export default Loader;
