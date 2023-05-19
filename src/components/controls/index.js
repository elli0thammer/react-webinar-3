import React, {useState} from "react";
import './style.css';
import {Modal} from "../modal";
import {plural} from "../../utils";

function Controls({list, onDeleteItem}) {
  const [isOpen, setIsOpen] = useState(false);
  const count = list.length;
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const totalCost =
    count !== 0
      ? list.reduce((total, item) => total + item.price * item.count, 0)
      : 0;

  return (
    <div className='Controls'>
      <span>В корзине:</span>
      <span className='Controls-info'>{count ? ` ${count} ${plural(count, {one: 'товар', few: 'товара', many: 'товаров'})} 
        / ${totalCost} ₽` : "пусто"}</span>
      <button onClick={openModal}>Перейти</button>
      <Modal total={totalCost} onDeleteItem={onDeleteItem} isOpen={isOpen} closeModal={closeModal}
             list={list}/>
    </div>
  )
}

export default React.memo(Controls);
