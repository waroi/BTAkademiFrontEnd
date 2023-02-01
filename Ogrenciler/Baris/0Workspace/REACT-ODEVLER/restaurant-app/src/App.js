import Appbar from "./components/Appbar";
import Router from "./routes/Router";
import { CategoryProvider } from "./context/CategoryContext";
import { ProductProvider } from "./context/ProductContext";
import { OrderProvider } from "./context/OrderContext";
function App() {
  return (
    <OrderProvider>
      <CategoryProvider>
        <ProductProvider>
          <Appbar />
          <Router />
        </ProductProvider>
      </CategoryProvider>
    </OrderProvider>
  );
}

export default App;
