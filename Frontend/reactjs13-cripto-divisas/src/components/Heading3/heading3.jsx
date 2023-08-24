"use client";
import Link from "next/link";
import "bootstrap/dist/js/bootstrap.min.js";
import "../Heading3/heading3.css"
// import metamask from "../Heading3/metamask.png"

function Heading3 (){
    return(
        <>
            <div className="container-fluid" id="heading3">
                <div className="row">
                    <div className="col-md-6 d-flex d-flex flex-column" id="side-left">
                       <div className="container-fluid alert alert-danger mt-2" id="alert" role="alert">
                        Buy this crypto!
                        </div>
                        <div className="row d-flex justify-content-beetwen">
                        <div className="d-flex justify-content-center">
                        <div className="col-md-6 ms-5 p-5" id="wallet-left">
                            <a href="https://accounts.binance.com/en/login?return_to=aHR0cHM6Ly93d3cuYmluYW5jZS5jb20vZXMvc2VuZC1jYXNo">

                            <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Binance-coin-bnb-logo.png"
                            id="wallets"
                            className="rounded-circle"
                            alt="...">
                            </img>

                            </a>
                        </div>
                        <div className="col-md-6 ms-5 p-5">
                            <img 
                            src="https://www.exodus.com/brand/img/logo.svg"
                            id="wallets"
                            className="rounded-circle"
                            alt="...">
                            </img>
                        </div>
                        </div>

                        </div>

                        <div className="row d-flex justify-content-beetwen">
                        <div className="d-flex justify-content-center">
                        <div className="col-md-6 mt-5 ms-5 p-5">
                            <img 
                            src="https://altcoinsbox.com/wp-content/uploads/2022/12/coinbase-logo.webp"
                            id="wallets"
                            className="rounded-circle"
                            alt="...">
                            </img>
                        </div>
                        <div className="col-md-6 mt-5 ms-5 p-5">
                            <img 
                            src="https://altcoinsbox.com/wp-content/uploads/2023/01/crypto.com-logo.png"
                            id="wallets"
                            className="rounded-circle"
                            alt="...">
                            </img>
                        </div>
                        </div>

                        </div>

                        <div className="row d-flex justify-content-beetwen">
                        <div className="d-flex justify-content-center">
                        <div className="col-md-6 mt-5 ms-5 mb-2 p-5">
                            <img 
                            src="https://altcoinsbox.com/wp-content/uploads/2023/01/bitfinex-logo.webp"
                            id="wallets"
                            className="rounded-circle"
                            alt="...">
                            </img>
                        </div>
                        <div className="col-md-6 mt-5 ms-5 mb-2 p-5">
                            <img 
                            src="https://logolook.net/wp-content/uploads/2022/05/Metamask-Logo.png"
                            id="wallets"
                            className="rounded-circle"
                            alt="...">
                            </img>
                        </div>
                        </div>

                        </div>
                    </div>
                    <div className="col-md-6 ml-0">
                        <img 
                            src="https://i0.wp.com/criptotendencia.com/wp-content/uploads/2020/09/Entender-el-cripto-mercado-5.png?resize=660%2C512&ssl=1"
                            id="gif"
                            className="ml-0"
                            alt="...">
                            </img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Heading3