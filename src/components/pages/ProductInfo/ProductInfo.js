import React from 'react';
import ProductCarousel from '../ProductPage/ProductCarousel';
import { Rate, Avatar, Tag } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';

const ProductInfo = () => {
  return (
    <div className="product-page">
      <div className="product-container">
        <div className="carousel-container">
          <ProductCarousel />
        </div>

        <div className="item">
          <div className="name-price">
            <p>Item Name</p>
            <p>$XX.XX</p>
          </div>
          <div className="rating">
            <Rate />
          </div>
          <div className="store-name">
            <Avatar size="small" icon={<GlobalOutlined />} />
            <h3>Store Name</h3>
          </div>
          <p>location</p>
          <section>
            <p>
              (Short Description) Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Quisque a eleifend ante. Curabitur ac tincidunt
              eros. Phasellus quis magna id massa iaculis congue. Integer
              dapibus ullamcorper velit, in congue ex euismod at.
            </p>
          </section>
        </div>
      </div>
      <section className="tags-container">
        <Tag className="tags">Tag</Tag>
        <Tag className="tags">Tag</Tag>
        <Tag className="tags">Tag</Tag>
        <Tag className="tags">Tag</Tag>
      </section>
    </div>
  );
};

export default ProductInfo;
