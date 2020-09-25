import React from 'react';
import { useRouter } from 'next/router';
import { products } from '@/constants/index';

function ProductDetails() {
    const { query } = useRouter();

    const product = products.find(({ id }) => id === parseInt(query.id));

    const { title, desc } = product;
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

export async function getServerSideProps() {
    return {
        props: {
            product: {
                id: 1,
                title: 'Apple Iphone X',
                desc: 'It was popularized in the 1960s with the release of Leeriest sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like.'
            }
        },
    };
}