
import headerImage from "../assets/wallovens2.webp";
import CategoryList from "../components/CategoryList/CategoryList";
import Header from "../components/Header/Header";
import { getCategories } from "../data/categories";

function Categories() {
  return (
    <>
      <div className="Products">
      <Header  image={headerImage}  >
       
      

      </Header>
      </div>
      <CategoryList categories={getCategories()} />

    </>
  );
}

export default Categories;  