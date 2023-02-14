import { FaUserAlt, FaInfoCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
const MessagesInfoBar = () => {
  const user = useSelector((state) => state.user.userDetail);

  return (
    <>
      {user[1] ? (
        <div className="flex justify-between p-4 items-center">
          <div className="rounded">
            <p className="flex items-center gap-2">
              <FaUserAlt />
              {user[1].name}
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
      ) : null}
    </>
  );
};

export default MessagesInfoBar;
