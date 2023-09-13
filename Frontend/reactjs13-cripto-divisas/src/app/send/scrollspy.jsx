"use client";
import "../send/scrollspy.css"

function Scrollpy() {

    return (
        <>
            <div className="row">
                <div className="col-4 mt-1" id="inputs-items">
                    <nav id="navbar-example3" className="h-100 flex-column align-items-stretch pe-4 border-end">
                        <nav className="nav nav-pills flex-column">
                            <a className="nav-link ms-3" id="navbar-input" href="#item-1">¿Para que nos pueden servir las criptomonedas?</a>
                            <nav className="nav nav-pills flex-column">
                                <a className="nav-link ms-5 my-1" id="navbar-subinput" href="#item-1-1">Que es el trading con criptomonedas?</a>
                                <a className="nav-link ms-5 my-1" id="navbar-subinput" href="#item-1-2">Se puede enviar remesas con criptomonedas?</a>
                            </nav>
                            <a className="nav-link ms-3" id="navbar-input" href="#item-2">Envio de remesas con Criptomonedas</a>
                            <nav className="nav nav-pills flex-column">
                                <a className="nav-link ms-5 my-1" id="navbar-subinput" href="#item-2-1">Por donde enviar criptomonedas</a>
                                <a className="nav-link ms-5 my-1" id="navbar-subinput" href="#item-2-2">Mejores criptos para el envio de remesas</a>
                            </nav>
                            <a className="nav-link ms-3" id="navbar-input" href="#item-3">Tutoriales</a>
                            <nav className="nav nav-pills flex-column">
                                <a className="nav-link ms-5 my-1" id="navbar-subinput" href="#item-3-1">Item 3-1</a>
                            </nav>
                        </nav>
                    </nav>
                </div>

                <div className="col-8 mt-3">
                    <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" className="scrollspy-example-2" tabindex="0">
                        <div id="item-1">
                            <h2>
                                <strong>
                            ¿Para qué nos pueden servir las criptomonedas?
                                </strong>
                            </h2>
                            <br />
                            <p>Las criptomonedas han emergido como una tecnología financiera disruptiva con una gama diversa de aplicaciones. En primer lugar, sirven como una forma de inversión, permitiendo a las personas comprar y mantener activos digitales con la esperanza de que su valor aumente con el tiempo. Además, las criptomonedas brindan acceso a servicios financieros globales para personas no bancarizadas, democratizando el acceso a la economía global.
                                <br />
                                <br />

                                Otro uso fundamental de las criptomonedas es la facilitación de pagos internacionales rápidos y económicos, eliminando intermediarios costosos y tiempos de espera prolongados. Además, son un medio para el desarrollo de contratos inteligentes, que automatizan acuerdos y transacciones sin necesidad de intermediarios. En el ámbito empresarial, las criptomonedas se utilizan para recaudar fondos a través de ICO (Ofertas Iniciales de Monedas) y como un medio eficiente de llevar a cabo transacciones comerciales a nivel internacional.

                                <br />
                                <br />
                                En resumen, las criptomonedas están cambiando la forma en que entendemos y utilizamos el dinero, abriendo un abanico de oportunidades en las finanzas, la tecnología y la economía global</p>
                        </div>
                        <div id="item-1-1">
                            <h3>
                                <strong>
                                ¿Qué es el trading con criptomonedas?
                                </strong>
                            </h3>
                            <br/>
                            <p>El trading con criptomonedas es una práctica financiera que implica la compra y venta de activos digitales como Bitcoin, Ethereum y otras monedas digitales en diferentes plataformas de intercambio en línea. Los traders buscan beneficiarse de las fluctuaciones en los precios de las criptomonedas, comprando cuando creen que el precio subirá y vendiendo cuando anticipan una caída.
                                <br />
                                <br />
                                El trading de criptomonedas se basa en el análisis técnico y fundamental, donde los traders estudian los gráficos de precios, los indicadores técnicos y los eventos del mercado para tomar decisiones informadas. Es una actividad de alto riesgo debido a la volatilidad inherente en el mercado de las criptomonedas, pero también ofrece oportunidades de ganancias significativas en un corto período de tiempo.
                                <br />
                                <br />
                                Es importante destacar que el trading de criptomonedas requiere educación y experiencia, ya que puede ser complejo y puede llevar a pérdidas financieras considerables si no se realiza con cuidado. Los traders a menudo emplean estrategias como el day trading (operaciones intradía), el swing trading (operaciones a corto y mediano plazo) y el HODLing (mantener a largo plazo) para gestionar sus inversiones y riesgos. Además, la regulación y la seguridad son aspectos cruciales a considerar al involucrarse en el trading de criptomonedas.
                            </p>
                            <img src="/images/cryptos1.jpg" alt="123" id="images">

                            </img>
                        </div>
                        <div id="item-1-2">
                            <br/>
                            <h3> ¿Se puede enviar remesas con criptomonedas?</h3>
                            <br/>
                            <p>El envío de remesas a través de criptomonedas es una realidad cada vez más viable debido a varias ventajas significativas que ofrecen estas monedas digitales. Aquí se explican algunas de las razones por las cuales es posible y beneficioso utilizar criptomonedas para el envío de remesas:
                                <ul>
                                    <br/>
                                    <li>
                                    <strong>Velocidad y Eficiencia: </strong> Las criptomonedas, como Bitcoin y Ethereum, permiten realizar transferencias internacionales de forma casi instantánea. Esto contrasta con los sistemas de remesas tradicionales, que a menudo pueden llevar días o incluso semanas en completarse. La rapidez de las criptomonedas es especialmente valiosa en situaciones de emergencia o cuando se necesita acceso inmediato a fondos.
                                    </li>
                                    <br/>
                                    <li>
                                    <strong>Costos Reducidos: </strong> Las tarifas de transferencia asociadas con las criptomonedas suelen ser considerablemente más bajas en comparación con los intermediarios financieros tradicionales, como los bancos y las casas de cambio de divisas. Esto significa que se pueden enviar cantidades mayores de dinero sin incurrir en altos costos de transacción.
                                    </li>
                                    <br/>
                                    <li>
                                    <strong>Accesibilidad Global: </strong> Las criptomonedas no están sujetas a las restricciones geográficas y a menudo no requieren intermediarios locales. Esto facilita el acceso a servicios financieros transfronterizos para personas en regiones donde la infraestructura bancaria es limitada o costosa.
                                    </li>
                                    <br/>
                                    <li>
                                    <strong>Inclusión Financiera: </strong> Las criptomonedas brindan una oportunidad para la inclusión financiera de las personas no bancarizadas o subatendidas. Cualquier persona con acceso a Internet y un dispositivo compatible puede crear una billetera de criptomonedas y participar en el envío y recepción de remesas.
                                    </li>
                                    <br/>
                                    <li>
                                    <strong>Seguridad: </strong> Las criptomonedas utilizan tecnología blockchain, que es altamente segura y transparente. Las transacciones son inmutables y registradas en un libro mayor público, lo que reduce el riesgo de fraudes y manipulaciones.
                                    </li>
                                    <br/>
                                    <li>
                                    <strong>Diversidad de Opciones: </strong> Existen numerosas criptomonedas disponibles, lo que brinda a los remitentes y destinatarios la flexibilidad para elegir la que mejor se adapte a sus necesidades, ya sea en términos de velocidad, costos o características específicas.
                                    </li>
                                    <br/>
                                    <li>
                                    <strong>Menos Dependencia de Intermediarios: </strong> Las transferencias de criptomonedas se realizan directamente entre las partes involucradas, lo que elimina la necesidad de intermediarios financieros costosos y lentos. Esto reduce la cantidad de manos por las que pasa el dinero, disminuyendo así las posibilidades de pérdidas o demoras
                                    </li>
                                </ul>
                            </p>
                        </div>
                        <div id="item-2">
                            <h4>Envio de remesas con criptomonedas</h4>
                            <p> Enviar remesas con criptomonedas es una elección beneficiosa por varias razones:
                                <br />
                                <br />
                                Rapidez: Las criptomonedas permiten transferencias instantáneas en comparación con los métodos tradicionales más lentos.
                                <br />
                                <br />
                                Menores Costos: Las tarifas son considerablemente más bajas, lo que significa que más dinero llega a su destino.
                                <br />
                                <br />
                                Accesibilidad Global: Cualquier persona con acceso a Internet puede utilizar criptomonedas, eliminando las barreras geográficas.
                                <br />
                                <br />
                                Seguridad: La tecnología blockchain las hace seguras y transparentes, reduciendo el riesgo de fraudes.
                                <br />
                                <br />
                                Inclusión Financiera: Las criptomonedas brindan acceso a servicios financieros a personas no bancarizadas.
                                <br />
                                <br />
                                Menos Intermediarios: Las transferencias se realizan directamente, eliminando intermediarios costosos y lentos.
                                <br />
                                <br />
                                Variedad de Opciones: Existe una variedad de criptomonedas para elegir, adaptándose a diferentes necesidades.
                                <br />
                                <br />
                                A pesar de estas ventajas, ten en cuenta la volatilidad y asegúrate de comprender los riesgos antes de usar criptomonedas para remesas. En resumen, las criptomonedas ofrecen una alternativa eficiente y accesible para enviar dinero a nivel internacional.</p>
                        </div>
                        <div id="item-2-1">
                            <h4>Por donde enviar criptomonedas?</h4>
                            <p>
                            Binance
                            <br/>
                            Coinbase
                            <br/>
                            Kraken
                            <br/>
                            Bitstamp
                            <br/>
                            Bitfinex
                            <br/>
                            Gemini
                            <br/>
                            Bittrex
                            <br/>
                            OKEx
                            <br/>
                            Huobi
                            <br/>
                            BitFlyer
                            <br/>
                            <br/>
                            Estos exchanges permiten a los usuarios comprar, vender y transferir criptomonedas, lo que podría ser útil para enviar remesas internacionales de manera eficiente y económica. Sin embargo, ten en cuenta que los costos y las regulaciones pueden variar según el exchange y la ubicación geográfica, por lo que es importante investigar y entender las tarifas y regulaciones específicas antes de realizar una transferencia. Además, asegúrate de que el destinatario esté familiarizado con el uso de criptomonedas y pueda convertirlas en la moneda local si es necesario.
                            </p>
                        </div>
                        <div id="item-2-2">
                            <h4>Mejores criptos para el envio de remesas</h4>
                            <p>La elección de la criptomoneda más recomendada para el envío de remesas puede depender de varios factores, incluyendo la velocidad de la transacción, las tarifas, la disponibilidad en la región y la facilidad de conversión a moneda local. Aquí hay algunas criptomonedas populares que a menudo se consideran adecuadas para enviar remesas:
                            <br/>
Bitcoin (BTC): Bitcoin es ampliamente aceptado y tiene una gran liquidez en la mayoría de los exchanges. Sin embargo, las tarifas de transacción pueden variar y a veces son altas.
<br/>
Ethereum (ETH): Ethereum es conocido por su rapidez en las transacciones y su amplia adopción. Puede ser una opción eficiente para remesas.
<br/>
Stellar (XLM): Stellar se creó específicamente con la intención de facilitar las transferencias de dinero transfronterizas. Ofrece tarifas bajas y tiempos de confirmación rápidos.
<br/>
Ripple (XRP): Ripple es otra criptomoneda diseñada para transferencias internacionales de dinero, y su red se utiliza en muchas instituciones financieras.
<br/>
Litecoin (LTC): Litecoin ofrece transacciones más rápidas y tarifas más bajas en comparación con Bitcoin, lo que lo hace atractivo para remesas.
<br/>
Bitcoin Cash (BCH): Bitcoin Cash se centra en la escalabilidad y las tarifas bajas, lo que lo convierte en una opción viable para remesas.
<br/>
Tether (USDT): Tether es una criptomoneda estable vinculada al valor del dólar estadounidense. Puede ser útil para evitar la volatilidad de otras criptomonedas durante la transferencia.
<br/>
USD Coin (USDC): Similar a Tether, USD Coin es una criptomoneda estable respaldada por dólares estadounidenses.
<br/>
Dai (DAI): Dai es una criptomoneda estable descentralizada que mantiene su valor mediante la colateralización. Puede ser una opción interesante para la estabilidad.
<br/>
La elección final dependerá de tus preferencias personales, las tarifas y la infraestructura disponible en tu ubicación, así como de las necesidades del destinatario. Además, ten en cuenta que las criptomonedas son volátiles, por lo que los precios pueden fluctuar antes de que el destinatario las convierta a moneda local. Siempre es aconsejable investigar y comparar las opciones disponibles antes de realizar una transferencia de remesas en criptomonedas.</p>
                        </div>
                        <div id="item-3">
                            <h3>Tutoriales</h3>
                            <p>En un mundo cada vez más globalizado, las criptomonedas están desempeñando un papel fundamental en la simplificación y agilización del proceso de envío de remesas internacionales. Este conjunto de tutoriales está diseñado para ayudarte a comprender y utilizar de manera efectiva las criptomonedas como una alternativa segura, rápida y económica para enviar dinero a tus seres queridos en cualquier parte del mundo.</p>
                        </div>
                        <div id="item-3-1">
                            <h5>Item 3-1</h5>
                            <p>   Hola 
                                
                                <a href='https://youtu.be/tXF8SqUs5MA' target="_blank" rel="noopener noreferrer">
                                    <h4>Soy un link a youtube</h4>
    </a>
    </p>

                        </div>
                        <div id="item-3-2">
                            <h5>Item 3-2</h5>
                            <p>...</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Scrollpy