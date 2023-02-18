import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEmployees } from "../slices/employeesSlice";
import { fetchTasks } from "../slices/tasksSlice";
import Task from "./Task";

const Tasks = () => {
  const tasks = useSelector((state) => state.task.tasks);
  // const employees = useSelector((state) => state.employee.employees);
  const dispatch = useDispatch();

  // const employeeName = (task) => {
  //   const data = employees.filter(
  //     (employee) => task.employeeId === employee.employeeId
  //   );
  //   const dataHtml = <div>{data[0]?.employeeFirstName}</div>;
  //   return dataHtml;
  // };
  useEffect(() => {
    dispatch(fetchTasks());
    dispatch(fetchEmployees());
  }, [dispatch]);
  return (
    <div>
      <h4>Görevler</h4>
      {tasks && tasks.length > 0 ? (
        tasks.map((task) => (
          <div className="card" key={task.id}>
            <div className="card-body">
              <h4 className="card-title">{task.title}</h4>
              <p className="card-text">{task.info}</p>
              <div className="">
                <Task taskId={task.employeeId} />
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="alert alert-success">Hiçbir görev bulunmamaktadır.</div>
      )}
    </div>
  );
};

export default Tasks;
