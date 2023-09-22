import { Link } from 'react-router-dom';
import styles from '../components/style/Videos.module.css';
import Video from './Video';

function Videos() {
  return (
    <>
      <div className={styles.videos}>
        <Link to="/quize">
          <Video />
        </Link>
        <Link to="/quize">
          <Video />
        </Link>
        <Link to="/quize">
          <Video />
        </Link>
        <Link to="/quize">
          <Video />
        </Link>
        <Link to="/quize">
          <Video />
        </Link>
        <Link to="/quize">
          <Video />
        </Link>
        <Link to="/quize">
          <Video />
        </Link>
        <Link to="/quize">
          <Video />
        </Link>
        <Link to="/quize">
          <Video />
        </Link>
      </div>
    </>
  );
}

export default Videos;
