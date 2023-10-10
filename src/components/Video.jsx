import styles from '../components/style/Video.module.css';
// eslint-disable-next-line react/prop-types
function Video({ title, id, noq }) {
  return (
    <div className={styles.video}>
      <img
        style={{ width: '100%', height: '100%' }}
        src={`http://img.youtube.com/vi/${id}/hqdefault.jpg`}
        alt=""
      />
      <p>{title}</p>
      <div className={styles.qmeta}>
        <p>{noq} Questions</p>
        <p>Total Point : {noq * 5}</p>
      </div>
    </div>
  );
}

export default Video;
