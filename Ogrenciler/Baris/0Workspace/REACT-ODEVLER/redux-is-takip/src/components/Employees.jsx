import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteEmployee, fetchEmployees } from "../slices/employeesSlice";

const Employees = () => {
  const employees = useSelector((state) => state.employee.employees);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);
  const navigate = useNavigate();
  return (
    <div>
      <div className="border-bottom p-3">
        <h4 className="text-center">Personel Listesi</h4>
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-primary bg-gradient btn-sm"
            onClick={() => navigate("/dashboard/newEmployee")}
          >
            Yeni Personel
          </button>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-borderless align-middle">
          <thead>
            <tr>
              <th>Personel ID</th>
              <th>Ad Soyad</th>
              <th>E-posta</th>
              <th className="text-center">Telefon</th>
              <th className="text-center">Yaş</th>
              <th className="text-center">Cinsiyet</th>
              <th>Adres</th>
              <th>Ünvan</th>
              <th className="text-center">Puan</th>
              <th style={{ width: "200px" }}></th>
            </tr>
          </thead>
          <tbody>
            {employees &&
              employees.map((employee) => {
                return (
                  <tr key={employee.employeeId}>
                    <td>{employee.employeeId}</td>
                    <td>
                      {employee.employeeFirstName} {employee.employeeLastName}
                    </td>
                    <td>{employee.employeeEmail}</td>
                    <td className="text-center">{employee.employeePhone}</td>
                    <td className="text-center">{employee.employeeAge}</td>
                    <td className="text-center">{employee.employeeGender}</td>
                    <td>{employee.employeeAddress}</td>
                    <td>{employee.employeeStatus}</td>
                    <td className="text-center">{employee.employeeRating}</td>
                    <td className="text-center d-flex gap-2 justify-content-center">
                      <button className="btn bg-gradient btn-warning btn-sm">
                        Düzenle
                      </button>
                      <button
                        className="btn bg-gradient btn-danger btn-sm"
                        onClick={() =>
                          dispatch(deleteEmployee(employee.employeeId))
                        }
                      >
                        Sil
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employees;
