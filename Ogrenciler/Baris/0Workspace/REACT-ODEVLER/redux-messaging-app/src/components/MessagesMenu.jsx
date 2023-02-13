import MessagesList from "./MessagesList";
import MessagesInfoBar from "./MessagesInfoBar";
import MessagesSendBar from "./MessagesSendBar";
import { useSelector } from "react-redux";
const MessagesMenu = () => {
  const messages = useSelector((state) => state.user.messages);
  return (
    <div className="m-4 p-4 rounded-xl w-3/4 shadow-sm shadow-slate-500">
      <MessagesInfoBar />
      <MessagesList />
      <MessagesSendBar />
    </div>
  );
};

export default MessagesMenu;
