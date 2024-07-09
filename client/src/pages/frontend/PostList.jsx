import { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:3000/posts/index');
  //       setPosts(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchPosts();

  useEffect(() => {
    const fetchPosts = () => {
      axios
        .get('http://localhost:3000/posts/index')
        .then((response) => {
          setPosts(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchPosts = () => {
      axios
        .get('http://localhost:3000/posts/index')
        .then((response) => {
          setPosts(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/posts/delete/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>post List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Birthday Date</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={post.id}>
              <td>{index + 1}</td>
              <td>{post.nom}</td>
              <td>{post.prenom}</td>
              <td>{post.age}</td>
              <td>{new Date(post.DateNaissance).toLocaleDateString()}</td>
              <td>
                {/* <Button
                  variant="warning"
                  className="mr-2"
                  onClick={() => onEditPost(post)}
                >
                  Edit
                </Button> */}
                <Button variant="danger" onClick={() => handleDelete(post.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PostList;
