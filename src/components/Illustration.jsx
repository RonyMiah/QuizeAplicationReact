
import styles from '../components/style/Illustration.module.css';

// eslint-disable-next-line react/prop-types
function Illustration({images}) {
  return (
    <div className={styles.illustration}>
      <img src={images} alt="Signup" />
    </div>
  );
}

export default Illustration;
