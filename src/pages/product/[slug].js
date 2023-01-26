import React from 'react'
import { useRouter } from 'next/router'
import Layout from 'components/Layout'
import data from 'utils/data'
import Link from 'next/link';

export default function ProductScreen() {
  const {query} = useRouter();
  const {slug} = query;
  const product = data.products.find((x)=> x.slug === slug);
  if(!product){
    return <div>Product not found</div>;
  }
  return (
    <Layout title={product.name}>
      <div className='py-2 '>
        <Link href="/">Back to products</Link>
      </div>
    </Layout>
  )
}
