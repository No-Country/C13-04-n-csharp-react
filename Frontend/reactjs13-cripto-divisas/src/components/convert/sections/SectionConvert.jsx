"use client";
import { useState } from "react";
import CardConvert from "../cards/CardConvert";
import CardConvertTraditional from "../cards/CardConvertTraditional";

function SectionConvert() {
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [selectValue2, setSelectValue2] = useState("");
  const [selectValue3, setSelectValue3] = useState("");

  const handleSumbmit = (e) => {
    e.preventDefault();

    setInputValue2("");
    setInputValue3("");
    const result = coinConverter(
      inputValue,
      selectValue,
      selectValue2,
      selectValue3
    );
    setInputValue2(result[selectValue2]);
    setInputValue3(result[selectValue3]);
  };

  const handleSumbmit2 = (e) => {
    e.preventDefault();
    setInputValue("");
    setInputValue3("");
    const result = coinConverter(
      inputValue2,
      selectValue2,
      selectValue,
      selectValue3
    );
    setInputValue(result[selectValue]);
    setInputValue3(result[selectValue3]);
  };

  const handleSumbmit3 = (e) => {
    e.preventDefault();

    setInputValue("");
    setInputValue2("");
    const result = coinConverter(
      inputValue3,
      selectValue3,
      selectValue,
      selectValue2
    );
    setInputValue(result[selectValue]);
    setInputValue2(result[selectValue2]);
  };

  const coinConverter = (amount, basecoin, coin2, coin3) => {
    const rates = {
      USD: 1,
      ARS: 100,
      COP: 4000,
      PEN: 4,
      EUR: 0.85,
      BTC: 0.00002,
    };
    const usdAmount = amount / rates[basecoin];
    const coin2Amount = usdAmount * rates[coin2];
    const coin3Amount = usdAmount * rates[coin3];
    return { [coin2]: coin2Amount, [coin3]: coin3Amount };
  };

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
                  <form onSubmit={handleSumbmit}>
                    <CardConvert
                      abbr="EUR"
                      style={{ backgroundColor: "#d8f8e1" }}
                      inputValue={inputValue}
                      setInputValue={setInputValue}
                      selectValue={selectValue}
                      setSelectValue={setSelectValue}
                    />
                  </form>
                </div>
                <div className="col-md-4">
                  <form onSubmit={handleSumbmit2}>
                    <CardConvert
                      abbr="BTC"
                      style={{ backgroundColor: "#d8f8e1" }}
                      inputValue={inputValue2}
                      setInputValue={setInputValue2}
                      selectValue={selectValue2}
                      setSelectValue={setSelectValue2}
                    />
                  </form>
                </div>
              </div>

              <div className="row g-5 g-xl-10 justify-content-center mt-2">
                <div className="col-md-4">
                  <form onSubmit={handleSumbmit3}>
                    <CardConvert
                      abbr="USD"
                      style={{ backgroundColor: "#d8f8e1" }}
                      inputValue={inputValue3}
                      setInputValue={setInputValue3}
                      selectValue={selectValue3}
                      setSelectValue={setSelectValue3}
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
