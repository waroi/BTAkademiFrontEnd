import { useNavigate } from "react-router-dom";
import avatar from "../images/avatar.png";

const Employees = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="border-bottom p-3">
        <h4 className="text-center">Personel Listesi</h4>
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-primary bg-gradient btn-sm"
            onClick={() => navigate("/dashboard/newEmployee")}
          >
            Yeni Personel
          </button>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-borderless align-middle">
          <thead>
            <tr>
              <th></th>
              <th>Personel ID</th>
              <th>Ad Soyad</th>
              <th>E-posta</th>
              <th className="text-center">Telefon</th>
              <th className="text-center">Yaş</th>
              <th className="text-center">Cinsiyet</th>
              <th>Adres</th>
              <th>Yetenek</th>
              <th className="text-center">Puan</th>
              <th style={{ width: "200px" }}></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src={avatar}
                  alt={avatar}
                  width={50}
                  className="rounded-circle"
                />
              </td>
              <td>1</td>
              <td>Barış BENLİ</td>
              <td>bbenli@example.com</td>
              <td className="text-center">+901234567890</td>
              <td className="text-center">24</td>
              <td className="text-center">Erkek</td>
              <td>Şırnak,TR</td>
              <td>Front-End Developer</td>
              <td className="text-center">4.5</td>
              <td className="text-center d-flex gap-2">
                <button className="btn bg-gradient btn-warning btn-sm">
                  Düzenle
                </button>
                <button className="btn bg-gradient btn-danger btn-sm">
                  Sil
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employees;
