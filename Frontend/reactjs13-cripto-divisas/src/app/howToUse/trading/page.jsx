import React from "react";
import Trading from "./trading";
import 'bootstrap/dist/css/bootstrap.min.css';

function Page() {
    return (
        <div className="fondo-con-opacidad" style={{
            backgroundImage: 'url("/images/graphics/trading.png")',
            backgroundSize: 'cover',
        }}>
            <div className="container">
                <h1 class="text-center m-3 fw-bold text-xl">TRADING</h1>
            </div>

            <section className="mx-2">
                <div className="container ">
                <Trading />
                </div>
            </section>
        </div >
    );
}

export default Page;