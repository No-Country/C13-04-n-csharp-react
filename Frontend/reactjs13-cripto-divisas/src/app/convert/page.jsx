import React from "react";

function ConvertPage() {
  return (
    <div className="d-flex flex-column flex-root app-root">
      <div className="app-page flex-column flex-column-fluid">
        <div className="app-wrapper flex-column flex-row-fluid">
          {/* <!--begin::Main--> */}
          <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
            {/*<!--begin::Content wrapper-->*/}
            <div className="d-flex flex-column flex-column-fluid">
              {/*<!--begin::Toolbar-->*/}
              <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
                {/*<!--begin::Toolbar container-->*/}
                <div
                  id="kt_app_toolbar_container"
                  className="app-container container-xxl d-flex flex-stack"
                >
                  {/*<!--begin::Page title-->*/}
                  <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
                    {/*<!--begin::Title-->*/}
                    <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">
                      Mi Balance: $ 37,045
                    </h1>
                    {/*<!--end::Title-->*/}
                    {/*<!--begin::Breadcrumb-->*/}
                    <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                      {/*<!--begin::Item-->*/}
                      <li className="breadcrumb-item text-muted">
                        <a
                          href="/"
                          className="text-muted text-hover-primary"
                        >
                          Inicio
                        </a>
                      </li>
                      {/*<!--end::Item-->*/}
                      {/*<!--begin::Item-->*/}
                      <li className="breadcrumb-item">
                        <span className="bullet bg-gray-400 w-5px h-2px"></span>
                      </li>
                      {/*<!--end::Item-->*/}
                      {/*<!--begin::Item-->*/}
                      <li className="breadcrumb-item text-muted">Convertidor</li>
                      {/*<!--end::Item-->*/}
                    </ul>
                    {/*<!--end::Breadcrumb-->*/}
                  </div>
                  {/*<!--end::Page title-->*/}
                </div>
                {/*<!--end::Toolbar container-->*/}
              </div>
              {/*<!--end::Toolbar-->*/}
              {/*<!--begin::Content-->*/}
              <div
                id="kt_app_content"
                className="app-content flex-column-fluid"
              >
                {/*<!--begin::Content container-->*/}
                <div
                  id="kt_app_content_container"
                  className="app-container container-xxl"
                >
                  {/*<!--begin::Row-->*/}
                  <div className="row g-5 g-xl-10 mb-5 mb-xl-10">
                    {/*<!--begin::Col-->*/}
                    <div className="col-xxl-8">
                      {/*<!--begin::Row-->*/}
                      <div className="row g-5 g-xl-10">
                        {/*<!--begin::Col-->*/}
                        <div className="col-md-4">
                          {/*<!--begin::Card widget 11-->*/}
                          <div
                            className="card card-flush h-xl-100"
                            style={{ backgroundColor: "#F6E5CA" }}
                          >
                            {/*<!--begin::Header-->*/}
                            <div className="card-header flex-nowrap pt-5">
                              {/*<!--begin::Title-->*/}
                              <h3 className="card-title align-items-start flex-column">
                                <span className="card-label fw-bold fs-4 text-gray-800">
                                  Bitcoin
                                </span>
                                <span className="mt-1 fw-semibold fs-7">
                                  36,668 USD for 1 BTC
                                </span>
                              </h3>
                              {/*<!--end::Title-->*/}
                            </div>
                            {/*<!--end::Header-->*/}
                            {/*<!--begin::Body-->*/}
                            <div className="card-body text-center pt-5">
                              {/*<!--begin::Image-->*/}
                              <img
                                src="/shapes/bitcoin.svg"
                                className="h-125px mb-5"
                                alt=""
                              />
                              {/*<!--end::Image-->*/}
                              {/*<!--begin::Section-->*/}
                              <div className="text-start">
                                <span className="d-block fw-bold fs-1 text-gray-800">
                                  0.44554576 BTC
                                </span>
                                <span className="mt-1 fw-semibold fs-3">
                                  19,335,45 USD
                                </span>
                              </div>
                              {/*<!--end::Section-->*/}
                            </div>
                            {/*<!--end::Body-->*/}
                          </div>
                          {/*<!--end::Card widget 11-->*/}
                        </div>
                        {/*<!--end::Col-->*/}
                        {/*<!--begin::Col-->*/}
                        <div className="col-md-4">
                          {/*<!--begin::Card widget 11-->*/}
                          <div
                            className="card card-flush h-xl-100"
                            style={{ backgroundColor: "#F3D6EF" }}
                          >
                            {/*<!--begin::Header-->*/}
                            <div className="card-header flex-nowrap pt-5">
                              {/*<!--begin::Title-->*/}
                              <h3 className="card-title align-items-start flex-column">
                                <span className="card-label fw-bold fs-4 text-gray-800">
                                  Etherium
                                </span>
                                <span className="mt-1 fw-semibold fs-7">
                                  325,035 USD for 1 ETH
                                </span>
                              </h3>
                              {/*<!--end::Title-->*/}
                            </div>
                            {/*<!--end::Header-->*/}
                            {/*<!--begin::Body-->*/}
                            <div className="card-body text-center pt-5">
                              {/*<!--begin::Image-->*/}
                              <img
                                src="/shapes/ethereum.svg"
                                className="h-125px mb-5"
                                alt=""
                              />
                              {/*<!--end::Image-->*/}
                              {/*<!--begin::Section-->*/}
                              <div className="text-start">
                                <span className="d-block fw-bold fs-1 text-gray-800">
                                  29.33460000 ETH
                                </span>
                                <span className="mt-1 fw-semibold fs-3">
                                  7,336,00 USD
                                </span>
                              </div>
                              {/*<!--end::Section-->*/}
                            </div>
                            {/*<!--end::Body-->*/}
                          </div>
                          {/*<!--end::Card widget 11-->*/}
                        </div>
                        {/*<!--end::Col-->*/}
                        {/*<!--begin::Col-->*/}
                        <div className="col-md-4">
                          {/*<!--begin::Card widget 11-->*/}
                          <div
                            className="card card-flush h-xl-100"
                            style={{ backgroundColor: "#BFDDE3" }}
                          >
                            {/*<!--begin::Header-->*/}
                            <div className="card-header flex-nowrap pt-5">
                              {/*<!--begin::Title-->*/}
                              <h3 className="card-title align-items-start flex-column">
                                <span className="card-label fw-bold fs-4 text-gray-800">
                                  Dogecoin
                                </span>
                                <span className="mt-1 fw-semibold fs-7">
                                  0.12,045 USD for 1 DOGE
                                </span>
                              </h3>
                              {/*<!--end::Title-->*/}
                            </div>
                            {/*<!--end::Header-->*/}
                            {/*<!--begin::Body-->*/}
                            <div className="card-body text-center pt-5">
                              {/*<!--begin::Image-->*/}
                              <img
                                src="/shapes/dogecoin.svg"
                                className="h-125px mb-5"
                                alt=""
                              />
                              {/*<!--end::Image-->*/}
                              {/*<!--begin::Section-->*/}
                              <div className="text-start">
                                <span className="d-block fw-bold fs-1 text-gray-800">
                                  4703.7589 DOGE
                                </span>
                                <span className="mt-1 fw-semibold fs-3">
                                  503,005,56 USD
                                </span>
                              </div>
                              {/*<!--end::Section-->*/}
                            </div>
                            {/*<!--end::Body-->*/}
                          </div>
                          {/*<!--end::Card widget 11-->*/}
                        </div>
                        {/*<!--end::Col-->*/}
                      </div>
                      {/*<!--end::Row-->*/}
                    </div>
                    {/*<!--end::Col-->*/}
                    {/*<!--begin::Col-->*/}
                    <div className="col-xxl-4">
                      {/*<!--begin::Forms widget 1-->*/}
                      <div className="card h-xl-100">
                        {/*<!--begin::Header-->*/}
                        <div className="card-header position-relative min-h-50px p-0 border-bottom-2">
                          {/*<!--begin::Nav-->*/}
                          <ul className="nav nav-pills nav-pills-custom d-flex position-relative w-100">
                            {/*<!--begin::Item-->*/}
                            <li className="nav-item mx-0 p-0 w-50">
                              {/*<!--begin::Link-->*/}
                              <a
                                className="nav-link btn btn-color-muted active border-0 h-100 px-0"
                                data-bs-toggle="pill"
                                id="kt_forms_widget_1_tab_1"
                                href="#kt_forms_widget_1_tab_content_1"
                              >
                                {/*<!--begin::Subtitle-->*/}
                                <span className="nav-text fw-bold fs-4 mb-3">
                                  Comprar
                                </span>
                                {/*<!--end::Subtitle-->*/}
                                {/*<!--begin::Bullet-->*/}
                                <span className="bullet-custom position-absolute z-index-2 w-100 h-2px top-100 bottom-n100 bg-primary rounded"></span>
                                {/*<!--end::Bullet-->*/}
                              </a>
                              {/*<!--end::Link-->*/}
                            </li>
                            {/*<!--end::Item-->*/}
                            {/*<!--begin::Item-->*/}
                            <li className="nav-item mx-0 px-0 w-50">
                              {/*<!--begin::Link-->*/}
                              <a
                                className="nav-link btn btn-color-muted border-0 h-100 px-0"
                                data-bs-toggle="pill"
                                id="kt_forms_widget_1_tab_2"
                                href="#kt_forms_widget_1_tab_content_2"
                              >
                                {/*<!--begin::Subtitle-->*/}
                                <span className="nav-text fw-bold fs-4 mb-3">
                                  Vender
                                </span>
                                {/*<!--end::Subtitle-->*/}
                                {/*<!--begin::Bullet-->*/}
                                <span className="bullet-custom position-absolute z-index-2 w-100 h-2px top-100 bottom-n100 bg-primary rounded"></span>
                                {/*<!--end::Bullet-->*/}
                              </a>
                              {/*<!--end::Link-->*/}
                            </li>
                            {/*<!--end::Item-->*/}
                          </ul>
                          {/*<!--end::Nav-->*/}
                        </div>
                        {/*<!--end::Header-->*/}
                        {/*<!--begin::Body-->*/}
                        <div className="card-body">
                          {/*<!--begin::Tab Content-->*/}
                          <div className="tab-content">
                            {/*<!--begin::Tap pane-->*/}
                            <div
                              className="tab-pane fade active show"
                              id="kt_forms_widget_1_tab_content_1"
                            >
                              {/*<!--begin::Input group-->*/}
                              <div className="form-floating border border-gray-300 rounded mb-7">
                                <select
                                  className="form-select form-select-transparent"
                                  id="kt_forms_widget_1_select_1"
                                >
                                  <option
                                    defaultValue="0"
                                    data-kt-select2-icon="/coins/bitcoin.svg"
                                  >
                                    Bitcoin/BTC
                                  </option>
                                  <option
                                    defaultValue="1"
                                    data-kt-select2-icon="/coins/ethereum.svg"
                                  >
                                    Ethereum/ETH
                                  </option>
                                  <option
                                    defaultValue="2"
                                    data-kt-select2-icon="/coins/filecoin.svg"
                                  >
                                    Filecoin/FLE
                                  </option>
                                  <option
                                    defaultValue="3"
                                    data-kt-select2-icon="/coins/chainlink.svg"
                                  >
                                    Chainlink/CIN
                                  </option>
                                  <option
                                    defaultValue="4"
                                    data-kt-select2-icon="/coins/binance.svg"
                                  >
                                    Binance/BCN
                                  </option>
                                </select>
                                <label htmlFor="floatingInputValue">
                                  Nombre Moneda
                                </label>
                              </div>
                              {/*<!--end::Input group-->*/}
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
                                      defaultValue="$230.00"
                                    />
                                    <label htmlFor="floatingInputValue">
                                      Precio(USD)
                                    </label>
                                  </div>
                                  {/*<!--end::Input group-->*/}
                                </div>
                                {/*<!--end::Col-->*/}
                                {/*<!--begin::Col-->*/}
                                <div className="col-6">
                                  {/*<!--begin::Input group-->*/}
                                  <div className="form-floating">
                                    <input
                                      type="email"
                                      className="form-control text-gray-800 fw-bold"
                                      placeholder="00.0"
                                      id="floatingInputValue"
                                      defaultValue="$0,00000032"
                                    />
                                    <label htmlFor="floatingInputValue">
                                      Precio(BTC)
                                    </label>
                                  </div>
                                  {/*<!--end::Input group-->*/}
                                </div>
                                {/*<!--end::Col-->*/}
                              </div>
                              {/*<!--end::Row-->*/}
                              {/*<!--begin::Action-->*/}
                              <div className="d-flex align-items-end">
                                <a
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#kt_modal_top_up_wallet"
                                  className="btn btn-primary fs-3 w-100"
                                >
                                  Efectuar Pago
                                </a>
                              </div>
                              {/*<!--end::Action-->*/}
                            </div>
                            {/*<!--end::Tap pane-->*/}
                            {/*<!--begin::Tap pane-->*/}
                            <div
                              className="tab-pane fade"
                              id="kt_forms_widget_1_tab_content_2"
                            >
                              {/*<!--begin::Input group-->*/}
                              <div className="form-floating border rounded mb-7">
                                <select
                                  className="form-select form-select-transparent"
                                  id="kt_forms_widget_1_select_2"
                                >
                                  <option
                                    defaultValue="0"
                                    data-kt-select2-icon="/coins/bitcoin.svg"
                                  >
                                    Bitcoin/BTC
                                  </option>
                                  <option
                                    defaultValue="1"
                                    data-kt-select2-icon="/coins/ethereum.svg"
                                  >
                                    Ethereum/ETH
                                  </option>
                                  <option
                                    defaultValue="2"
                                    data-kt-select2-icon="/coins/filecoin.svg"
                                  >
                                    Filecoin/FLE
                                  </option>
                                  <option
                                    defaultValue="3"
                                    data-kt-select2-icon="/coins/chainlink.svg"
                                  >
                                    Chainlink/CIN
                                  </option>
                                  <option
                                    defaultValue="4"
                                    data-kt-select2-icon="/coins/binance.svg"
                                  >
                                    Binance/BCN
                                  </option>
                                </select>
                                <label htmlFor="floatingInputValue">
                                  Nombre Moneda
                                </label>
                              </div>
                              {/*<!--end::Input group-->*/}
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
                                    <label htmlFor="floatingInputValue">
                                      Precio(BTC)
                                    </label>
                                  </div>
                                  {/*<!--end::Input group-->*/}
                                </div>
                                {/*<!--end::Col-->*/}
                                {/*<!--begin::Col-->*/}
                                <div className="col-6">
                                  {/*<!--begin::Input group-->*/}
                                  <div className="form-floating">
                                    <input
                                      type="email"
                                      className="form-control text-gray-800 fw-bold"
                                      placeholder="00.0"
                                      id="floatingInputValue"
                                      defaultValue="$1230.00"
                                    />
                                    <label htmlFor="floatingInputValue">
                                      Precio(USD)
                                    </label>
                                  </div>
                                  {/*<!--end::Input group-->*/}
                                </div>
                                {/*<!--end::Col-->*/}
                              </div>
                              {/*<!--end::Row-->*/}
                              {/*<!--begin::Action-->*/}
                              <div className="d-flex align-items-end">
                                <a
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#kt_modal_top_up_wallet"
                                  className="btn btn-primary fs-3 w-100"
                                >
                                  Hacer Oferta
                                </a>
                              </div>
                              {/*<!--end::Action-->*/}
                            </div>
                            {/*<!--end::Tap pane-->*/}
                          </div>
                          {/*<!--end::Tab Content-->*/}
                        </div>
                        {/*<!--end: Card Body-->*/}
                      </div>
                      {/*<!--end::Forms widget 1-->*/}
                    </div>
                    {/*<!--end::Col-->*/}
                  </div>
                  {/*<!--end::Row-->*/}
                </div>
                {/*<!--end::Content container-->*/}
              </div>
              {/*<!--end::Content-->*/}
            </div>
            {/*<!--end::Content wrapper-->*/}
          </div>
          {/*<!--end:::Main-->*/}
        </div>
      </div>
    </div>
  );
}

export default ConvertPage;
