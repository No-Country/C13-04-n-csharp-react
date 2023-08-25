function CardConvertTraditional() {
  return (
    <div className="tab-pane fade" id="kt_forms_widget_1_tab_content_2">
      {/*<!--begin::Input group-->*/}
      <div className="form-floating border rounded mb-7">
        <select
          className="form-select "
          id="kt_forms_widget_1_select_2"
        >
          <option defaultValue="0" >
            Bitcoin/BTC
          </option>
          <option defaultValue="1" >
            Ethereum/ETH
          </option>
          <option defaultValue="2" >
            Filecoin/FLE
          </option>
          <option defaultValue="3" >
            Chainlink/CIN
          </option>
          <option defaultValue="4" >
            Binance/BCN
          </option>
        </select>
        <label htmlFor="floatingInputValue">Nombre Moneda</label>
      </div>
      {/*<!--begin::Row-->*/}
      <div className="row mb-7">
        {/*<!--begin::Col-->*/}
        <div className="col-6">
          {/*<!--begin::Input group-->*/}
          <div className="form-floating">
            <input
              type="email"
              className="form-control text-gray-800 fw-bold"
              placeholder="00.0"
              id="floatingInputValue"
              defaultValue="$0,0000005"
            />
            <label htmlFor="floatingInputValue">Precio(BTC)</label>
          </div>
        </div>
        {/*<!--begin::Col-->*/}
        <div className="col-6">
          {/*<!--begin::Input group-->*/}
          <div className="form-floating">
            <input
              type="email"
              className="form-control text-gray-800 fw-bold"
              placeholder="00.0"
              id="floatingInputValue2"
              defaultValue="$1230.00"
            />
            <label htmlFor="floatingInputValue">Precio(USD)</label>
          </div>
        </div>
      </div>
      {/*<!--begin::Action-->*/}
      <div className="d-flex align-items-end">
        <a
          href="#"
          data-bs-toggle="modal"
          data-bs-target="#kt_modal_top_up_wallet"
          className="btn btn-primary fs-3 w-100"
        >
          Convertir
        </a>
      </div>
    </div>
  );
}

export default CardConvertTraditional;
