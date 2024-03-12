import "./App.scss";
import Body from "./component/Body/Body";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
// import {Lines} from "react-preloaders";
// import {Cube} from "react-preloaders";
// import {useEffect, useState} from "react";
import PreLoader from "./component/PreLoader/PreLoader";

function App() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fake = () => {
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 4000);
  //   };
  //   fake();
  // }, []);
  return (
    <>
      <PreLoader />
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
