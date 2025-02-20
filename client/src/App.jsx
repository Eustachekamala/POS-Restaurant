import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Home, Auth, Orders, Tables, Menu, NotFound } from './pages';
import Header from './components/shared/Header';

function Layout() {
  const location = useLocation();
  const hideHeaderRoutes = ["/auth"];
  const shouldShowHeader = !hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;