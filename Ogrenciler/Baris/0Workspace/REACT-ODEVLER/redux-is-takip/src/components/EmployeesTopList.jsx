import { useSelector } from "react-redux";
import { AiFillWarning } from "react-icons/ai";

const EmployeesTopList = () => {
  const employees = useSelector((state) => state.employee.employees);

  return (
    <>
      {employees && employees.length > 0 ? (
        <div className="shadow table-responsive">
          <table className="table table-hover table-borderless table-responsive">
            <thead>
              <tr>
                <th>Personel</th>
                <th className="text-center" style={{ width: "200px" }}>
                  Puan
                </th>
                <th className="text-center" style={{ width: "200px" }}>
                  Telefon
                </th>
              </tr>
            </thead>
            <tbody>
              {employees &&
                employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>
                      {employee.employeeFirstName} {employee.employeeLastName}
                    </td>
                    <td className="text-center">0</td>
                    <td className="text-center">{employee.employeePhone}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="alert alert-warning d-flex gap-2 align-items-center m-5">
          <AiFillWarning />
          Şirkette çalışan personel bulunmamaktadır.
        </div>
      )}
    </>
  );
};

export default EmployeesTopList;
