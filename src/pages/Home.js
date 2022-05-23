import Header from "../components/Header/Header";
import headerImage from "../assets/wallovens2.webp";
import CategoryList from "../components/CategoryList/CategoryList";
import { getCategories } from "../data/categories";




function Home() {
  return (
    <>
      <Header  title="Technology welcome to we shops"  image={headerImage} >
        Lorem, ipsum dolor sitamet consectetur, dolor sitamet consectetur
        
      </Header>
      <CategoryList categories={getCategories()}/>
    </>
  );
}

export default Home;