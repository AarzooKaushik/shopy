import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import RootLayout from "./pages/Root";
import Stockists from "./components/StockistsPage/Stockists";
import CustomerCare from "./components/CustomerCarePage/CustomerCare";
import DemoPage from "./components/DemoPage/DemoPage";
import Shop from "./components/Shop/Shop";
import Error from "./components/ErrorPage/Error";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Cart from "./components/Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: "true", element: <HomePage /> },
      { path: "shop", element: <Shop /> },
      { path: "customerCare", element: <CustomerCare /> },
      { path: "stockist", element: <Stockists /> },
      { path: "shop/:productId", element: <ProductDetail /> },
      { path: "cart", element: <Cart /> },
    ],
  },
  { path: "/demo", element: <DemoPage /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
