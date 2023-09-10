import Image from "next/image";
import { getDataFromCrypto } from "@/utils/fetch";

async function CardCripto({ style, title, abbr, image }) {
  let valueUSD = "";
  try {
    const currency = "USD";
    const result = await getDataFromCrypto(1, abbr, currency, "EUR");
    valueUSD = result[currency];
  } catch (error) {
    // alert(`Error: ${error.message}`);
  }
  return (
    <div className="card card-flush h-xl-60" style={style}>
      {/*<!--begin::Header-->*/}
      <div
        className="card-header flex-nowrap"
        style={{ marginBottom: "-20px" }}
      >
        {/*<!--begin::Title-->*/}
        <h3 className="card-title align-items-start flex-column text-center">
          <span className="card-label fw-bold fs-4">{title}</span>
        </h3>
        {/*<!--end::Title-->*/}
      </div>
      {/*<!--end::Header-->*/}
      {/*<!--begin::Body-->*/}
      <div className="card-body text-center">
        {/*<!--begin::Image-->*/}
        <Image
          src={image}
          alt="logo crypto"
          width={100}
          height={100}
          className="mt-2"
        />
        {/*<!--end::Image-->*/}
        {/*<!--begin::Section-->*/}
        <div className="text-start">
          <span className="fs-6 d-block text-center">
            1 {abbr} equivale a {valueUSD} USD
          </span>
        </div>
        {/*<!--end::Section-->*/}
      </div>
      {/*<!--end::Body-->*/}
    </div>
  );
}

export default CardCripto;
