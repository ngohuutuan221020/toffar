import "./Products.scss";
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
      name: "Máy hàn kèo tự động",
      img: img9,
    },
    {
      name: "Máy cắt CNC Plasma",
      img: img4,
    },
    {
      name: "Máy nắn bản mã",
      img: img11,
    },
    {
      name: "Máy nắn dầm",
      img: img12,
    },
    {
      name: "Máy hàn ngang",
      img: img10,
    },
    {
      name: "Máy đột CNC",
      img: img7,
    },
    {
      name: "Máy bắn bi",
      img: img2,
    },
    {
      name: "Máy chặt thép",
      img: img6,
    },
    {
      name: "Máy chấn thép",
      img: img5,
    },
    {
      name: "Cầu trục 5 tấn",
      img: img1,
    },
    {
      name: "Máy hàn C02",
      img: img8,
    },
    {
      name: "Máy cắt cỡ nhỏ",
      img: img3,
    },
  ];
  return (
    <>
      <section className="products" id="products">
        <h1 className="heading">Trang thiết bị sản xuất</h1>
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
