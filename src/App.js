import "./App.css";
import Banner from "./components/Banner.js";
import ShoppingList from "./components/ShoppingList.js";
import Footer from "./components/Footer.js";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Banner />
        <ShoppingList />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
