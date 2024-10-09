//Variable pour manipuler le store redux
import logo from "../../../src/assets/argentBankLogo.webp";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logoutUser } from "../../redux/loginSlice";
const Navigation = () => {
  const dispatch = useDispatch();
  const loginStore = useSelector((state) => state.login);
  const token = useSelector((state) => state.login.userToken);
  if (token) {
    console.log(
      "le token est présent dans le store donc je change Sign In en Sing out",
      token
    );
  } else {
    console.log("le token n'est pas présent donc je laisse Sign IN");
  }
  // Au click sur logout supréssion du token du local storage
  const handleRedirectHome = () => {
    localStorage.removeItem("token");
    console.log("Token suprimé du local storage");
    dispatch(logoutUser());
  };
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <h1 className="sr-only">Argent Bank</h1>
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
      </NavLink>
      <>
        <div className="login">
          {/* Conditionnellement rendu le lien "Sign In" ou "Sign Out" */}
          {loginStore &&
            loginStore.userProfil &&
            loginStore.userProfil.userName && (
              <Link to="/user" className="userName">
                <i className="fa fa-user-circle"></i>
                <p>{loginStore.userProfil.userName}</p>
              </Link>
            )}
          {token ? (
            <NavLink
              className="main-nav-item"
              to="/"
              onClick={handleRedirectHome}
            >
              Sign Out
            </NavLink>
          ) : (
            <NavLink className="main-nav-item" to="/sign-in">
              <i className="fa fa-user-circle"></i>
              Sign In
            </NavLink>
          )}
        </div>
      </>
    </nav>
  );
};

export default Navigation;
