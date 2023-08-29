import SelectCardConvert from "../dropdowns/SelectCardConvert";
import InputCardConvert from "../inputs/InputCardConvert";

function CardConvert({ inputValue, selectValue }) {
  const abbrs = ["USD", "EUR", "PEN", "BTC", "COP", "ARS"].filter(
    (coin) => coin !== selectValue.value
  );

  return (
    <div
      className="card card-flush h-xl-70"
      style={{ backgroundColor: "#d8f8e1" }}
    >
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
          <SelectCardConvert
            value={selectValue.value}
            onChange={selectValue.onChange}
            options={abbrs}
          />
        </div>
      </div>
      {/*<!--begin::Body-->*/}
      <div className="card-body text-center p-3">
        <InputCardConvert
          value={inputValue.value}
          onChange={inputValue.onChange}
        />
      </div>
    </div>
  );
}

export default CardConvert;