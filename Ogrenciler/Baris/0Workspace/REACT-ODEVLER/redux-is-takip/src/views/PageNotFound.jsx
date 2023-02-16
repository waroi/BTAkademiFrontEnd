import pageNotFoundImage from "../images/404.png";

const PageNotFound = () => {
  return (
    <div className="vh-100 container d-flex flex-column justify-content-center align-items-center">
      <img src={pageNotFoundImage} alt={pageNotFoundImage} width={400} />
      <h2>404</h2>
      <span>Sayfa Bulunumadı</span>
    </div>
  );
};

export default PageNotFound;
