// import React from "react";
// import ProductOrderList from "./ProductOrderList";
// import { Order } from "../../types/type";

// interface OrderDetailProps {
//   order: Order;
// }

// function OrderDetail(props: OrderDetailProps) {
//   const { order } = props;

//   return (
//     <div>
//       <div>{new Date(order.createdAt).toLocaleDateString()}</div>
//       <div>
//         <h2>Products</h2>
//         {order.productList.map((product) => (
//           <ProductOrderList key={product._id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default OrderDetail;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductOrderList from "./ProductOrderList";
import { Order } from "../../types/type";

function OrderDetail() {
  const { id } = useParams<{ id: string }>(); 
  const [order, setOrder] = useState<Order | null>(null); 
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

    axios
      .get(`http://localhost:8000/orders/${id}`)
      .then((response) => {
        setOrder(response.data); 
        console.log(response.data.productList);
      })

      .catch((error) => {
        setError("There was an error fetching the order.");

        console.error("There was an error!", error);
      });
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

 
  if (!order) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <div>
        {order?.createdAt && new Date(order.createdAt).toLocaleDateString()}
      </div>
      <div>
        <h2>Products</h2>
        {order?.productList?.map((product) => (
          <ProductOrderList key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default OrderDetail;
