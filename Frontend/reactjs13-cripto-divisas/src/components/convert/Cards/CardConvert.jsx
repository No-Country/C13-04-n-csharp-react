import { useEffect } from "react";

function CardConvert(props) {
  const abbrs = ["USD", "EUR", "PEN", "BTC", "COP", "ARS"].filter((coin) => {
    return props.abbr !== coin;
  });

  const selectItems = abbrs.map((abbr, index) => (
    <option key={index} value={abbr}>{abbr}</option>
  ));

  const handleInputChange = (event) => {
    props.setInputValue(event.target.value);
  };

  const handleSelectChange = (event) => {
    props.setSelectValue(event.target.value);
  };

  useEffect(() => {
    props.setSelectValue(props.abbr);
  }, []);

  return (
    <div className="card card-flush h-xl-70" style={props.style}>
      {/*<!--begin::Header-->*/}
      <div
        className="card-header flex-nowrap justify-content-center"
        style={{ marginBottom: "-20px" }}
      >
        {/*<!--begin::Title-->*/}
        <div className="d-flex align-items-center fw-bold">
          {/* <!--begin::Label--> */}
          <div className="text-gray-400 fs-7 me-2">Moneda</div>
          {/* <!--begin::Select--> */}
          <select
            className="form-select form-select-transparent text-graY-800 fs-base lh-1 fw-bold py-0 ps-3 w-auto"
            data-control="select2"
            data-hide-search="true"
            data-placeholder="Select an option"
            onChange={handleSelectChange}
          >
            <option value={props.selectValue}>{props.selectValue}</option>
            {selectItems}
          </select>
        </div>
      </div>
      {/*<!--begin::Body-->*/}
      <div className="card-body text-center p-3">
        <input
          step={"any"}
          value={props.inputValue}
          type="number"
          className="form-control rounded-pill w-75 d-inline-block p-3"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}

export default CardConvert;
