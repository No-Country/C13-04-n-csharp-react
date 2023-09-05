import CardCripto from "../Cards/CardCripto";

function SectionInfo() {
  return (
    <section id="convertInfo" className="col-xxl-12">
      <div className="row g-5 g-xl-10 justify-content-center">
        <div className="col-md-3">
          <CardCripto
            title="Bitcoin"
            abbr="BTC"
            image="/shapes/bitcoin.svg"
            style={{ backgroundColor: "#F6E5CA" }}
          />
        </div>
        <div className="col-md-3">
          <CardCripto
            title="Etherium"
            abbr="ETH"
            image="/shapes/ethereum.svg"
            style={{ backgroundColor: "#F3D6EF" }}
          />
        </div>
        <div className="col-md-3">
          <CardCripto
            title="Dogecoin"
            abbr="DOGE"
            image="/shapes/dogecoin.svg"
            style={{ backgroundColor: "#BFDDE3" }}
          />
        </div>
      </div>
    </section>
  );
}

export default SectionInfo;
