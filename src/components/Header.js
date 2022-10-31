import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <div className="navdiv">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ocr">OCR</Link>
          </li>
          <li>
            <Link to="/collect">Dataset</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainHeader;
