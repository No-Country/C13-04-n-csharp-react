"use client";
import { useEffect, useState } from "react";
import SelectCardConvert from "../dropdowns/SelectCardConvert";
import {
  getNamesCurrencies,
  getNamesCryptos,
  getDataFromCryptoConvertTraditional,
} from "@/utils/fetch";

function CardConvertTraditional() {
  const [currencies, setCurrencies] = useState([]);
  const [cryptos, setCryptos] = useState([]);
  const [state, setState] = useState({
    value1: "0.00",
    value2: "0.00",
    selectedCurrency1: "BTC",
    selectedCurrency2: "USD",
  });

  const handleOnClick = async () => {
    let result;
    try {
      result = await getDataFromCryptoConvertTraditional(
        state.value1,
        state.selectedCurrency1,
        state.selectedCurrency2
      );
    } catch (error) {
      alert("error: " + error.message);
    }
    setState({
      ...state,
      value2: result[state.selectedCurrency2],
    });
  };

  useEffect(() => {
    getNamesCryptos()
      .then((namesCoins) => {
        setCryptos(namesCoins);
      })
      .catch((err) => console.error(err.message));

    getNamesCurrencies()
      .then((namesCurrencies) => {
        setCurrencies(namesCurrencies);
      })
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <div className="tab-pane fade" id="kt_forms_widget_1_tab_content_2">
      {/*<!--begin::Input group-->*/}
      <div className="row">
        <div className="col-6">
          <div className="form-floating border rounded mb-3">
            <SelectCardConvert
              value={state.selectedCurrency1}
              onChange={(event) =>
                setState({
                  ...state,
                  selectedCurrency1: event.target.value,
                })
              }
              options={cryptos}
            />
            <label htmlFor="floatingInputValue">Nombre CriptoMoneda</label>
          </div>
        </div>

        <div className="col-6">
          <div className="form-floating border rounded mb-3">
            <SelectCardConvert
              value={state.selectedCurrency2}
              onChange={(event) =>
                setState({
                  ...state,
                  selectedCurrency2: event.target.value,
                })
              }
              options={currencies}
            />
            <label htmlFor="floatingInputValue">Nombre Moneda</label>
          </div>
        </div>
      </div>

      {/*<!--begin::Row-->*/}
      <div className="row mb-3">
        {/*<!--begin::Col-->*/}
        <div className="col-6">
          {/*<!--begin::Input group-->*/}
          <div className="form-floating">
            <input
              type="email"
              className="form-control fw-bold"
              id="floatingInputValue"
              value={state.value1}
            />
            <label htmlFor="floatingInputValue">
              Precio({state.selectedCurrency1})
            </label>
          </div>
        </div>
        {/*<!--begin::Col-->*/}
        <div className="col-6">
          {/*<!--begin::Input group-->*/}
          <div className="form-floating">
            <input
              type="email"
              className="form-control text-gray-800 fw-bold"
              id="floatingInputValue2"
              value={state.value2}
            />
            <label htmlFor="floatingInputValue">
              Precio({state.selectedCurrency2})
            </label>
          </div>
        </div>
      </div>
      {/*<!--begin::Action-->*/}
      <div className="d-flex align-items-end">
        <button className="btn btn-primary fs-3 w-100" onClick={handleOnClick}>Convertir</button>
      </div>
    </div>
  );
}

export default CardConvertTraditional;
