import Cryptocurrencies from "./cryptocurrencies";

function Page() {
    return (
        <div className="fondo-con-opacidad" style={{
            backgroundImage: 'url("/images/graphics/bitcoin.png")', 
            backgroundSize: 'cover',
        }}>
            <div className="container">
                <h1 className="text-center mt-3 fw-bold text-xl">CRIPTOMONEDAS</h1>
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
