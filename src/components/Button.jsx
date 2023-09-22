import styles from '../components/style/Button.module.css';
// eslint-disable-next-line react/prop-types
function Button({ className, children }) {
  console.log(children);
  return (
    <div>
      <div className={`${styles.button}  ${className} `}>{children}</div>
    </div>
  );
}

export default Button;
