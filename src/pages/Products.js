import Header from "../components/Header/Header";
import productImage from "../assets/kitchen4.jpg";
import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../data/products";

function Products() {
  return (
    <>
      <Header
       Header title="lorem insup dolor" image={productImage}>
        The fruits; cherries or berries, most commonly contain two stones with their flat sides together. A small percentage of cherries contain a single seed, instead of the usual two. This is called a "peaberry".
      </Header>

      <ProductList products={getProducts()} />
    </>
  );
}

export default Products;



