import styles from '../components/style/Button.module.css';
// eslint-disable-next-line react/prop-types
function Button({ className, children, ...rest }) {
  // console.log(children);
  return (
    <>
      <button className={`${styles.button}  ${className} `} {...rest}>
        {children}
      </button>
    </>
  );
}

export default Button;
