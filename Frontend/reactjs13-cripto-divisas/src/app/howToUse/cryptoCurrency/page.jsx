import Cryptocurrencies from "./cryptocurrencies";

function Page() {
    return (
        <div className=" p-1" style={{
            backgroundImage: 'url("/images/graphics/bitcoin.png")',
            backgroundSize: 'cover',
        }}>
            <div className="container">
                <h1 className="text-center mt-3 fw-bold text-xl neon-text"
                    style={{ color: "#FF7C03" }}>CRIPTOMONEDAS</h1>
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
