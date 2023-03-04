import React, { useContext } from "react";
import { SetData } from "../App";
import Card from "react-bootstrap/Card";
export default function Home() {
  const updateData = useContext(SetData);
  return (
    <div className="col-4">
      <Card>
        <Card.Body>
          <Card.Title>Home Component</Card.Title>
          <Card.Text>
            Enter some text to update in app component
            <input type="text" onChange={(e)=>updateData(e)} id="homeData"/>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
