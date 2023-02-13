import UsersMenu from "./UsersMenu";
import MessagesMenu from "../components/MessagesMenu";
const Main = () => {
  return (
    <div className="flex gap-2 m-3">
      <UsersMenu />
      <MessagesMenu />
    </div>
  );
};

export default Main;
