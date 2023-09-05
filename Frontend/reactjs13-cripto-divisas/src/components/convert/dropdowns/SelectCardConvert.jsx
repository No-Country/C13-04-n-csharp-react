const SelectCardConvert = ({ value, onChange, options }) => {
  return (
    <select
      className="form-select"
      aria-label="Default select example"
      onChange={onChange}
    >
      <option value={value}>{value}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectCardConvert;
