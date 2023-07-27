

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import ProductOrderList from "./ProductOrderList";
// import { Order } from "../../types/type";

// function OrderDetail() {
//   const { id } = useParams<{ id: string }>(); 
//   const [order, setOrder] = useState<Order | null>(null); 
//   const [error, setError] = useState<string | null>(null);


//   useEffect(() => {

//     axios
//       .get(`http://localhost:8000/orders/${id}`)
//       .then((response) => {
//         setOrder(response.data); 
//         console.log(response.data.productList);
//       })

//       .catch((error) => {
//         setError("There was an error fetching the order.");

//         console.error("There was an error!", error);
//       });
//   }, [id]);

//   if (error) {
//     return <div>{error}</div>;
//   }

 
//   if (!order) {
//     return <div>Loading...</div>; 
//   }

//   return (
//     <div>
//       <div>
//         {order?.createdAt && new Date(order.createdAt).toLocaleDateString()}
//       </div>
//       <div>
//         <h2>Products</h2>
//         {order?.productList?.map((product) => (
//           <ProductOrderList key={product._id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default OrderDetail;


import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import ProductOrderList from "./ProductOrderList";
import { fetchOrderDetail } from "../../redux/slice/order";
import { useParams, useNavigate } from "react-router-dom";
import { Order } from "../../types/type";

type Params = {
  id: string;
};

export default function OrderDetail() {
  const { id } = useParams<Params>();

  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();
  const orderDetail = useSelector(
    (state: RootState) => state.order.orderDetail as Order
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchOrderDetail(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (!orderDetail) {
      alert("No such order found!");
      navigate("/");
    }
  }, [orderDetail, navigate]);

  if (!orderDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Order Detail</h1>
      {orderDetail.createdAt && (
        <div>{new Date(orderDetail.createdAt).toLocaleDateString()}</div>
      )}
      <div>
        {orderDetail.productList &&
          orderDetail.productList.map((product) => (
            <ProductOrderList key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
}
