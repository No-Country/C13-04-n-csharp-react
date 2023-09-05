"use client";
import { useEffect, useState } from "react";
import CardConvert from "../cards/CardConvert";
import CardConvertTraditional from "../cards/CardConvertTraditional";
import {
  getDivisas,
  getCriptos,
  getDataDesdeMoneda,
  getDataDesdeCripto,
} from "@/utils/fetch";

function SectionConvert() {
  const [state, setState] = useState({
    value1: "",
    value2: "",
    value3: "",
    selectedCurrency1: "EUR",
    selectedCurrency2: "BTC",
    selectedCurrency3: "USD",
  });

  const handleSubmit = async (event, idCase) => {
    event.preventDefault();
    let result;
    switch (idCase) {
      case 1:
        result = await getDataDesdeMoneda(
          state.value1,
          state.selectedCurrency1,
          state.selectedCurrency2,
          state.selectedCurrency3
        );
        setState({
          ...state,
          value2: result[state.selectedCurrency2],
          value3: result[state.selectedCurrency3],
        });
        break;

      case 2:
        result = await getDataDesdeCripto(
          state.value2,
          state.selectedCurrency2,
          state.selectedCurrency1,
          state.selectedCurrency3
        );
        setState({
          ...state,
          value1: result[state.selectedCurrency1],
          value3: result[state.selectedCurrency3],
        });
        break;

      case 3:
        result = await getDataDesdeMoneda(
          state.value3,
          state.selectedCurrency3,
          state.selectedCurrency2,
          state.selectedCurrency1
        );
        setState({
          ...state,
          value1: result[state.selectedCurrency1],
          value2: result[state.selectedCurrency2],
        });
        break;

      default:
        break;
    }
  };

  const [divisas, setDivisas] = useState([]);
  const [criptos, setCriptos] = useState([]);

  useEffect(() => {
    getCriptos()
      .then((criptomonedas) => {
        setCriptos(criptomonedas);
      })
      .catch((err) => console.error(err));

    getDivisas()
      .then((monedas) => {
        setDivisas(monedas);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="col-12 col-md-10 offset-md-1">
      <div
        className="card h-xl-60"
        style={{
          backgroundColor: "#fdf9c4",
          backgroundImage: "url(shapes/gradient.webp)",
        }}
      >
        {/*<!--begin::Header-->*/}
        <div className="card-header position-relative min-h-50px p-0 border-bottom-2">
          <ul className="nav nav-pills nav-pills-custom d-flex position-relative w-100">
            <li className="nav-item mx-0 p-0 w-50">
              <a
                className="nav-link btn btn-color-muted active border-0 h-100 px-0"
                data-bs-toggle="pill"
                id="kt_forms_widget_1_tab_1"
                href="#kt_forms_widget_1_tab_content_1"
              >
                <span className="nav-text fw-bold fs-4 mb-3">
                  Cripto Convert
                </span>
              </a>
            </li>
            <li className="nav-item mx-0 px-0 w-50">
              <a
                className="nav-link btn btn-color-muted border-0 h-100 px-0"
                data-bs-toggle="pill"
                id="kt_forms_widget_1_tab_2"
                href="#kt_forms_widget_1_tab_content_2"
              >
                <span className="nav-text fw-bold fs-4 mb-3">Tradicional</span>
              </a>
            </li>
          </ul>
        </div>
        {/*<!--begin::Body-->*/}
        <div className="card-body">
          <div className="tab-content">
            {/* cards diseñadas para la funcionalidad de la app */}
            <div
              className="tab-pane fade active show"
              id="kt_forms_widget_1_tab_content_1"
            >
              <div className="row g-5 g-xl-10 justify-content-evenly">
                <div className="col-md-4">
                  <form onSubmit={(event) => handleSubmit(event, 1)}>
                    <CardConvert
                      inputValue={{
                        value: state.value1,
                        onChange: (event) =>
                          setState({ ...state, value1: event.target.value }),
                      }}
                      selectValue={{
                        value: state.selectedCurrency1,
                        onChange: (event) =>
                          setState({
                            ...state,
                            selectedCurrency1: event.target.value,
                          }),
                      }}
                      options={divisas}
                      label="Currency"
                    />
                  </form>
                </div>
                <div className="col-md-4">
                  <form onSubmit={(event) => handleSubmit(event, 2)}>
                    <CardConvert
                      inputValue={{
                        value: state.value2,
                        onChange: (event) =>
                          setState({ ...state, value2: event.target.value }),
                      }}
                      selectValue={{
                        value: state.selectedCurrency2,
                        onChange: (event) =>
                          setState({
                            ...state,
                            selectedCurrency2: event.target.value,
                          }),
                      }}
                      options={criptos}
                      label="Crypto"
                    />
                  </form>
                </div>
              </div>

              <div className="row g-5 g-xl-10 justify-content-center mt-2">
                <div className="col-md-4">
                  <form onSubmit={(event) => handleSubmit(event, 3)}>
                    <CardConvert
                      inputValue={{
                        value: state.value3,
                        onChange: (event) =>
                          setState({ ...state, value3: event.target.value }),
                      }}
                      selectValue={{
                        value: state.selectedCurrency3,
                        onChange: (event) =>
                          setState({
                            ...state,
                            selectedCurrency3: event.target.value,
                          }),
                      }}
                      options={divisas}
                      label="Currency"
                    />
                  </form>
                </div>
              </div>
            </div>
            {/*card convertidor tradicional*/}
            <CardConvertTraditional />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionConvert;
