import headerImage from "../assets/wallovens2.webp";
import CategoryList from "../components/CategoryList/CategoryList";
import Header from "../components/Header/Header";
import { getCategories } from "../data/categories";

function Categories() {
  return (
    <>
     <Header image={headerImage}>
      <div className="Products">
       
      
      <CategoryList categories={getCategories()} />
      </div>
      </Header>
     
    </>
  );
}

export default Categories;
