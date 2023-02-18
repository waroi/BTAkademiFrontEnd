import React from "react";
import { useSelector } from "react-redux";

const Task = ({ taskId }) => {
  const employees = useSelector((state) => state.employee.employees);
  const data = employees?.filter((employee) => employee.employeeId === taskId);
  console.log(data[0]);
  return (
    <>
      <div>
        <small>
          {data[0]?.employeeFirstName} {data[0]?.employeeLastName}
        </small>
      </div>
      <div>
        <small>{data[0]?.employeePhone}</small>
      </div>
      <div>
        <small className="fst-italic text-secondary">
          {data[0]?.employeeRating.length > 0
            ? data[0]?.employeeRating
            : "Personele girilen değerlendirme puanı bulunmamaktadır"}
        </small>
      </div>
    </>
  );
};

export default Task;
