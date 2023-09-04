import React from "react";

function Currencies() {
    return (
        <div className="container">
            <div className=" rounded-4"
                style={{ backgroundColor: '#C6C6C6' }}>
                <div className="m-4 p-3">
                    <h2>¿Qué son las Divisas?</h2>
                    <p style={{ fontSize: '17px' }}>
                        Las divisas son monedas aceptadas a nivel internacional que desempeñan un papel crucial
                        en el comercio y las finanzas globales. Actúan como un medio de intercambio que permite
                        a las personas y empresas de diferentes países comprar bienes y servicios en todo el mundo.
                        Además, las divisas son fundamentales en los mercados financieros, donde los inversores
                        las utilizan para diversificar sus carteras y gestionar riesgos. En resumen, las divisas
                        son un componente esencial de la economía global, impulsando el comercio y facilitando
                        las transacciones internacionales.
                    </p>
                </div>
            </div>

            <div className=" rounded-4"
                style={{ backgroundColor: '#C6C6C6' }}>
                <div className="m-4 p-3">
                    <h2 className="text-xl">Usos de las Divisas</h2>
                    <p style={{ fontSize: '17px' }}>
                        Las divisas desempeñan un papel vital en la economía global. Algunos de sus usos clave incluyen:
                    </p>
                    <ul style={{ fontSize: '16px' }}>
                        <li>Facilitar el comercio internacional y el intercambio comercial.</li>
                        <li>Actuar como reserva de valor, preservando la riqueza con el tiempo.</li>
                        <li>Apoyar sistemas financieros y políticas monetarias.</li>
                        <li>Permitir mecanismos de tipos de cambio en los mercados de divisas.</li>
                    </ul>
                </div>
            </div>

            <div className=" rounded-4"
                style={{ backgroundColor: '#C6C6C6' }}>
                <div className="m-4 p-3">
                    <h2 className="text-xl">Importancia de las Divisas</h2>
                    <p style={{ fontSize: '17px' }}>
                        Las divisas son la base del sistema financiero moderno. Facilitan el crecimiento económico,
                        la cooperación internacional y la inversión. La estabilidad y confiabilidad de una divisa
                        son esenciales para mantener la confianza en los mercados financieros y promover la estabilidad
                        económica.
                    </p>
                </div>
            </div>


        </div>
    );
}

export default Currencies;
