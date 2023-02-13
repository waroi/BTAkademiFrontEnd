import { BsCheckAll } from "react-icons/bs";
const Message = (props) => {
  return (
    <div className="shadow-slate-500 shadow-sm p-4 rounded-xl flex flex-col w-fit from-slate-200 to-slate-500 bg-gradient-to-r ">
      <p>{props.content}</p>
      <div className="flex justify-end gap-2">
        <small className="font-bold text-white flex">
          <BsCheckAll />
          {props.isRead}
        </small>
        <small className="font-extralight italic text-white">
          {props.date}
        </small>
      </div>
    </div>
  );
};

export default Message;
