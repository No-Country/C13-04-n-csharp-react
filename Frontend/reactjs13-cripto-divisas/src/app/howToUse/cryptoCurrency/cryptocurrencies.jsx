import React from "react";

function Cryptocurrencies() {
    return (
        <div className="container">
            <div className=" rounded-4"
                style={{ backgroundColor: '#C6C6C6' }}>
                <div className="m-4 p-3">
                    <h2>¿Qué son las criptomonedas?</h2>
                    <p style={{ fontSize: '17px' }}>
                        Las criptomonedas son monedas digitales descentralizadas que utilizan la
                        criptografía para garantizar la seguridad de las transacciones y controlar
                        la creación de nuevas unidades. A diferencia de las monedas tradicionales,
                        las criptomonedas no están respaldadas por ningún gobierno o entidad
                        central, lo que las hace independientes de la influencia política y
                        económica.
                    </p>
                </div>
            </div>

            <div className=" rounded-4"
                style={{ backgroundColor: '#C6C6C6' }}>
                <div className="m-4 p-3">
                    <h2 className="text-xl">¿Cómo funcionan las criptomonedas?</h2>
                    <p style={{ fontSize: '17px' }}>
                        Las criptomonedas funcionan a través de una tecnología llamada blockchain,
                        que es un registro público de todas las transacciones realizadas con la
                        criptomoneda. Cada transacción se verifica y se almacena de forma segura en
                        bloques enlazados entre sí, lo que garantiza la integridad de la cadena y
                        la inmutabilidad de las transacciones.
                    </p>
                </div>
            </div>

            <div className=" rounded-4"
                style={{ backgroundColor: '#C6C6C6' }}>
                <div className="m-4 p-3">
                    <h2 className="text-xl">¿Para qué se utilizan las criptomonedas?</h2>
                    <p style={{ fontSize: '17px' }}>
                        Las criptomonedas tienen diversas aplicaciones, incluyendo:
                    </p>
                    <ul style={{ fontSize: '16px' }}>
                        <li>Realizar transacciones seguras y rápidas en línea.</li>
                        <li>Como inversión con la esperanza de que su valor aumente con el tiempo.</li>
                        <li>Para participar en proyectos de tecnología blockchain.</li>
                        <li>Facilitar transferencias internacionales de dinero.</li>
                    </ul>
                </div>
            </div>

            <div className=" rounded-4"
                style={{ backgroundColor: '#C6C6C6' }}>
                <div className="m-4 p-3">
                    <h2 className="text-xl">Importancia de las criptomonedas</h2>
                    <p style={{ fontSize: '17px' }}>
                        Las criptomonedas están cambiando la forma en que vemos y utilizamos el dinero.
                        Ofrecen una alternativa a las monedas tradicionales y pueden proporcionar
                        beneficios como la descentralización, la seguridad y la accesibilidad global.
                        Además, la tecnología blockchain que subyace a las criptomonedas tiene el
                        potencial de transformar industrias enteras, como las finanzas y la cadena de
                        suministro.
                    </p>
                </div>
            </div>


        </div>
    );
}

export default Cryptocurrencies;
