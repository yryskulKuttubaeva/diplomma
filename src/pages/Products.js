import productImage from "../assets/kitchen4.jpg";
import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../data/products";

import Header from "../components/Header/Header";

function Products() {
  return (
    <>
      <div className="Products">
      <Header title="lorem insup dolor" image={productImage} >
     <h4> Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias tenetur obcaecati praesentium officia quia autem, veritatis accusantium veniam ad suscipit vitae amet magni ipsam perferendis sed, unde vel. Magni, incidunt?</h4>

      </Header>
      </div>
      <ProductList products={getProducts()} />

    </>
  );
}

export default Products;