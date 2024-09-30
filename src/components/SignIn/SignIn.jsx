import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { loginUser, infoUser } from "../../redux/loginSlice";
import { logUser, getUserProfile } from "../../core/api";
import Signup from "../SignUp/Signup";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false); // État pour gérer le formulaire affiché
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userData = await logUser(email, password);
      const token = userData.body.token;
      dispatch(loginUser(token));

      if (rememberMe) {
        localStorage.setItem("token", token);
      }

      const userInfo = await getUserProfile(token);
      const userInfos = {
        email: userInfo.body.email,
        firstName: userInfo.body.firstName,
        lastName: userInfo.body.lastName,
        userName: userInfo.body.userName,
      };
      await dispatch(infoUser(userInfos));
      navigate("/user");
    } catch (error) {
      console.error("Erreur lors de la connexion:", error);
      setError("Identifiants incorrects");
    }
  };

  const handleRememberMe = (e) => {
    setRememberMe(e.target.checked);
  };

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
    setError(""); // Réinitialiser les erreurs lors du changement de formulaire
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>{isSignUp ? "Sign Up" : "Sign In"}</h1>
        {!isSignUp ? (
          <form onSubmit={handleLogin}>
            <div className="input-wrapper">
              <label htmlFor="userEmail">User Email</label>
              <input
                type="email"
                id="userEmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="exemple@gmail.com"
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={handleRememberMe}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <Button btnText="Sign In" className="sign-in-button" />
          </form>
        ) : (
          <Signup />
        )}
        {error && <p className="error">{error}</p>}
        <Button
          btnText={
            isSignUp
              ? "Already have an account ? Sign In"
              : "Create an account ? Sign Up"
          }
          className="toggle-button"
          onClick={toggleForm}
        />
      </section>
    </main>
  );
};

export default SignIn;
