import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Card } from "react-bootstrap";
function UserList() {
    //this hooks of listOfUSer  the arry
    const [listOfUSer, setListOfUSer] = useState([]);
    useEffect(() => {
        //this use jsonplaceholder get from link arry 
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        // and then res "post data arry in list of user "card""
        .then(res => setListOfUSer(res.data))
    }, [])
    return (
        <div className='user-card'>
                {listOfUSer.map(user => 
                <Card  className="mb-2"  key={user.id} style={{ width: '18rem' }} >
                    <Card.Header className="name">{user.company.name}</Card.Header>
                    <Card.Body>
                        <Card.Title className="title">{user.name}</Card.Title>
                        <Card.Text>{user.company.catchPhrase}</Card.Text>
                    </Card.Body>
                </Card>
                )}
        </div>
    )
}
export default UserList;
