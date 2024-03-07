/* eslint-disable no-unused-vars */
import "./Project.scss";
import img1 from "../../../assets/project/nha-may-che-bien-da-thach-anh-2.png";
import img2 from "../../../assets/project/nha-may-san-xuat-bao-bi-4.png";
import img3 from "../../../assets/project/congtrinhnhaxuong.png";
import img4 from "../../../assets/project/nha-xuong-thep-tien-che.jpg";
import img5 from "../../../assets/project/nha-may-bao-bi-binh-minh-tai-cu-chi-1.jpg";
import img6 from "../../../assets/project/hinh-minh-hoa-ac-2.jpg";
import img7 from "../../../assets/project/Nhamay2.jpg";
import img8 from "../../../assets/project/pc_mo_hinh_tavico_long_binh_duyet_26_12_2018.jpg";
import img9 from "../../../assets/project/1-2.jpg";
import img10 from "../../../assets/project/lap-dung-ket-cau-thep.jpg";
import img11 from "../../../assets/project/nha-may-go-thien-phap.png";



function Project() {
    let arrayProject = [
        {
            id: 1,
            img: img1,
            tenDuAn: "Nhà máy chế biến đá thạch anh nhân tạo",
            diaChi: "Lô B112-114 và một phần lô B111, đường N1 KCN Dệt May Nhơn Trạch, Nhơn Trạch, Đồng Nai",
            chuDauTu: "Công ty TNHH MTV Đá Thạch Anh Cao Cấp Phú Tài",
            quyMo: "44.188m²",
        },
        {
            id: 2,
            img: img2,
            tenDuAn: "Nhà máy công ty cổ phần giấy G.P",
            diaChi: "KCN Nam Tân Uyên, P. Khánh Bình, TX. Tân Uyên, Bình Dương",
            chuDauTu: "Công ty Cổ phần giấy G.P",
            quyMo: "40.000m²",
        },
        {
            id: 3,
            img: img3,
            tenDuAn: "Công trình nhà xưởng B1",
            diaChi: "KCN Lê Minh Xuân, Huyện Bình Chánh, TP Hồ Chí Minh",
            chuDauTu: "Công ty CP Đầu tư Sài Gòn VRG",
            quyMo: "10.000m²",
        },
        {
            id: 4,
            img: img4,
            tenDuAn: "Công trình nhà xưởng A",
            diaChi: "Lô 33-5, 33-6 Đường N16, KCN Phước Đông, huyện Gò Dầu, tỉnh Tây Ninh",
            chuDauTu: "Công ty CP Đầu tư Sài Gòn VRG",
            quyMo: "20.000m²",
        },
        {
            id: 5,
            img: img5,
            tenDuAn: "Nhà máy sản xuất bao bì giấy Bình Minh",
            diaChi: "Ô A9.1, Lô A9 Đường D2, KCN Đất Cuốc, Thị xã Tân Uyên, tỉnh Bình Dương",
            chuDauTu: "Công ty TNHH MTV Sản xuất Bao bì giấy Bình Minh",
            quyMo: "28.488m²",
        },
        {
            id: 6,
            img: img6,
            tenDuAn: "Nhà máy Sang Fang",
            diaChi: "KCN Mỹ Xuân, tỉnh Bà Rịa-Vũng Tàu",
            chuDauTu: "Công ty TNHH Sang Fang Việt Nam",
            quyMo: "15.720m²",
        },
        {
            id: 7,
            img: img7,
            tenDuAn: "Nhà xưởng ShangWood",
            diaChi: "Số 20, Đường số 04, KCN Vsip II, đường Phú Hoà, TP. Thủ Dầu Môt, Bình Dương",
            chuDauTu: "Công ty TNHH SangWood Industries",
            quyMo: " ",
        },
        {
            id: 8,
            img: img8,
            tenDuAn: "Siêu thị gỗ Tây Tavico Long Bình",
            diaChi: "Khu dịch vụ Tân Cảng - Long Bình, KP 7, phường Long Bình, tỉnh Đồng Nai",
            chuDauTu: "Công ty CP Tân Vĩnh Cửu",
            quyMo: " ",
        },
        {
            id: 9,
            img: img9,
            tenDuAn: "Nhà xưởng Công Ty TNHH sản xuất gỗ An Cường",
            diaChi: "Lô A17, KCN Đất Cuốc - khu B, xã Đất Cuốc, huyện Bắc Tân Uyên, tỉnh Bình Dương",
            chuDauTu: "Công ty TNHH Sản xuất gỗ An Cường",
            quyMo: "100.000m²",
        },
        {
            id: 10,
            img: img10,
            tenDuAn: "Nhà máy WooShin EMC Vina",
            diaChi: "KCN Mỹ Phước 3, TX. Bến Cát, tỉnh Bình Dương",
            chuDauTu: "Công ty TNHH Wooshin EMC Vina",
            quyMo: "10.000m²",
        },
        {
            id: 11,
            img: img11,
            tenDuAn: "Nhà máy gỗ Thiên Phát",
            diaChi: "Lô A1, cụm CN Hoài Tâm, xã Hoài Tân, huyện Hoài Nhơn, tỉnh Bình Định",
            chuDauTu: "Công ty TNHH SX TM & DV Thiên Phát",
            quyMo: " ",
        },
    ];
    // const [isOpen, setIsOpen] = useState(false);
    // function toggle() {
    //     setIsOpen((isOpen) => !isOpen);
    // }
    return (
        <>
            <section className="project" id="project">
                <h1 className="heading">Dự Án Tiêu Biểu</h1>
                <div className="box-container">
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
                                            <p>Địa điểm: {item.diaChi}</p>
                                            <p>Chủ đầu tư: {item.chuDauTu}</p>
                                            <p>Quy Mô: {item.quyMo}</p>
                                        </div>
                                    </a>
                                </>
                            );
                        })}
                </div>
            </section>
        </>
    );
}

export default Project;
