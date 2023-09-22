// eslint-disable-next-line react/prop-types
function  Checkbox({ className, text, ...rest }) {
  return (
    <div>
      <label className={className}>
        <input type="checkbox" {...rest} />
        <span> {text}</span>
      </label>
    </div>
  );
}

export default Checkbox;
