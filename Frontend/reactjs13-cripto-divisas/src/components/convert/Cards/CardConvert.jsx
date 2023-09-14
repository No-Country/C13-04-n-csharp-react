import SelectCardConvert from "../dropdowns/SelectCardConvert";
import InputCardConvert from "../inputs/InputCardConvert";

function CardConvert({ inputValue, selectValue, options, label }) {
  return (
    <div className="card card-flush" style={{ backgroundColor: "#d8f8e1" }}>
      {/*<!--begin::Header-->*/}
      <div className="card-header flex-nowrap justify-content-center">
        {/*<!--begin::Title-->*/}
        <div className="d-flex align-items-center fw-bold">
          {/* <!--begin::Label--> */}
          <div className="text-gray-400 fs-6 me-2">{label}</div>
          {/* <!--begin::Select--> */}
          <SelectCardConvert
            value={selectValue.value}
            onChange={selectValue.onChange}
            options={options}
          />
        </div>
      </div>
      {/*<!--begin::Body-->*/}
      <div className="card-body text-center">
        <InputCardConvert
          
          value={inputValue.value}
          onChange={inputValue.onChange}
          className="form-control rounded-pill w-75 d-inline-block mt-3 p-2"
          type="number"
          readOnly={false}
        />
      </div>
    </div>
  );
}

export default CardConvert;
