import Header from "../Header/Header.jsx";
import MainHome from "../MainHome/MainHome.jsx";
import Footer from "../Footer/Footer.jsx";
import SignIn from "../SignIn/SignIn.jsx";
import User from "../User/User.jsx";
import EditName from "../EditName/EditName.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Navigation = () => {
  const token = useSelector((state) => state.login.userToken);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route
          path="/sign-in"
          element={token ? <Navigate replace to="/" /> : <SignIn />}
        />
        <Route path="/user" element={<User />} />
        <Route path="/editUser" element={<EditName />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Navigation;
