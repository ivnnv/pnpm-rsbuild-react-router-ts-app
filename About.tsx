import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="content">
      <h1>About Page</h1>
      <p>Learn more about us on this page.</p>
      <nav>
        <Link to="/">Back to Home</Link> | <Link to="/contact">Go to Contact</Link>
      </nav>
    </div>
  );
};

export default About;