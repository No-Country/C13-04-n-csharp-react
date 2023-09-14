const InputCardConvert = ({ value, onChange, className, type, readOnly }) => {
  return (
    <input
    style={{border: '1px solid', borderColor: '#FF7C03', borderRadius: '1rem'}}
      step={"any"}
      value={value}
      type={type}
      className={className}
      onChange={onChange}
      readOnly={readOnly}
      onKeyDown={
        type === "number"
          ? (evt) => evt.key === "e" && evt.preventDefault()
          : false
      }
    />
  );
};

export default InputCardConvert;
