import React from "react";
import backgroundImage from "../../Images/background.jpg";

const styles = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
const innerStyles = {
  width: "80%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
const textStyle = {
  fontSize: "1.5rem",
  margin: "auto",
  textAlign: "center",
  color: "white",
  paddingTop: "10vh",
};

function Home() {
  return (
    <div className="home-container" style={styles}>
      <div  className="home-inner-container" style={innerStyles}>
        <p className="home-paragraph" style={textStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          facilisis, nisl eget tincidunt euismod, nisl nunc gravida
          tortor, eget tincidunt nisl nunc eget lorem.

          Donec facilisis, nisl eget tincidunt euismod, nisl nunc gravida
          tortor, eget tincidunt nisl nunc eget lorem.

          Donec facilisis, nisl eget tincidunt euismod, nisl nunc gravida
          tortor, eget tincidunt nisl nunc eget lorem.
        </p>
      </div>
    </div>
  );
}

export default Home;
