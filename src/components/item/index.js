import React from "react";
import PropTypes from "prop-types";
import './style.css';

function Item({item, itemFunction, itemTitle}) {

  const callbacks = {
    itemFunction: (e) => {
      e.stopPropagation();
      itemFunction(item.code)
    }
  }

  return (
    <div className={'Item'}>
      <div className='Item-code'>{item.code}</div>
      <div className='Item-title'>{item.title}</div>
      <div className="Item-price">{item.price} ₽</div>
      {item.count && (
        <div className="Item-count">{item.count} шт</div>
      )}
      <div className='Item-actions'>
        <button onClick={callbacks.itemFunction}>{itemTitle}</button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    count: PropTypes.number
  }).isRequired,
  onAdd: PropTypes.func,
  itemTitle: PropTypes.string
};

Item.defaultProps = {
  onAdd: () => {
  },
}

export default React.memo(Item);
