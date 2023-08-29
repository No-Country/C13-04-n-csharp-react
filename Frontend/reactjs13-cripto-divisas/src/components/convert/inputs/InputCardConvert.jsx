const InputCardConvert = ({ value, onChange }) => {
  return (
    <input
      step={"any"}
      value={value}
      type="number"
      className="form-control rounded-pill w-75 d-inline-block p-3"
      onChange={onChange}
    />
  );
};

export default InputCardConvert;