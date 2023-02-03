import Appbar from "./components/Appbar";
import { CategoryProvider } from "./context/CategoryContext";
import { ProductProvider } from "./context/ProductContext";
import { OrderProvider } from "./context/OrderContext";
import Router from "./routes/Router";

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
