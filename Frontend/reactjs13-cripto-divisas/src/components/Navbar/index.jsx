"use client";
import Link from "next/link";
import { useEffect } from "react";

function Navbar() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.min");
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg "
      style={{ backgroundColor: "#524F4F" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          <img
            src="/images/Picsart_23-08-23_15-01-14-205.png"
            alt="Logo"
            width="70rem"
            className="d-inline-block align-text-top"
          />
        </Link>

        <button
          className="navbar-toggler align-self-center"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"
            style={{ paddingLeft: '10rem', fontSize: '20px' }}>
            <li className="nav-item mx-5">
              <Link
                className="nav-link active"
                aria-current="page"
                href="/"
                style={{ color: "#FF7C03" }}
              >
                Convertidor
              </Link>
            </li>
            <li className="nav-item mx-5">
              <Link
                className="nav-link"
                href="/news"
                style={{ color: "#FF7C03" }}
              >
                Noticias
              </Link>
            </li>
            <li className="nav-item dropdown mx-5">
              <Link
                className="nav-link dropdown-toggle"
                href=""
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "#FF7C03" }}
              >
                Como usar
              </Link>
              <ul className="dropdown-menu"
                style={{ background: "#CAC7C7", fontSize: '18px' }}>
                <li>
                  <Link
                    className="dropdown-item"
                    href="/howToUse/cryptoCurrency"
                    style={{ color: "#FF7C03" }}
                  >
                    Criptomonedas
                  </Link>
                </li>
                <hr className="dropdown-divider m-0" />
                <li>
                  <Link
                    className="dropdown-item"
                    href="/howToUse/currency"
                    style={{ color: "#FF7C03" }}
                  >
                    Divisas
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider m-0" />
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href="/howToUse/trading"
                    style={{ color: "#FF7C03" }}
                  >
                    Trading
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item mx-5">
              <Link
                className="nav-link active"
                aria-current="page"
                href="/convert"
                style={{ color: "#FF7C03" }}
              >
                Enviar
              </Link>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
