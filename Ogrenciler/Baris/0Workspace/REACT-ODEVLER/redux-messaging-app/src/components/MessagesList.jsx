import { useSelector } from "react-redux";
import Message from "./Message";

const MessagesList = () => {
  const messages = useSelector((state) => state.user.messages);
  return (
    <div className="flex flex-col gap-2">
      {messages.map((message) => {
        return (
          <Message
            key={message.messageId}
            id={message.messageId}
            content={message.content}
            date={message.date}
            isRead={message.isRead}
          />
        );
      })}
    </div>
  );
};

export default MessagesList;
