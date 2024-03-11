import {useEffect} from "react";
import "./preLoader.scss";
import {preLoaderAnim} from "../Animated/index";
function PreLoader() {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>T</span>
        <span>O</span>
        <span>F</span>
        <span>F</span>
        <span>A</span>
        <span>R</span>
      </div>
    </div>
  );
}

export default PreLoader;
