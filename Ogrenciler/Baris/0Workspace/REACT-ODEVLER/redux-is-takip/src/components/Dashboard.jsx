import Card from "./Card";
import EmployesTopList from "./EmployeesTopList";
import JobsTopList from "./JobsTopList";
const Dashboard = () => {
  return (
    <div>
      <div className="row g-4 mb-3">
        <Card title={"Personel (Toplam)"} count={10} icon={""} />
        <Card title={"Sahadaki Personel"} count={1} />
        <Card title={"Bekleyen İş"} count={3} />
        <Card title={"Bitirilen İş (Toplam)"} count={5} />
      </div>
      <div className="row g-4">
        <div className="col-md-6 rounded">
          <div className="card">
            <div className="card-header p-3 text-center fw-bolder text-primary">
              En iyi 5 personel
            </div>
            <EmployesTopList />
          </div>
        </div>
        <div className="col-md-6 rounded">
          <div className="card">
            <div className="card-header p-3 text-center fw-bolder text-primary">
              Son 5 iş
            </div>
            <JobsTopList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
