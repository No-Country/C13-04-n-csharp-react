import React from "react";

function CardConvert({style, abbr}) {
  return (
    <div
      className="card card-flush h-xl-70"
      style={style}
    >
      {/*<!--begin::Header-->*/}
      <div
        className="card-header flex-nowrap"
        style={{ marginBottom: "-20px" }}
      >
        {/*<!--begin::Title-->*/}
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold fs-4 text-gray-800">
            Moneda {abbr}
          </span>
        </h3>
        {/*<!--end::Title-->*/}
      </div>
      {/*<!--end::Header-->*/}
      {/*<!--begin::Body-->*/}
      <div className="card-body text-center p-3">
        <input type="number" className="form-control rounded-pill" />
      </div>
      {/*<!--end::Body-->*/}
    </div>
  );
}

export default CardConvert;
