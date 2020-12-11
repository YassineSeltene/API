import React from "react";
import UserCard from "./UserCard";
import {useEffect, useState} from "react";
import axios from "axios";
import {Container, Row, Col} from "react-bootstrap";


const UserList = () => {
    const [listOfUser, setListOfUser] = useState([]);
    useEffect( ()=>{axios.get("https://jsonplaceholder.typicode.com/users")
    .then ((res) => {
      setListOfUser(res.data);
      })
      .catch ((error)=>{console.log(error)})
    },[])
    
    return (
<div>
<Container>
  <Row>
  { listOfUser.map( (e) => 
  (<Col ><UserCard key={e.id} user={e}/> 
  </Col>) )}
  </Row>
</Container> 
 </div>
    )
}

export default UserList;  




