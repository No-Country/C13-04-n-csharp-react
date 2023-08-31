import "../Heading3/heading3.css";
import binance from "../Heading3/binance.png"
import ChartComponent from "./graphic";

function Heading3() {
  return (
    <>
      <div className="container mt-5 bg-light bg-gradient" id="heading3">
        <h2 className="mt-5 text-center">Heading</h2>
        <div className="row mt-5">
          <div
            className="col-12 col-md-6 d-flex d-flex flex-column mt-5 bg-light bg-gradient"
            id="side-left"
          >
            <div
              className="container-fluid alert alert-danger mt-2"
              id="alert"
              role="alert"
            >
              Buy this crypto!
            </div>
            <div className="row d-flex justify-content-beetwen">
              <div className="d-flex justify-content-center">
                <div className="col-md-6 ms-5 p-5" id="wallet-left">
                  <a href="https://accounts.binance.com/en/login?return_to=aHR0cHM6Ly93d3cuYmluYW5jZS5jb20vZXMvc2VuZC1jYXNo" target="_blank">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Binance-coin-bnb-logo.png"
                      id="wallets"
                      className="rounded-circle"
                      alt="..."
                    />
                  </a>
                </div>
                <div className="col-md-6 ms-5 p-5">
                  <a href="https://www.exodus.com/" target="_blank">
                  <img
                    src="https://www.exodus.com/brand/img/logo.svg"
                    id="wallets"
                    className="rounded-circle"
                    alt="..."
                  />
                  </a>
                </div>
              </div>
            </div>

            <div className="row d-flex justify-content-beetwen">
              <div className="d-flex justify-content-center">
                <div className="col-md-6 mt-5 ms-5 p-5">
                  <a href="https://www.coinbase.com/" target="_blank">
                  <img
                    src="https://altcoinsbox.com/wp-content/uploads/2022/12/coinbase-logo.webp"
                    id="wallets"
                    className="rounded-circle"
                    alt="..."
                  />
                  </a>
                </div>
                <div className="col-md-6 mt-5 ms-5 p-5">
                  <a href="https://crypto.com/" target="_blank">
                  <img
                    src="https://altcoinsbox.com/wp-content/uploads/2023/01/crypto.com-logo.png"
                    id="wallets"
                    className="rounded-circle"
                    alt="..."
                  />
                  </a>
                </div>
              </div>
            </div>

            <div className="row d-flex justify-content-beetwen">
              <div className="d-flex justify-content-center">
                <div className="col-md-6 mt-5 ms-5 mb-2 p-5">
                  <a href="https://www.bitfinex.com/" target="_blank">
                  <img
                    src="https://altcoinsbox.com/wp-content/uploads/2023/01/bitfinex-logo.webp"
                    id="wallets"
                    className="rounded-circle"
                    alt="..."
                  />
                  </a>
                </div>
                <div className="col-md-6 mt-5 ms-5 mb-2 p-5">
                  <a href="https://metamask.io/" target="_blank">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Rl_x8HPYQ-kJILOBxV7iNcZiALYDk4KoR85EYl7oVFmhCB6FF3p5wBZi4wdN9BPMmxE&usqp=CAU"
                    id="wallets"
                    className="rounded-circle"
                    alt="..."
                  />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 ml-0 mt-5">
            <img
              src="https://i0.wp.com/criptotendencia.com/wp-content/uploads/2020/09/Entender-el-cripto-mercado-5.png?resize=660%2C512&ssl=1"
              id="gif"
              className="ml-0 w-100 h-100 w-md-75 h-md-75"
              alt="..."
            />
          </div>
          <ChartComponent/>
        </div>
      </div>
    </>
  );
}

export default Heading3;
