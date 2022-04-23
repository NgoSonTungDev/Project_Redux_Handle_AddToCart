import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDataCart, CleanDataCart, RemoveDataCart } from "../../Redux/action";
import { ListDataCart } from "../../Redux/selector";

import "./Cart.css";

const Cart = () => {
  const ListData = useSelector(ListDataCart);
  const [sumToTal, setSumToTal] = useState(0)

  const group = [];

  ListData.forEach((element) => {
    const o = (group[element.id] = group[element.id] || {
      ...element,
      amount: 0,
    });
    o.amount += element.amount;
  });

  const dispatch = useDispatch();

  //////////////

  useEffect(()=>{
    var arr = ListData.map((item) => item.price);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += parseInt(arr[i]);
    }
    setSumToTal(sum);
  },[])
  ///////////////////

  const handleAddItem = (item) => {
    // dispatch(addDataCart(item));
    // console.log(ListData);
  };

  const handleRemoveDataCart = (data) => {
    // dispatch(RemoveDataCart(data))
    console.log(ListData.map((item) => item.price));
  };

  const handleCleanCart = () => {
    dispatch(CleanDataCart());
  };

  useEffect(() => {}, []);

  return (
    <div className="tableCart">
      <table>
        <col align="center" />
        <col align="left" />
        <tr>
          <th>Hình ảnh</th>
          <th>Tên Sách</th>
          <th>Tác giả</th>
          <th>Số Lượng</th>
          <th>Giá Sách</th>
          <th>Xóa</th>
        </tr>
        {group.map((item) => (
          <tr className="itemCart">
            <td>
              <img src={item.img} alt="" />
            </td>
            <td>
              <p>{item.title}</p>
            </td>
            <td>
              <p>{item.author}</p>
            </td>
            <td>
              <div className="tongsl">
                <button className="soLuong">-</button>
                <span>{item.amount}</span>
                <button className="soLuong" onClick={() => handleAddItem(item)}>
                  +
                </button>
              </div>
            </td>
            <td>
              <h4>
                {item.price} <span>$</span>
              </h4>
            </td>
            <td>
              <button
                className="btn-Delete"
                onClick={() => handleRemoveDataCart(item)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
      <hr />
      <div className="tongTien">
        <span>ToTal : </span> <span>{sumToTal}</span> <span>$</span>
        <br />
        <button className="clear-btn" onClick={() => handleCleanCart()}>
          Clear Cart <i class="bi bi-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Cart;
