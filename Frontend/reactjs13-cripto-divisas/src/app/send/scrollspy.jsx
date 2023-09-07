import "../send/scrollspy.css"

function Scrollpy() {

    return (
        <>
            <div className="row">
                <div className="col-4 mt-1">
                    <nav id="navbar-example3" className="h-100 flex-column align-items-stretch pe-4 border-end">
                        <nav className="nav nav-pills flex-column">
                            <a className="nav-link ms-3" id="navbar-input" href="#item-1">Para que nos pueden servir las criptomonedas?</a>
                            <nav className="nav nav-pills flex-column">
                                <a className="nav-link ms-5 my-1" id="navbar-subinput" href="#item-1-1">Que es el trading con criptomonedas?</a>
                                <a className="nav-link ms-5 my-1" id="navbar-subinput" href="#item-1-2">Se puede enviar remesas con criptomonedas?</a>
                            </nav>
                            <a className="nav-link ms-3" id="navbar-input" href="#item-2">Envio de remesas con Criptomonedas</a>
                            <nav className="nav nav-pills flex-column">
                                <a className="nav-link ms-5 my-1" id="navbar-subinput" href="#item-2-1">Item 2-1</a>
                                <a className="nav-link ms-5 my-1" id="navbar-subinput" href="#item-2-2">Item 2-2</a>
                            </nav>
                            <a className="nav-link ms-3" id="navbar-input" href="#item-3">Item 3</a>
                            <nav className="nav nav-pills flex-column">
                                <a className="nav-link ms-5 my-1" id="navbar-subinput" href="#item-3-1">Item 3-1</a>
                                <a className="nav-link ms-5 my-1" id="navbar-subinput" href="#item-3-2">Item 3-2</a>
                            </nav>
                        </nav>
                    </nav>
                </div>

                <div className="col-8 mt-3">
                    <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" className="scrollspy-example-2" tabindex="0">
                        <div id="item-1">
                            <h2>Para que nos pueden servir las criptomonedas?</h2>
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
                            <h3>Que es el trading con criptomonedas?</h3>
                            <p>El trading con criptomonedas es una práctica financiera que implica la compra y venta de activos digitales como Bitcoin, Ethereum y otras monedas digitales en diferentes plataformas de intercambio en línea. Los traders buscan beneficiarse de las fluctuaciones en los precios de las criptomonedas, comprando cuando creen que el precio subirá y vendiendo cuando anticipan una caída.
                                <br />
                                <br />
                                El trading de criptomonedas se basa en el análisis técnico y fundamental, donde los traders estudian los gráficos de precios, los indicadores técnicos y los eventos del mercado para tomar decisiones informadas. Es una actividad de alto riesgo debido a la volatilidad inherente en el mercado de las criptomonedas, pero también ofrece oportunidades de ganancias significativas en un corto período de tiempo.
                                <br />
                                <br />
                                Es importante destacar que el trading de criptomonedas requiere educación y experiencia, ya que puede ser complejo y puede llevar a pérdidas financieras considerables si no se realiza con cuidado. Los traders a menudo emplean estrategias como el day trading (operaciones intradía), el swing trading (operaciones a corto y mediano plazo) y el HODLing (mantener a largo plazo) para gestionar sus inversiones y riesgos. Además, la regulación y la seguridad son aspectos cruciales a considerar al involucrarse en el trading de criptomonedas.
                            </p>
                        </div>
                        <div id="item-1-2">
                            <h3>Se puede enviar remesas con criptomonedas?</h3>
                            <p>El envío de remesas a través de criptomonedas es una realidad cada vez más viable debido a varias ventajas significativas que ofrecen estas monedas digitales. Aquí se explican algunas de las razones por las cuales es posible y beneficioso utilizar criptomonedas para el envío de remesas:
                                <br />
                                <br />
                                Velocidad y Eficiencia: Las criptomonedas, como Bitcoin y Ethereum, permiten realizar transferencias internacionales de forma casi instantánea. Esto contrasta con los sistemas de remesas tradicionales, que a menudo pueden llevar días o incluso semanas en completarse. La rapidez de las criptomonedas es especialmente valiosa en situaciones de emergencia o cuando se necesita acceso inmediato a fondos.
                                <br />
                                <br />
                                Costos Reducidos: Las tarifas de transferencia asociadas con las criptomonedas suelen ser considerablemente más bajas en comparación con los intermediarios financieros tradicionales, como los bancos y las casas de cambio de divisas. Esto significa que se pueden enviar cantidades mayores de dinero sin incurrir en altos costos de transacción.
                                <br />
                                <br />
                                Accesibilidad Global: Las criptomonedas no están sujetas a las restricciones geográficas y a menudo no requieren intermediarios locales. Esto facilita el acceso a servicios financieros transfronterizos para personas en regiones donde la infraestructura bancaria es limitada o costosa.
                                <br />
                                <br />
                                Inclusión Financiera: Las criptomonedas brindan una oportunidad para la inclusión financiera de las personas no bancarizadas o subatendidas. Cualquier persona con acceso a Internet y un dispositivo compatible puede crear una billetera de criptomonedas y participar en el envío y recepción de remesas.
                                <br />
                                <br />
                                Seguridad: Las criptomonedas utilizan tecnología blockchain, que es altamente segura y transparente. Las transacciones son inmutables y registradas en un libro mayor público, lo que reduce el riesgo de fraudes y manipulaciones.
                                <br />
                                <br />
                                Diversidad de Opciones: Existen numerosas criptomonedas disponibles, lo que brinda a los remitentes y destinatarios la flexibilidad para elegir la que mejor se adapte a sus necesidades, ya sea en términos de velocidad, costos o características específicas.
                                <br />
                                <br />
                                Menos Dependencia de Intermediarios: Las transferencias de criptomonedas se realizan directamente entre las partes involucradas, lo que elimina la necesidad de intermediarios financieros costosos y lentos. Esto reduce la cantidad de manos por las que pasa el dinero, disminuyendo así las posibilidades de pérdidas o demoras</p>
                        </div>
                        <div id="item-2">
                            <h4>Envio de remesas con criptomonedas</h4>
                            <p> Enviar remesas con criptomonedas es una elección beneficiosa por varias razones:
                                <br/>
                                <br/>
                                Rapidez: Las criptomonedas permiten transferencias instantáneas en comparación con los métodos tradicionales más lentos.
                                <br/>
                                <br/>
                                Menores Costos: Las tarifas son considerablemente más bajas, lo que significa que más dinero llega a su destino.
                                <br/>
                                <br/>
                                Accesibilidad Global: Cualquier persona con acceso a Internet puede utilizar criptomonedas, eliminando las barreras geográficas.
                                <br/>
                                <br/>
                                Seguridad: La tecnología blockchain las hace seguras y transparentes, reduciendo el riesgo de fraudes.
                                <br/>
                                <br/>
                                Inclusión Financiera: Las criptomonedas brindan acceso a servicios financieros a personas no bancarizadas.
                                <br/>
                                <br/>
                                Menos Intermediarios: Las transferencias se realizan directamente, eliminando intermediarios costosos y lentos.
                                <br/>
                                <br/>
                                Variedad de Opciones: Existe una variedad de criptomonedas para elegir, adaptándose a diferentes necesidades.
                                <br/>
                                <br/>
                                A pesar de estas ventajas, ten en cuenta la volatilidad y asegúrate de comprender los riesgos antes de usar criptomonedas para remesas. En resumen, las criptomonedas ofrecen una alternativa eficiente y accesible para enviar dinero a nivel internacional.</p>
                        </div>
                        <div id="item-2-1">
                            <h5>Item 2-1</h5>
                            <p>...</p>
                        </div>
                        <div id="item-2-2">
                            <h5>Item 2-2</h5>
                            <p>...</p>
                        </div>
                        <div id="item-3">
                            <h4>Item 3</h4>
                            <p>...</p>
                        </div>
                        <div id="item-3-1">
                            <h5>Item 3-1</h5>
                            <p>...</p>
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