import { Container, Table } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ApiTest = () => {
  const { users, setUsers } = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/users/index').then((res) => {
      // console.log(res);
      setUsers(res.data);
    });
  }, []);
  return (
    <>
      <Container>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.fname}</td>
                  <td>{user.lname}</td>
                  <td>{user.gender}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </>
  );
};

export default ApiTest;
