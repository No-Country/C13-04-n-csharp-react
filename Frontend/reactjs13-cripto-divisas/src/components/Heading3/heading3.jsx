"use client";
import Link from "next/link";
import "bootstrap/dist/js/bootstrap.min.js";
import "../Heading3/heading3.css"
// import metamask from "../Heading3/metamask.png"

function Heading3 (){
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-flex d-flex flex-column" id="side-left">
                       <div className="container-fluid alert alert-danger mt-2" id="alert" role="alert">
                        Buy this crypto!
                        </div>
                        <div className="row d-flex justify-content-beetwen">
                        <div className="d-flex justify-content-center">
                        <div className="col-md-6">
                            <img 
                            src="https://logolook.net/wp-content/uploads/2022/05/Metamask-Logo.png"
                            id="wallets"
                            className="rounded-circle"
                            alt="...">
                            </img>
                        </div>
                        <div className="col-md-6 ml-3">
                            <img 
                            src="https://logolook.net/wp-content/uploads/2022/05/Metamask-Logo.png"
                            id="wallets"
                            className="rounded-circle"
                            alt="...">
                            </img>
                        </div>
                        </div>

                        </div>

                        <div className="row d-flex justify-content-beetwen">
                        <div className="d-flex justify-content-center">
                        <div className="col-md-6 mt-5">
                            <img 
                            src="https://logolook.net/wp-content/uploads/2022/05/Metamask-Logo.png"
                            id="wallets"
                            className="rounded-circle"
                            alt="...">
                            </img>
                        </div>
                        <div className="col-md-6 mt-5">
                            <img 
                            src="https://logolook.net/wp-content/uploads/2022/05/Metamask-Logo.png"
                            id="wallets"
                            className="rounded-circle"
                            alt="...">
                            </img>
                        </div>
                        </div>

                        </div>

                        <div className="row d-flex justify-content-beetwen">
                        <div className="d-flex justify-content-center">
                        <div className="col-md-6 mt-5">
                            <img 
                            src="https://logolook.net/wp-content/uploads/2022/05/Metamask-Logo.png"
                            id="wallets"
                            className="rounded-circle"
                            alt="...">
                            </img>
                        </div>
                        <div className="col-md-6 ml-3 mt-5">
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
                            src="https://media.tenor.com/QqgcGkB7X50AAAAC/bitcoin-chart-bitcoin-zoom.gif"
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