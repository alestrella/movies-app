import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h1>Opps, you've lost in space</h1>
      <p>We can not find the page that you're looking for...</p>
      <Link to="/">Go Home</Link>
    </div>
  );
};
export default NotFoundPage;
