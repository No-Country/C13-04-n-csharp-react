
function CardCripto({style, title, abbr, image}) {
  return (
    <div
      className="card card-flush h-xl-60"
      style={style}
    >
      {/*<!--begin::Header-->*/}
      <div
        className="card-header flex-nowrap"
        style={{ marginBottom: "-20px" }}
      >
        {/*<!--begin::Title-->*/}
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold fs-4 text-gray-800">{title}</span>
          <span className="mt-1 fw-semibold fs-7">
            36,668 USD equivale a 1 {abbr}
          </span>
        </h3>
        {/*<!--end::Title-->*/}
      </div>
      {/*<!--end::Header-->*/}
      {/*<!--begin::Body-->*/}
      <div className="card-body text-center p-3">
        {/*<!--begin::Image-->*/}
        <img src={image} className="h-60px" alt="" />
        {/*<!--end::Image-->*/}
        {/*<!--begin::Section-->*/}
        <div className="text-start">
          <span className="d-block fw-bold fs-5 text-gray-800">
            0.44554576 {abbr}
          </span>
          <span className="mt-1 fw-semibold fs-5">19,335,45 USD</span>
        </div>
        {/*<!--end::Section-->*/}
      </div>
      {/*<!--end::Body-->*/}
    </div>
  );
}

export default CardCripto;
