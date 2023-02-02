import Link from "next/link";
import styles from "./index.module.scss";
import HearthIcon from "../../../public/heart-light.svg";

const Index = ({ place }) => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.thumbnail__wrapper}>
        <button className={styles.btn__whishlist}>
          <img src={HearthIcon.src} alt="favoris" />
        </button>
        <img src={place.image} alt={place.title} />
      </div>
      <div className={styles.content}>
        <div className={styles.metadata}>
          <p>{place.title}</p>
          <p><b>{place.price}</b> € / nuit</p>
        </div>
        <div className={styles.rate}>
          <span>{place.rate}</span>
        </div>
      </div>
    </div>
  );
}

export default Index;
