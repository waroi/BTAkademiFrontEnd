import MessagesList from "./MessagesList";
import MessagesInfoBar from "./MessagesInfoBar";
import MessagesSendBar from "./MessagesSendBar";
const MessagesMenu = () => {
  return (
    <div className="m-4 p-4 rounded-xl w-3/4 shadow-sm shadow-slate-500 h-screen   flex flex-col justify-between">
      <MessagesInfoBar />
      <MessagesList />
      <MessagesSendBar />
    </div>
  );
};

export default MessagesMenu;
