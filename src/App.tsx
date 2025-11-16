import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./component/admin/Loader";
import Header from "./component/header";

// Admin Routes

const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const Products = lazy(() => import("./pages/admin/Products"));
const Customer = lazy(() => import("./pages/admin/Customer"));
const Transaction = lazy(() => import("./pages/admin/Transaction"));
const NewProducts = lazy(() => import("./pages/admin/management/NewProducts"));
const ProductManagement = lazy(
  () => import("./pages/admin/management/ProductManagement")
);
const TransactionManagement = lazy(
  () => import("./pages/admin/management/TransactionManagement")
);
const Cupon = lazy(() => import("./pages/admin/apps/Coupon"));

// User Routes

const Home = lazy(() => import("./pages/home"));

const App = () => {
  return (
    <Router>
      {/* Header */}
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* User routes */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} /> */}
          {/* Admin Routes */}
          <Route>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/product" element={<Products />} />
            <Route path="/admin/customer" element={<Customer />} />
            <Route path="/admin/transaction" element={<Transaction />} />

            {/* charts  */}

            {/* Apps */}
            <Route path="/admin/app/cupon" element={<Cupon />} />

            {/* Management */}
            <Route path="/admin/product/new" element={<NewProducts />} />
            <Route path="/admin/product/:id" element={<ProductManagement />} />
            <Route
              path="/admin/transaction/:id"
              element={<TransactionManagement />}
            />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
