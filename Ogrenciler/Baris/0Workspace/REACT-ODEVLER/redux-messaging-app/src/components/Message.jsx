import { BsCheckAll, BsCheck } from "react-icons/bs";
const Message = (props) => {
  return (
    <div
      key={props.messageId}
      className="shadow-slate-400 shadow-sm p-4 rounded-xl flex flex-col w-fit from-slate-100 to-slate-200 bg-gradient-to-r "
    >
      <p>{props.content}</p>
      <div className="flex justify-end gap-2">
        {props.isRead ? (
          <p className="font-bold text-blue-700 flex ">
            <BsCheckAll />
          </p>
        ) : (
          <p className="font-bold text-gray-600 flex ">
            <BsCheck />
          </p>
        )}
        <small className="font-extralight italic text-gray-600">
          {props.date}
        </small>
      </div>
    </div>
  );
};

export default Message;
