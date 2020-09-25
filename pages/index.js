import Link from 'next/link';
import React, { useState } from 'react';
import { products } from '../constants/index';

function Home({ products }) {
  const [data, setData] = useState(products);

  function handleFiltered() {
    setData([...data, ...data]);
  }

  return (
    <div className="container">
      <div className="row">
        <button onClick={handleFiltered} className="btn">Show more </button>
      </div>
      <div className="row">
        {
          data.map(({ id, desc, title }) => {
            return (
              <div key={id} className="card border-primary mb-3" style={{ maxWidth: '18rem' }}>
                <div className="card-header">{title}</div>
                <div className="card-body text-primary">
                  <Link href="/product/[id]" as={`/product/${id}`}>
                    <a>
                      <h5 className="card-title">{title}</h5>
                    </a>
                  </Link>
                  <p className="card-text">{desc}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home;


export async function getStaticProps() {
  

  return {
    props: {
      products: products
    },
  };
}