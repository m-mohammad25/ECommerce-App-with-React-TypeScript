import { TCategory } from "@customTypes/category";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
const { category, categoryImg, categoryTitle } = styles;

const Category = ({ title, prefix, img }: TCategory) => {
  return (
    <div className={category}>
      <Link to={`/categories/products/${prefix}`}>
        <div className={categoryImg}>
          <img src={img} alt={title} />
        </div>
        <h4 className={categoryTitle}>{title}</h4>
      </Link>
    </div>
  );
};

export default Category;
