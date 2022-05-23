import productImage from "../assets/kitchen4.jpg";
import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../data/products";

import Header from "../components/Header/Header";

function Products() {
  return (
    <>
      <div className="Products">
      <Header title="KitchenTech: Better Together" image={productImage} >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias tenetur obcaecati praesentium officia quia autem, veritatis accusantium veniam ad suscipit vitae amet magni ipsam perferendis sed, unde vel. Magni, incidunt?

      </Header>
      </div>
      <ProductList products={getProducts()} />

    </>
  );
}

export default Products;