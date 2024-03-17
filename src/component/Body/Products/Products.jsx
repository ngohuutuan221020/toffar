import "./Products.scss";
import {FormattedMessage} from "react-intl";
import img1 from "../../../assets/products/cau-truc.png";
import img2 from "../../../assets/products/may-ban-bi.png";
import img3 from "../../../assets/products/may-cat-co-nho.png";
import img4 from "../../../assets/products/may-cat-fm.png";
import img5 from "../../../assets/products/may-chan-thep.png";
import img6 from "../../../assets/products/may-chat-thep.png";
import img7 from "../../../assets/products/may-dot-cnc.png";
import img8 from "../../../assets/products/may-han-co2.png";
import img9 from "../../../assets/products/may-han-keo-tu-dong.png";
import img10 from "../../../assets/products/may-han-ngang.png";
import img11 from "../../../assets/products/may-nan-ban-ma.png";
import img12 from "../../../assets/products/may-nan-dam.png";
function Products() {
  let arrProducts = [
    {
      name: <FormattedMessage id="product.mayHanKeo" />,
      img: img9,
    },
    {
      name: <FormattedMessage id="product.mayCatCNC" />,
      img: img4,
    },
    {
      name: <FormattedMessage id="product.mayNanBanMa" />,
      img: img11,
    },
    {
      name: <FormattedMessage id="product.mayNanDam" />,
      img: img12,
    },
    {
      name: <FormattedMessage id="product.mayHanNgang" />,
      img: img10,
    },
    {
      name: <FormattedMessage id="product.mayDotCNC" />,
      img: img7,
    },
    {
      name: <FormattedMessage id="product.mayBanBi" />,
      img: img2,
    },
    {
      name: <FormattedMessage id="product.mayChatThep" />,
      img: img6,
    },
    {
      name: <FormattedMessage id="product.mayChanThep" />,
      img: img5,
    },
    {
      name: <FormattedMessage id="product.cauTruc" />,
      img: img1,
    },
    {
      name: <FormattedMessage id="product.mayHanC02" />,
      img: img8,
    },
    {
      name: <FormattedMessage id="product.mayCatCoNho" />,
      img: img3,
    },
  ];
  return (
    <>
      <section className="products" id="products">
        <h1 className="heading">
          <FormattedMessage id="trangThietBiSanXuat" />
        </h1>
        <div className="box-container">
          {arrProducts &&
            arrProducts.length > 0 &&
            arrProducts.map((item, index) => {
              return (
                <>
                  <div className="box">
                    <img src={item.img} alt="" />
                    <h3>{item.name}</h3>
                  </div>
                </>
              );
            })}
        </div>
      </section>
    </>
  );
}

export default Products;
