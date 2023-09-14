import Trading from "./trading";

function Page() {
    return (
        <div className="p-1" style={{
            backgroundImage: 'url("/images/graphics/trading.png")',
            backgroundSize: 'cover',
        }}>
            <div className="container">
                <h1 className="text-center m-3 fw-bold text-xl neon-text"
                    style={{ color: "#FF7C03"}}>TRADING</h1>
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