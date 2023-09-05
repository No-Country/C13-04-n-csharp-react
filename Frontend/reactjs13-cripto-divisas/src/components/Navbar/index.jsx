"use client";
import Link from "next/link";
import { useEffect } from "react";
import { FaUser, FaSearch } from "react-icons/fa";

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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-5">
              <Link
                className="nav-link active"
                aria-current="page"
                href="/"
                style={{ color: "#FF7C03", fontSize: "18px" }}
              >
                Convertidor
              </Link>
            </li>
            <li className="nav-item mx-5">
              <Link
                className="nav-link"
                href="/news"
                style={{ color: "#FF7C03", fontSize: "18px" }}
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
                style={{ color: "#FF7C03", fontSize: "18px" }}
              >
                Como usar
              </Link>
              <ul className="dropdown-menu" style={{ background: "#CAC7C7" }}>
                <li>
                  <Link
                    className="dropdown-item"
                    href="/howToUse/cryptoCurrency"
                    style={{ color: "#FF7C03", fontSize: "18px" }}
                  >
                    Criptomonedas
                  </Link>
                </li>
                <hr className="dropdown-divider m-0" />
                <li>
                  <Link
                    className="dropdown-item"
                    href="/howToUse/currency"
                    style={{ color: "#FF7C03", fontSize: "18px" }}
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
                    style={{ color: "#FF7C03", fontSize: "18px" }}
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
                style={{ color: "#FF7C03", fontSize: "18px" }}
              >
                Enviar
              </Link>
            </li>
          </ul>
          <form className="d-flex ms-auto" role="search">
            <input
              className="form-control me-1 border border-light"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
              style={{ fontSize: "16px", backgroundColor: "#CAC7C7" }}
            />
            <button
              className="btn btn-outline-secondary custom-button "
              type="submit"
            >
              <FaSearch style={{ verticalAlign: "middle" }} />
            </button>
          </form>

          <style jsx>{`
            .custom-button {
              height: 2.7rem;
              font-size: 18px;
              background: #a7a7a7;
              color: #ff7c03;
              display: flex;
              align-items: center;
            }
          `}</style>

          <div className="d-flex ms-auto align-items-center">
            <button
              className="btn btn-outline-whatever"
              type="button"
              style={{ fontSize: "1.5rem" }}
            >
              <FaUser style={{ fontSize: "24px", color: "#FF7C03" }} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
