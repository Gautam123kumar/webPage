import "./Main.css";
import Card from "./Card";
const Main = () => {
  return (
    <div className="mainContainer">
      <div className="contant">
        <h1 className="lunch">
          What are you <br /> having for lunch?
        </h1>
        <p className="discription">
          Loren lpsum dolor sit amet,
          <br />
          consecteture adipiscing elit,
          <br />
          sed do eiusmod tempor incididunt ut labore etc.
        </p>
      </div>
      <div className="showCard">
        <Card />
      </div>
    </div>
  );
};
export default Main;
