import { MdSend } from "react-icons/md";

const MessagesSendBar = () => {
  return (
    <div className="p-4 flex gap-3 rounded-lg bg-slate-400 mt-2 justify-center">
      <input
        type="text"
        name="txtMessage"
        className="w-11/12 border-slate-400 border rounded-lg p-2"
      />
      <button
        type="button"
        className="flex items-center gap-2 bg-slate-100 p-2 rounded-lg text-slate-500 hover:shadow-inner hover:shadow-slate-700"
      >
        Gönder
        <MdSend />
      </button>
    </div>
  );
};

export default MessagesSendBar;
