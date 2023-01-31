import Appbar from "./components/Appbar";
import Router from "./routes/Router";
import { CategoryProvider } from "./context/CategoryContext";
import { ProductProvider } from "./context/ProductContext";
import { MenuProvider } from "./context/MenuContext";
function App() {
  return (
    <div>
      <CategoryProvider>
        <ProductProvider>
          <MenuProvider>
            <Appbar />
            <Router />
          </MenuProvider>
        </ProductProvider>
      </CategoryProvider>
    </div>
  );
}

export default App;
