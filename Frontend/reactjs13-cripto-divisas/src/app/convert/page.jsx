import Heading3 from "@/components/Heading3/heading3";
import SectionInfo from "@/components/convert/0-sections/SectionInfo";
import SectionConvert from "@/components/convert/0-sections/sectionConvert";

function ConvertPage() {
  return (
    <div className="d-flex flex-column flex-root app-root bg-light bg-gradient">
      <div className="app-page flex-column flex-column-fluid">
        <div className="app-wrapper flex-column flex-row-fluid">
          {/* <!--begin::Main--> */}
          <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
            {/*<!--begin::Content wrapper-->*/}
            <div className="d-flex flex-column flex-column-fluid">
              <div id="kt_app_content" className="app-content flex-column-fluid" >
                <div id="kt_app_content_container" className="app-container container-xxl" >
                  {/*<!--begin::Row-->*/}
                  <div className="row g-5 g-xl-10">
                    {/* seccion de información en las cards */}
                    <SectionInfo />
                    {/* seccion del convertidor */}
                    <SectionConvert />
                    {/* seccion heading */}
                    <Heading3 />
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
