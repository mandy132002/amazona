import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from 'components/Layout'
import data from 'utils/data'
import ProductItem from 'components/ProductItem'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout title="Home Page">
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 '>
        {data.products.map((product)=> (
          <ProductItem product={product} key={product.slug}></ProductItem>
         ))}
      </div>
    </Layout>
  )
    
  
}
