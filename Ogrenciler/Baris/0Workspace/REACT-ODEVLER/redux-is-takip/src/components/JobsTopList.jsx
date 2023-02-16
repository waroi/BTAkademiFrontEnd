import React from "react";

const JobsTopList = () => {
  return (
    <div className="shadow table-responsive">
      <table className="table table-hover table-borderless table-responsive">
        <thead>
          <tr>
            <th>Konu</th>
            <th className="text-center" style={{ width: "200px" }}>
              Oluşturma Tar.
            </th>
            <th className="text-center" style={{ width: "200px" }}>
              Aciliyet
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>İş Takip Projesi</td>
            <td className="text-center">14.02.2023</td>
            <td className="text-center">Acil</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default JobsTopList;
