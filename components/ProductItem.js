import Link from 'next/link'
import React from 'react'

export default function ProductItem({product}) {
  return (
    <div className='card flex flex-col items-center shadow-lg'>
        <div>
        <Link className='' href={`/product/${product.slug}`}>
            <img src={product.image} alt={product.name}  className="w-42 h-96 max-w-full object-cover rounded shadow "/>
        </Link>
        </div>
        
        <div className='flex flex-col items-center justify-center p-5 '>
            <Link className='' href={`/product/${product.slug}`}>
                <h2 className='text-lg'>{product.name}</h2>
            </Link>
            <p>{product.brand}</p>
            <p>${product.price}</p>
            <button className='primary-button bg-yellow-300 rounded-md px-3 py-2' type="button">
                Add to cart
            </button>
        </div>
    </div>
  )
}
