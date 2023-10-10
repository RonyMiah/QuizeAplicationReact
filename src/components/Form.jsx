import styles from '../components/style/Form.module.css';

// eslint-disable-next-line react/prop-types
function Form({ className, children, ...rest }) {
  return (
    <div>
      <form className={`${className} ${styles.form}`} action="#" {...rest}>
        {children}
      </form>
    </div>
  );
}

export default Form;
