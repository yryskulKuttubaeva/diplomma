import Header from "../components/Header/Header";
import headerImage from "../assets/wallovens2.webp";
import CategoryList from "../components/CategoryList/CategoryList";
import { getCategories } from "../data/categories";
import Nike from "../components/Nike";

import "./Home.css";

function Home() {
  return (
    <>
      <Header
        className="Headerhome"
        title="NIKE welcome to we stores"
        image={headerImage}
      >
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          quasi nulla, harum asperiores excepturi dolor corrupti!
        </h4>
      </Header>

      <div className="n">
        <h1>Categories</h1>
      </div>
      <CategoryList categories={getCategories()} />

      <Nike />
    </>
  );
}

export default Home;
