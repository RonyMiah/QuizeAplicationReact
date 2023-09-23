import styles from '../components/style/Button.module.css';
// eslint-disable-next-line react/prop-types
function Button({ className, children }) {
  // console.log(children);
  return (
    <>
      <button className={`${styles.button}  ${className} `}>{children}</button>
    </>
  );
}

export default Button;
