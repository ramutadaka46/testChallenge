import React , { useContext } from 'react'
import { SetData } from '../App'

import Card from "react-bootstrap/Card";
export default function Aboutus() {
  const updateData=useContext(SetData)
  return (
    <div className="col-4">
      <Card>
        <Card.Body>
          <Card.Title>Aboutus Component</Card.Title>
          <Card.Text>
            Enter some text to update in app component
            <input type="text" onChange={(e)=>updateData(e)} id="aboutUsData"/>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}
