import { Link } from "react-router-dom";
import "./style.css";
type TColleciotnProps = {
  imgSrc: string;
  collectionContent: string;
  linkContent?: string;
  linkTarget?: string;
};
function Collection({
  imgSrc,
  collectionContent,
  linkContent = "SHOP NOW",
  linkTarget = "#",
}: TColleciotnProps) {
  return (
    <div className="collection">
      <img src={imgSrc} alt="img" />
      <div className="img-content">
        <p>{collectionContent}</p>
        <button>
          <Link to={linkTarget}>{linkContent}</Link>
        </button>
      </div>
    </div>
  );
}

export default Collection;
