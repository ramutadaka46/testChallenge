import React , { useContext } from 'react'

import Card from "react-bootstrap/Card";
import { SetData } from '../App'
export default function Contact() {
  const updateData=useContext(SetData)
  return (
    <div className="col-4">
      <Card>
        <Card.Body>
          <Card.Title>Contact Component</Card.Title>
          <Card.Text>
            Enter some text to update in app component
            <input type="text" onChange={(e)=>updateData(e)} id="contactData"/>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    )
}
