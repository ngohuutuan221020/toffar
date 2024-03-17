import "./Contact.scss";
import {FormattedMessage} from "react-intl";
function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <h1 className="heading">
          <FormattedMessage id="header.lienHe" />
        </h1>
        <div className="row">
          <iframe
            className="box-ct map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.94842815460314!2d106.67440213881102!3d10.797916656565269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752929b98e1d2b%3A0x789f9c2bfb0f51bf!2zMTk0IE5ndXnhu4VuIFRy4buNbmcgVHV54buDbiwgUGjGsOG7nW5nIDgsIFBow7ogTmh14bqtbiwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1709985604031!5m2!1svi!2s"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="box-ct content">
            <h3 style={{fontWeight: "bold"}}>Công ty TNHH Toffar</h3>
            <h3 style={{fontStyle: "italic", fontWeight: "normal"}}>TOFFAR Steel Facilities</h3>
            <p>
              <i>Địa chỉ: </i>194-6 Nguyễn Trọng Tuyển, Phường 8, Phú Nhuận, Thành phố Hồ Chí Minh, Việt Nam
            </p>
            <p>
              <i>Address: </i>No. 194-6 Nguyen Trong Tuyen Street, Ward 8th, Phu Nhuan distric, Ho Chi Minh City, VietNam
            </p>
            <p>
              <i>Điện thoại / Phone No: </i>(028) 3 997 6667 | 0903349668
            </p>
            <p>
              <i>Email: </i>info@toffar.com | ndt@toffar.com
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
