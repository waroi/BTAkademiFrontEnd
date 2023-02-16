const EmployeesTopList = () => {
  return (
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
          <tr>
            <td>Barış BENLİ</td>
            <td className="text-center">4.5</td>
            <td className="text-center">+901234567890</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmployeesTopList;
