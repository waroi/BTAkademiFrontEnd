import { Formik } from "formik";
import { MdSend } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid4 } from "uuid";
import { postMessage } from "../slices/usersSlice";
const MessagesSendBar = () => {
  const userDetail = useSelector((state) => state.user.userDetail);
  const dispatch = useDispatch();
  console.log(userDetail);
  return (
    <Formik
      initialValues={{
        id: uuid4(),
        content: "",
        date: new Date(),
        isRead: false,
      }}
      onSubmit={(values) => {
        dispatch(
          postMessage({
            messageId: values.id,
            content: values.content,
            date: values.date,
            isRead: values.isRead,
          })
        );
      }}
    >
      {({ values, handleSubmit, handleChange, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <div className="p-4 flex gap-3 rounded-lg bg-slate-400 mt-2 justify-center">
            <input
              type="text"
              name="content"
              value={values.content}
              onChange={handleChange}
              className="w-11/12 border-slate-400 border rounded-lg p-2"
            />
            <button
              type="button"
              className="flex items-center gap-2 bg-slate-100 p-2 rounded-lg text-slate-500 hover:shadow-inner hover:shadow-slate-700"
              disabled={isSubmitting}
            >
              Gönder
              <MdSend />
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default MessagesSendBar;
