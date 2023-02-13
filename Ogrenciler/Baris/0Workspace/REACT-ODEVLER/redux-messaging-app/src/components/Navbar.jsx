const Navbar = () => {
  return (
    <nav className="container-2xl bg-slate-600 text-white p-4 flex items-center justify-between shadow-lg shadow-gray-500">
      <div className="flex items-center gap-2">
        <div>
          <img
            src="https://cdn2.iconfinder.com/data/icons/ios7-inspired-mac-icon-set/1024/messages_5122x.png"
            alt=""
            width={30}
            height={30}
          />
        </div>
        <div>
          <span className="font-sans tGirişext-md">Redux Messaging App</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="p-1 px-4 rounded-md ease-in-out duration-300 hover:scale-110"
        >
          Giriş
        </button>
        <button
          type="button"
          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 p-1 px-4 ease-in-out duration-300 rounded-md"
        >
          Kayıt Ol
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
