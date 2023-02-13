import { FaUserAlt, FaInfoCircle } from "react-icons/fa";
const MessagesInfoBar = () => {
  return (
    <div className="flex justify-between p-4 items-center">
      <div className="rounded">
        <p className="flex items-center gap-2">
          <FaUserAlt />
          Lorem User
        </p>
      </div>
      <div>
        <button
          type="button"
          className="rounded-xl hover:scale-95ease-in-out duration-500  p-1 hover:bg-slate-500 hover:text-white flex items-center gap-2"
        >
          <FaInfoCircle /> Kullanıcı Bilgisi
        </button>
      </div>
    </div>
  );
};

export default MessagesInfoBar;
