const SelectCardConvert = ({ value, onChange, options }) => {
  return (
    <select
      className="form-select form-select-transparent text-graY-800 fs-base lh-1 fw-bold py-0 ps-3 w-auto"
      data-control="select2"
      data-hide-search="true"
      data-placeholder="Select an option"
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