import NavBar from "./NavBar";
const Roadmap = () => {
    return (
        <div><NavBar/>
      <div
        style={{
          position: "relative",
          backgroundColor: "#fff",
          width: "100%",
          height: "1533px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "0px 12px",
          boxSizing: "border-box",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <img
          style={{
            position: "relative",
            width: "1600px",
marginBottom:"3em"   , 
        height: "223px",
            flexShrink: "0",
            objectFit: "cover",
          }}
          alt=""
          src="../logoimage@2x.png"
        />
        <img
          style={{
            position: "relative",
            width: "1600px",
            height: "1008px",
            flexShrink: "0",
            objectFit: "cover",
          }}
          alt=""
          src="../roadmap.png"
        />
      </div></div>
    );
  };
  
  export default Roadmap;
  