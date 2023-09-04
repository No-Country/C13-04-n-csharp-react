import React from "react";

function Trading() {
    return (
        <div className="container">
            <div className=" rounded-4"
                style={{ backgroundColor: '#C6C6C6' }}>
                <div className="m-4 p-3">
                    <h2>¿Qué es el Trading?</h2>
                    <p style={{ fontSize: '17px' }}>
                        El trading, también conocido como comercio financiero, es el proceso de compra y venta de activos
                        financieros, como acciones, divisas, materias primas y criptomonedas, con el objetivo de obtener
                        ganancias. Los traders participan en los mercados financieros para aprovechar las fluctuaciones
                        de precios y obtener beneficios mediante la compra baja y la venta alta, o viceversa.
                    </p>
                </div>
            </div>

            <div className=" rounded-4"
                style={{ backgroundColor: '#C6C6C6' }}>
                <div className="m-4 p-3">
                    <h2 className="text-xl">Tipos de Trading</h2>
                    <p style={{ fontSize: '17px' }}>
                        Existen diferentes enfoques de trading, que incluyen:
                    </p>
                    <ul style={{ fontSize: '16px' }}>
                        <li><strong>Day Trading:</strong> Compra y venta de activos dentro del mismo día para aprovechar las pequeñas fluctuaciones de precios.</li>
                        <li><strong>Swing Trading:</strong> Mantenimiento de posiciones durante varios días o semanas para aprovechar las tendencias a corto y mediano plazo.</li>
                        <li><strong>Trading a Largo Plazo:</strong> Inversiones a largo plazo que se mantienen durante meses o años, enfocadas en el crecimiento a largo plazo.</li>
                    </ul>
                </div>
            </div>

            <div className=" rounded-4"
                style={{ backgroundColor: '#C6C6C6' }}>
                <div className="m-4 p-3">
                    <h2 className="text-xl">Importancia del Trading</h2>
                    <p style={{ fontSize: '17px' }}>
                        El trading es fundamental en los mercados financieros globales. Ayuda a proporcionar
                        al mercado y permite que los inversionistas gestionen el riesgo y encuentren oportunidades
                        de inversión. Además, el trading puede ser una fuente de ingresos para quienes lo practican
                        con éxito.
                    </p>
                </div>
            </div>


        </div>
    );
}

export default Trading;
