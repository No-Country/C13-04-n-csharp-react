import React from "react";
import Cryptocurrencies from "./cryptocurrencies";
import 'bootstrap/dist/css/bootstrap.min.css';

function Page() {
    return (
        <div className="fondo-con-opacidad" style={{
            backgroundImage: 'url("/images/graphics/bitcoin.png")', 
            backgroundSize: 'cover',
        }}>
            <div className="container">
                <h1 class="text-center m-3 fw-bold text-xl">CRIPTOMONEDAS</h1>
            </div>

            <section className="mx-2">
                <div className="container ">
                    <Cryptocurrencies />
                </div>
            </section>
        </div >
    );
}

export default Page;
