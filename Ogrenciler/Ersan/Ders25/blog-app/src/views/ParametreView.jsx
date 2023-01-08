import { useParams } from "react-router-dom";

const ParametreView = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Gönderi Girişi</h1>
      <h3>Girdi: {id}</h3>
    </div>
  );
};

export default ParametreView;
