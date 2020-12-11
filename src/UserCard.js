import React from "react";
import { Card } from "react-bootstrap";

function UserCard ({user}) {
 return (
 <div>
 <Card style={{ width: '100%', margin : "15px", padding: "5px" }}>
  <Card.Body>
    <Card.Title style={{color:"blue", fontStyle:"italic"}}>{user.name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{user.username}</Card.Subtitle>
    <Card.Text>
    {user.email}
    </Card.Text>
  </Card.Body>
</Card>
</div>
 )
}

export default UserCard;