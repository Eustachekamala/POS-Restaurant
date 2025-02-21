import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Home, Auth, Orders, Tables, Menu, NotFound } from './pages';
import Header from './components/shared/Header';
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import useLoadData from "./components/hooks/useLoadData";
import FullScreenLoader from "./components/shared/FullScreenLoader";

function Layout() {
  const location = useLocation();
  const isLoading = useLoadData();
  const hideHeaderRoutes = ["/auth"];
  const shouldShowHeader = !hideHeaderRoutes.includes(location.pathname);
  const { isAuth } = useSelector(state => state.user);

  if(isLoading) return <FullScreenLoader/>

  return (
    <>
      {shouldShowHeader && <Header />}
      <Routes>
        <Route path="/" element={
          <ProtectedRoutes>
            <Home/>
          </ProtectedRoutes>
        } />
        <Route path="/auth" element={isAuth ? <Navigate to="/"/> : <Auth/>} />
        <Route path="/orders" element={
          <ProtectedRoutes>
            <Orders/>
          </ProtectedRoutes>
        } />
        <Route path="/tables" element={
          <ProtectedRoutes>
            <Tables/>
          </ProtectedRoutes>
        } />
        <Route path="/menu" element={
          <ProtectedRoutes>
            <Menu/>
          </ProtectedRoutes>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function ProtectedRoutes({children}){
  const { isAuth } = useSelector(state => state.user);
  if(!isAuth){
    return <Navigate to="/auth" />
  }
  return children
}

ProtectedRoutes.propTypes = {
  children : PropTypes.node
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;