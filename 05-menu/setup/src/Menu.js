import React from 'react';

const Menu = (props) => {
  // const items = [props];
  // console.log(items);
  return (
    // <div></div>
    <div className="section-center">
      {props.items.map((menuItem) => {
        // console.log(menuItem);
        const { id, title, img, price, desc } = menuItem;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
