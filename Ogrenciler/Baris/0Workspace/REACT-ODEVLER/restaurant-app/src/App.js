import Appbar from "./components/Appbar";
import Router from "./routes/Router";
import { CategoryProvider } from "./context/CategoryContext";
import { ProductProvider } from "./context/ProductContext";
function App() {
  return (
    <div>
      <CategoryProvider>
        <ProductProvider>
          <Appbar />
          <Router />
        </ProductProvider>
      </CategoryProvider>
    </div>
  );
}

export default App;
