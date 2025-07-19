import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="content">
      <h1>Contact Page</h1>
      <p>Get in touch with us here.</p>
      <nav>
        <Link to="/">Back to Home</Link> | <Link to="/about">Go to About</Link>
      </nav>
    </div>
  );
};

export default Contact;