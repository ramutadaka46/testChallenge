import "./App.css";
import Home from "./components/home";
import Contact from "./components/contact";
import Aboutus from "./components/aboutus";
import { useState, createContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
export const SetData = createContext();
function App() {
  const [childData, setChildData] = useState({
    homeData: "",
    contactData: "",
    aboutUsData: "",
  });

  const updateData = (e) => {
    setChildData({ ...childData, [e.target.id]: e.target.value });
  };

  return (
    <div className="App" style={{marginTop:"20px"}}>

      <SetData.Provider value={updateData}>
        <center>
          <Card style={{ width: "80rem" }}>
            <Card.Body>
              <Card.Title>App Component</Card.Title>
              <br></br>
              <Card.Text>
                <div className="row">
                  <Home />
                  <Contact />
                  <Aboutus />
                </div>
              </Card.Text>
              <br></br>
              <Card.Text>
                <Card>
                  <Card.Body>
                    <Card.Title>Updated Data from child components</Card.Title>
                    <h6>
                      Home Data:{" "}
                      <span style={{ color: "red" }}>{childData.homeData}</span>
                    </h6>
                    <h6>
                      Contact Data:{" "}
                      <span style={{ color: "red" }}>
                        {childData.contactData}
                      </span>
                    </h6>
                    <h6>
                      Aboutus Data:
                      <span style={{ color: "red" }}>
                        {childData.aboutUsData}
                      </span>
                    </h6>
                  </Card.Body>
                </Card>
              </Card.Text>
            </Card.Body>
          </Card>
        </center>
      </SetData.Provider>
    </div>
  );
}

export default App;
