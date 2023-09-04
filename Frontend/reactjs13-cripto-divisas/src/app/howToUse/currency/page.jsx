import React from "react";
import Currencies from "./currencies";
import 'bootstrap/dist/css/bootstrap.min.css';

function Page() {
    return (
        <div className="fondo-con-opacidad" style={{
            backgroundImage: 'url("/images/graphics/divisas.png")',
            backgroundSize: 'cover',
        }}>
            <div className="container">
                <h1 class="text-center m-3 fw-bold text-xl">DIVISAS</h1>
            </div>

            <section className="mx-2">
                <div className="container ">
                    <Currencies />
                </div>
            </section>
        </div >
    );
}

export default Page;