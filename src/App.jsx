import "./App.scss";
import Body from "./component/Body/Body";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import PreLoader from "./component/PreLoader/PreLoader";

function App() {
  return (
    <>
      {/* <PreLoader /> */}
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
