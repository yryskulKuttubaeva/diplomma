import axios from "axios";
import { useEffect, useState } from "react";
import { getProducts } from "../data/products";
import { useSelector } from "react-redux";

export default function History() {
  const [orders, setOrders] = useState(null);
  const products = getProducts();
  const localId = useSelector(store => store.auth.localId);

  useEffect(() => {
    axios.get('https://diploma-4a86d-default-rtdb.firebaseio.com/orders.json?orderBy="localId"&equalTo="' + localId + '"')
      .then(response => setOrders(response.data));
  }, [localId]);

  let output = "No items in the history";
  if (orders !== null) {
    output = Object.keys(orders).map(orderId => (
      <div key={orderId}>
        <ul>
          {Object.keys(orders[orderId].items).map(itemId => (
            <li key={itemId}>{products[itemId]}: {orders[orderId].items[itemId]}</li>
          ))}
        </ul>
        <hr />
      </div>
    ));
  }

  return (
    <div className="Orders">
      {output}
    </div>
  );
}