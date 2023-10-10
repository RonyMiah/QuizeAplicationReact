import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import styles from './style/MiniPlayer.module.css';

// eslint-disable-next-line react/prop-types
function MiniPlayer({ id, title }) {
  const buttonRef = useRef();
  const [status, setStutas] = useState(false);
  const videoUrl = `https://www.youtube.com/watch?v=${id}`;

  function toggleMiniplayer() {
    if (!status) {
      buttonRef.current.classList.remove(styles.floatingBtn);
      setStutas(true);
    } else {
      buttonRef.current.classList.add(styles.floatingBtn);
      setStutas(false);
    }
  }

  return (
    <>
      <div
        ref={buttonRef}
        className={`${styles.miniPlayer}  ${styles.floatingBtn}`}
        onClick={toggleMiniplayer}
      >
        <span className={`material-icons-outlined ${styles.open}`}>
          play_circle_filled
        </span>
        <span
          className={`material-icons-outlined ${styles.close}`}
          onClick={toggleMiniplayer}
        >
          close
        </span>
        <ReactPlayer
          className={styles.player}
          url={videoUrl}
          width="300px"
          height="168px"
          playing={status}
          controls
        />
        <p>{title}</p>
      </div>
    </>
  );
}

export default MiniPlayer;
