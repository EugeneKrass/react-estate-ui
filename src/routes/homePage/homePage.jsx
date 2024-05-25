import SearcBar from "../../components/searchbar/SearchBar";
import "./homePage.scss";

const HomePage = () => (
  <div className="homePage">
    <div className="textContainer">
      <div className="wrapper">
        <h1 className="title">Finde Real Estate & Get Your Dream Place</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquam
          ullam accusantium corrupti temporibus tempore ad autem culpa. Optio
          non expedita labore ex quam quos illum aliquid doloribus dolore eius!
        </p>
        <SearcBar />
        <div className="boxes">
          <div className="box">
            <h1>16+</h1>
            <h2>Years of Experience</h2>
          </div>
          <div className="box">
            <h1>200</h1>
            <h2>Award Gained</h2>
          </div>
          <div className="box">
            <h1>1200+</h1>
            <h2>Property Ready</h2>
          </div>
        </div>
      </div>
    </div>
    <div className="imageContainer">
      <img src="./bg.png" alt="" />
    </div>
  </div>
);
export default HomePage;
