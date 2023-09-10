"use client";
import { useState } from "react";
import "../Heading3/heading3.css";
import binance from "../Heading3/binance.png"
import ChartComponent from "./graphic";

function Heading3() {

  const [imageAlerts, setImageAlerts] = useState({});

  const toggleAlert = (imageId) => {
    setImageAlerts((prevState) => ({
      ...prevState,
      [imageId]: !prevState[imageId] || true,
    }));
  };

  const closeAlertAfterDelay = (imageId) => {
    setTimeout(() => {
      setImageAlerts((prevState) => ({
        ...prevState,
        [imageId]: false,
      }));
    }, 1000); // 3000 milisegundos (3 segundos), ajusta este valor según tu preferencia
  };

  return (
    <>
      <div className="container mt-5 bg-light bg-gradient" id="heading3">
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
              Puedes conseguir mas informacion sobre crypto en estos exchanges!
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
                      onMouseEnter={() => {
                        toggleAlert('imagen1');
                        closeAlertAfterDelay('imagen1');
                      }}
                      onMouseLeave={() => toggleAlert('imagen1')}
                    />
                  </a>
                  {imageAlerts['imagen1'] && (
        <div className="alert alert-danger" role="alert" id="alert-wallet">
          Binance es una plataforma de intercambio de criptomonedas líder a nivel mundial que permite a los usuarios comprar, vender y negociar una variedad de criptomonedas. También ofrece servicios de almacenamiento y financiamiento de criptomonedas, así como una gama de productos y herramientas para inversores y comerciantes de criptomonedas.
        </div>
      )}
                </div>
                <div className="col-md-6 ms-5 p-5" id="wallet-right">
                  <a href="https://www.exodus.com/" target="_blank">
                    <img
                      src="https://www.exodus.com/brand/img/logo.svg"
                      id="wallets"
                      className="rounded-circle"
                      alt="..."
                      onMouseEnter={() => {
                        toggleAlert('imagen2');
                        closeAlertAfterDelay('imagen2');
                      }}
                      onMouseLeave={() => toggleAlert('imagen2')}
                    />
                  </a>
                  {imageAlerts['imagen2'] && (
        <div className="alert alert-danger" role="alert">
          Exodus Wallet es una billetera de criptomonedas que permite a los usuarios almacenar, administrar y intercambiar una variedad de criptomonedas de forma segura en una sola aplicación de software.
        </div>
      )}
                </div>
              </div>
            </div>

            <div className="row d-flex justify-content-beetwen">
              <div className="d-flex justify-content-center">
                <div className="col-md-6 mt-5 ms-5 p-5" id="wallet-right">
                  <a href="https://www.coinbase.com/" target="_blank">
                    <img
                      src="https://altcoinsbox.com/wp-content/uploads/2022/12/coinbase-logo.webp"
                      id="wallets"
                      className="rounded-circle"
                      alt="..."
                      onMouseEnter={() => {
                        toggleAlert('imagen3');
                        closeAlertAfterDelay('imagen3');
                      }}
                      onMouseLeave={() => toggleAlert('imagen3')}
                    />
                  </a>
                  {imageAlerts['imagen3'] && (
        <div className="alert alert-danger" role="alert">
          Coinbase Wallet es una aplicación de billetera de criptomonedas que permite a los usuarios almacenar, recibir y enviar criptomonedas de manera segura. También ofrece la capacidad de interactuar con aplicaciones descentralizadas (DApps) en la cadena de bloques Ethereum y acceder a servicios de intercambio de criptomonedas a través de la plataforma Coinbase.
        </div>
      )}
                </div>
                <div className="col-md-6 mt-5 ms-5 p-5" id="wallet-right">
                  <a href="https://crypto.com/" target="_blank">
                    <img
                      src="https://altcoinsbox.com/wp-content/uploads/2023/01/crypto.com-logo.png"
                      id="wallets"
                      className="rounded-circle"
                      alt="..."
                      onMouseEnter={() => {
                        toggleAlert('imagen4');
                        closeAlertAfterDelay('imagen4');
                      }}
                      onMouseLeave={() => toggleAlert('imagen4')}
                    />
                  </a>
                  {imageAlerts['imagen4'] && (
        <div className="alert alert-danger" role="alert">
Crypto.com es una plataforma de criptomonedas que ofrece una amplia gama de servicios, incluyendo compra, venta, intercambio y almacenamiento de criptomonedas. También proporciona una tarjeta de débito cripto que permite gastar criptomonedas en compras cotidianas y ofrece recompensas en criptomonedas. Además, Crypto.com brinda servicios de préstamos, staking y acceso a una variedad de criptomonedas y tokens.
        </div>
      )}
                </div>
              </div>
            </div>

            <div className="row d-flex justify-content-beetwen">
              <div className="d-flex justify-content-center">
                <div className="col-md-6 mt-5 ms-5 mb-2 p-5" id="wallet-right">
                  <a href="https://www.bitfinex.com/" target="_blank">
                    <img
                      src="https://altcoinsbox.com/wp-content/uploads/2023/01/bitfinex-logo.webp"
                      id="wallets"
                      className="rounded-circle"
                      alt="..."
                      onMouseEnter={() => {
                        toggleAlert('imagen5');
                        closeAlertAfterDelay('imagen5');
                      }}
                      onMouseLeave={() => toggleAlert('imagen5')}
                    />
                  </a>
                  {imageAlerts['imagen5'] && (
        <div className="alert alert-danger" role="alert1">
          Bitfinex es una plataforma de intercambio de criptomonedas que permite a los usuarios comprar, vender y negociar una variedad de criptomonedas. También ofrece herramientas avanzadas para comerciantes, como órdenes avanzadas y apalancamiento, y proporciona liquidez para el mercado de criptomonedas.
        </div>
      )}
                </div>
                <div className="col-md-6 mt-5 ms-5 mb-2 p-5" id="wallet-right">
                  <a href="https://metamask.io/" target="_blank">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Rl_x8HPYQ-kJILOBxV7iNcZiALYDk4KoR85EYl7oVFmhCB6FF3p5wBZi4wdN9BPMmxE&usqp=CAU"
                      id="wallets"
                      className="rounded-circle"
                      alt="..."
                      onMouseEnter={() => {
                        toggleAlert('imagen6');
                        closeAlertAfterDelay('imagen6');
                      }}
                      onMouseLeave={() => toggleAlert('imagen6')}
                    />
                  </a>
                  {imageAlerts['imagen6'] && (
        <div className="alert alert-danger" role="alert1">
          MetaMask es una extensión de navegador y billetera digital que permite a los usuarios interactuar con aplicaciones descentralizadas (DApps) en la cadena de bloques Ethereum y gestionar sus activos criptográficos de manera segura.
        </div>
      )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 container-fluid">
            <ChartComponent />
          </div>
        </div>
      </div>
    </>
  );
}

export default Heading3;
