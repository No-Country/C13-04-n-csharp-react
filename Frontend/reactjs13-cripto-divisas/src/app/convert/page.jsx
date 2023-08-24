import CardConvert from "@/components/convert/Cards/CardConvert";
import CardConvertTraditional from "@/components/convert/Cards/CardConvertTraditional";
import CardCripto from "@/components/convert/Cards/CardCripto";
import React from "react";

function ConvertPage() {
  return (
    <div className="d-flex flex-column flex-root app-root bg-light bg-gradient">
      <div className="app-page flex-column flex-column-fluid">
        <div className="app-wrapper flex-column flex-row-fluid">
          {/* <!--begin::Main--> */}
          <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
            {/*<!--begin::Content wrapper-->*/}
            <div className="d-flex flex-column flex-column-fluid">
              {/*<!--begin::Toolbar-->*/}
              <div id="kt_app_toolbar" className="app-toolbar">
                {/*<!--begin::Toolbar container-->*/}
                <div
                  id="kt_app_toolbar_container"
                  className="app-container container-xxl d-flex flex-stack"
                ></div>
              </div>
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
                  <div className="row g-5 g-xl-10">
                    {/*<!--begin::Col-->*/}
                    <div className="col-xxl-8">
                      {/*<!--begin::Row-->*/}
                      <div className="row g-5 g-xl-10 justify-content-center">
                        {/*<!--begin::Col-->*/}
                        <div className="col-md-3">
                          <CardCripto
                            title="Bitcoin"
                            abbr="BTC"
                            image="/shapes/bitcoin.svg"
                            style={{ backgroundColor: "#F6E5CA" }}
                          />
                        </div>
                        {/*<!--begin::Col-->*/}
                        <div className="col-md-3">
                          <CardCripto
                            title="Etherium"
                            abbr="ETH"
                            image="/shapes/ethereum.svg"
                            style={{ backgroundColor: "#F3D6EF" }}
                          />
                        </div>
                        {/*<!--begin::Col-->*/}
                        <div className="col-md-3">
                          <CardCripto
                            title="Dogecoin"
                            abbr="DOGE"
                            image="/shapes/dogecoin.svg"
                            style={{ backgroundColor: "#BFDDE3" }}
                          />
                        </div>
                      </div>
                    </div>
                    {/*<!--begin::Col-->*/}
                    <div className="col-xxl-4">
                      {/*<!--begin::Forms widget 1-->*/}
                      <div className="card h-xl-60">
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
                                  Cripto Convert
                                </span>
                                {/*<!--begin::Bullet-->*/}
                                <span className="bullet-custom position-absolute z-index-2 w-100 h-2px top-100 bottom-n100 bg-primary rounded"></span>
                              </a>
                            </li>
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
                                  Tradicional
                                </span>
                                {/*<!--begin::Bullet-->*/}
                                <span className="bullet-custom position-absolute z-index-2 w-100 h-2px top-100 bottom-n100 bg-primary rounded"></span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/*<!--begin::Body-->*/}
                        <div className="card-body">
                          {/*<!--begin::Tab Content-->*/}
                          <div className="tab-content">
                            {/*<!--begin::Tap pane-->*/}
                            <div
                              className="tab-pane fade active show"
                              id="kt_forms_widget_1_tab_content_1"
                            >
                              {/*<!--begin::Row-->*/}
                              <div className="row g-5 g-xl-10 justify-content-evenly">
                                {/*<!--begin::Col-->*/}
                                <div className="col-md-3">
                                  <CardConvert
                                    abbr="EUR"
                                    style={{ backgroundColor: "#d8f8e1" }}
                                  />
                                </div>
                                {/*<!--begin::Col-->*/}
                                <div className="col-md-3">
                                  <CardConvert
                                    abbr="BTC"
                                    style={{ backgroundColor: "#d8f8e1" }}
                                  />
                                </div>
                              </div>

                              {/*<!--begin::Row-->*/}
                              <div className="row g-5 g-xl-10 justify-content-center mt-2">
                                {/*<!--begin::Col-->*/}
                                <div className="col-md-3">
                                  <CardConvert
                                    abbr="USD"
                                    style={{ backgroundColor: "#d8f8e1" }}
                                  />
                                </div>
                              </div>
                            </div>
                            {/*<!--begin::Tap pane-->*/}
                            <CardConvertTraditional />
                          </div>
                        </div>
                        {/*<!--end: Card Body-->*/}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConvertPage;
