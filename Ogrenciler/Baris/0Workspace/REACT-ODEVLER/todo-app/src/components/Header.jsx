import "../App.css";

const Header = () => {
  return (
    <div className="nav">
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Flogopedia%2Fimages%2Fb%2Fb6%2FTodo.png%2Frevision%2Flatest%3Fcb%3D20190911200430&f=1&nofb=1&ipt=e8263dcd194216346bb25af8a04dc13963c775d3ad71b29b3019d05578d2259d&ipo=images"
        alt="logo"
        width={30}
        height={30}
      />
      <span>React Todo App</span>
    </div>
  );
};

export default Header;
