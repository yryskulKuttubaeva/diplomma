import Header from "../components/Header/Header";
import headerImage from "../assets/products.jpeg";
import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../data/products";

function Products() {
  return (
    <>
      <Header
        title="Pick your type of coffee!"
        image={headerImage}>
        PRESCRIPTION GLASSES
Our prescription glasses offer a wide choice of online ladies and mens frames ranging from cheap prescription glasses to top designer styles. If you need spectacles for work, reading or driving, we offer high quality glasses at a great price, along with free prescription lenses in most
      </Header>

      <ProductList products={getProducts()} />
    </>
  );
}

export default Products;