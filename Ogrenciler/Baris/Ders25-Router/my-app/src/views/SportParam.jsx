import { useParams } from "react-router-dom";
const SportParam = () => {
  const { name } = useParams();
  return (
    <div>
      <h1>{name} Sayfası</h1>
    </div>
  );
};

export default SportParam;
