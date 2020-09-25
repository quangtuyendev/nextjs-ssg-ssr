import { products } from '@/constants/index';
import React from 'react';

function ProductDetails({ product }) {
    const { title, desc } = product || {};
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card border-primary mb-3" style={{ maxWidth: '18rem' }}>
                        <div className="card-header">{title}</div>
                        <div className="card-body text-primary">
                            <h5 className="card-title">Primary card title</h5>
                            <p className="card-text">{desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;

export async function getStaticProps({ params }) {
    const product = products.find(({ id }) => id === parseInt(params.id));
    return {
        props: {
            product
        },
    };
}

export async function getStaticPaths() {
    const products = [
        {
          params: {
              id: '1',
          }
        },
        {
          params: {
              id: '2',
          }
        },
        {
          params: {
              id: '3',
          }
        }
      ]

    return {
      paths: products,
      fallback: true
    };
}