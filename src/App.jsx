import { Provider } from "react-redux";
import Navigation from "./components/Navigation/Navigation.jsx";
import store from "./redux/store.jsx";

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
