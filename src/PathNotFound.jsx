import { Link } from "react-router-dom";

const PathNotFound = () => {
  return (
    <div className="error-page">
      <div className="error-content">
        <img
          src="/images/404_Error-pana.svg"
          alt="404 illustration"
          className="error-image"
        />
        <h1>404</h1>
        <h2>Oops! Page not found.</h2>
        <p>
          The page you’re looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <Link to="/" className="go-home">
          ⬅ Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default PathNotFound;
