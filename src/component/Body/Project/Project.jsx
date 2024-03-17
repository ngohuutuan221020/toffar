import "./Project.scss";
import {FormattedMessage} from "react-intl";

import arrayProject from "../Data/data";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// If you want you can use SCSS instead of css
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

function Project() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <>
      <section className="project" id="project">
        <h1 className="heading">
          <FormattedMessage id="duAnTieuBieu" />
        </h1>

        <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]} elementClassNames="box-container">
          {arrayProject &&
            arrayProject.length > 0 &&
            arrayProject.map((item, index) => {
              return (
                <>
                  <a href={item.img} className="box" key={item.id}>
                    <div className="image">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="content">
                      <h3>{item.tenDuAn}</h3>
                      <p>
                        <span>
                          <FormattedMessage id="diaDiem" />:{" "}
                        </span>
                        {item.diaChi}
                      </p>
                      <p>
                        <span>
                          <FormattedMessage id="chuDauTu" />:{" "}
                        </span>
                        {item.chuDauTu}
                      </p>
                      <p>
                        <span>
                          <FormattedMessage id="quyMo" />:{" "}
                        </span>
                        {item.quyMo}
                      </p>
                    </div>
                  </a>
                </>
              );
            })}
        </LightGallery>
      </section>
    </>
  );
}

export default Project;
