import UsersList from "./UsersList";
import { FaUsers } from "react-icons/fa";

const UsersMenu = () => {
  return (
    <div className="w-1/4 m-4 p-4 rounded-l-2xl">
      <div>
        <p className="font-bold text-slate-500 flex items-center gap-2">
          <FaUsers /> Kullanıcılar
        </p>
      </div>
      <UsersList />
    </div>
  );
};

export default UsersMenu;
