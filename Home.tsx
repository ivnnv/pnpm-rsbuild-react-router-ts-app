import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="content">
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <nav>
        <Link to="/about">Go to About</Link> | <Link to="/contact">Go to Contact</Link>
      </nav>
    </div>
  );
};

export default Home;