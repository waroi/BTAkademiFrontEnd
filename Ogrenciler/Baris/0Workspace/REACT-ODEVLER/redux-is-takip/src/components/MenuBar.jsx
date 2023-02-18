import { MdLocalGroceryStore } from "react-icons/md";
import { FaUsers, FaHome, FaTasks } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const MenuBar = () => {
  const navigate = useNavigate();
  return (
    <div className="container-fluid">
      <div className="list-group list-group-flush">
        <button
          type="button"
          className="list-group-item list-group-item-action bg-transparent border-0 d-flex align-items-center gap-2"
          onClick={() => navigate("/dashboard")}
        >
          <FaHome />
          Dashboard
        </button>
        <button
          type="button"
          className="list-group-item list-group-item-action bg-transparent border-0 d-flex align-items-center gap-2"
          onClick={() => navigate("/dashboard/employees")}
        >
          <FaUsers />
          Personel
        </button>
        <button
          type="button"
          className="list-group-item list-group-item-action bg-transparent border-0 d-flex align-items-center gap-2"
          onClick={() => navigate("/dashboard/products")}
        >
          <MdLocalGroceryStore />
          Ürünler
        </button>
        <button
          type="button"
          className="list-group-item list-group-item-action bg-transparent border-0 d-flex align-items-center gap-2"
          onClick={() => navigate("/dashboard/tasks")}
        >
          <FaTasks />
          Görevler
        </button>
      </div>
    </div>
  );
};

export default MenuBar;
