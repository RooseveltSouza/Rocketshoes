// import React from 'react';
// import { connect, useSelector } from 'react-redux';
// import {
//   MdRemoveCircleOutline,
//   MdAddCircleOutline,
//   MdDelete,
// } from 'react-icons/md';

// import { Container, ProductTable, Total } from './styles';

// function Cart({ cart }) {
//   return (
//     <Container>
//       <ProductTable>
//         <thead>
//           <tr>
//             <th />
//             <th>PRODUTO</th>
//             <th>QTD</th>
//             <th>SUBTOTAL</th>
//             <th />
//           </tr>
//         </thead>
//         <tbody>
//           {cart.map(product => (
//             <tr key={product.id}>
//               <td>
//                 <img src={product.image} alt={product.title} />
//               </td>
//               <td>
//                 <strong>{product.title}</strong>
//                 <span>R${product.price}</span>
//               </td>
//               <td>
//                 <div>
//                   <button type="button">
//                     <MdRemoveCircleOutline size={20} color="#7159c1" />
//                   </button>
//                   <input type="number" readOnly value={product.amount} />
//                   <button type="button">
//                     <MdAddCircleOutline size={20} color="#7159c1" />
//                   </button>
//                 </div>
//               </td>
//               <td>
//                 <strong>R$258,80</strong>
//               </td>
//               <td>
//                 <button type="button">
//                   <MdDelete size={20} color="#7159c1" />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </ProductTable>
//       <footer>
//         <button type="button">Finalizar pedido</button>

//         <Total>
//           <span>TOTAL</span>
//           <strong>R$1920,50</strong>
//         </Total>
//       </footer>
//     </Container>
//   );
// }

// const mapStateToProps = state => ({
//   cart: state.cart,
// });

// export default connect(mapStateToProps)(Cart);
