import { Outlet } from 'react-router-dom';
import NavBar from '../components/frontend/navbar/Navbar';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="main h-screen bg-yellow mt-4 py-5">
        <Container className="mt-4 py-5">
          <Outlet />
        </Container>
      </div>
    </>
  );
};

export default Home;
