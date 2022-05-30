import Header from "../components/Header/Header";
import headerImage from "../assets/wallovens2.webp";
import CategoryList from "../components/CategoryList/CategoryList";
import { getCategories } from "../data/categories";




function Home() {
  return (
    <>
      <Header  title="Technology welcome to we shops"  image={headerImage} >
      <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quasi nulla, harum asperiores excepturi dolor corrupti repellat sed odio consequatur dolorem! Reprehenderit quas mollitia neque quaerat dolorem accusamus vel nobis!</h4>
        
      </Header>
      <CategoryList categories={getCategories()}/>
    </>
  );
}

export default Home;