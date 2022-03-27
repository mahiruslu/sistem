import React from "react";
import backgroundImage from "../../Images/background.jpg";
import "../../../node_modules/pure-react-carousel/dist/react-carousel.es.css";
import HomeSwiper from "./HomeSwiper";
import "./Home.css";
const styles = {
  // backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  // width: "100%",
  height: "100vh",
  // display: "flex",
  // flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
const innerStyles = {
  width: "90%",
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
      <HomeSwiper />
      
      {/* //   <div className="home-inner-container" style={innerStyles}>
    //     <p className="home-paragraph" style={textStyle}>
    //       Sistem makine kalıp 1999 yılında saç metal kalıp üretimi yaparak
    //       faaliyetine başlamıştır. Daha sonra sanayimizin genellikle
    //       yurtdışından ithal ettiği ve yurtiçi pazarda eksikliği hissedilen
    //       hidrolik ve pnömatik malzemelerin imalatına yönelmiştir.
    //     </p>
    //   </div> */}
    </div>
  );
}

export default Home;
