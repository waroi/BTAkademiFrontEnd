import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUsers,
  userDetail,
  userMessagesDetail,
} from "../slices/usersSlice";
import User from "./User";

const UsersList = () => {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers(1));
  }, [dispatch]);

  const handleSetUser = (id) => {
    users.families.filter((user) =>
      user.id === id
        ? dispatch(userDetail(user)) &&
          dispatch(userMessagesDetail(user.messages))
        : null
    );
  };
  return (
    <div className="mt-5">
      <div className="flex flex-col shadow-slate-500 shadow-sm p-2 rounded-xl gap-2 ">
        {users.families &&
          users.families.map((f) => {
            return (
              <User
                key={f.id}
                id={f.id}
                name={f.name}
                content={f.messages[0].content}
                phone={f.phone}
                onClick={handleSetUser}
              />
            );
          })}
      </div>
    </div>
  );
};

export default UsersList;
