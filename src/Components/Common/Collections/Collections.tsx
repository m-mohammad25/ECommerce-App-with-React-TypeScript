import Collection from "./Collection/Collection";
import "./style.css";

function Collections() {
  return (
    <section id="collection">
      <div className="collections">
        <Collection
          imgSrc="https://cdn-eu.dynamicyield.com/api/9876644/images/cfb357649428__hp-w12-22032022-h_m-men.jpg"
          collectionContent="Men Clothing"
          linkTarget="/categories/products/men"
        />
        <Collection
          imgSrc="https://cdn-eu.dynamicyield.com/api/9876644/images/30d354267a09b__hp-w12-22032022-h_m-women_dresses.jpg"
          collectionContent="Women Clothing"
          linkTarget="/categories/products/women"
        />
        <Collection
          imgSrc="https://cdn-eu.dynamicyield.com/api/9876644/images/37d243d334c63__hp-w12-22032022-h_m-kids1.jpg"
          collectionContent="Kinds Clothing"
          linkTarget="/categories/products/kids"
        />
      </div>
    </section>
  );
}

export default Collections;
