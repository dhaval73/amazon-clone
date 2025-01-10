import React, { useState } from 'react'
import { Link } from 'react-router'
import { MdCurrencyRupee } from "react-icons/md";
function Display_four_product_in_details({product_details}) {
   const [current_product,set_current_product]=useState(product_details?.products[0])
   console.log(product_details) 

   const setCurrentProduct = (id)=>{
    console.log(id)
    console.log(product_details.products.find((product)=>product.id == id ))

        set_current_product(product_details.products?.find((product)=>product.id == id))
   }
   console.log(current_product)
      
  return (
    <div className="p-4 max-w-[450px] bg-white ">
            <h1 className="text-xl font-semibold mb-3">{product_details?.title}</h1>
            <div className="flex flex-col items-center">
                <Link></Link>
                <div className="">
                    <img className=' h-full' src={current_product.img} alt="" />
                </div>
                <div className=" mb-2 text-xs">
                    <p className=' text-ellipsis overflow-hidden line-clamp-2'>{current_product?.brand}{current_product.features}</p>
                    <div className=' flex justify-start '>
                        <MdCurrencyRupee size={12} className='' />
                        <span className=' leading-3 font-semibold text-xl'>{current_product?.price.toString().split('.')[0]} </span> 
                        <span className=' text-[10px] leading-3'>{current_product?.price.toString().split('.')[1] || "00"}</span>
                        <span className=' leading-4 text-sm pl-3 line-through tracking-wider text-gray-700' >M.R.P:
                            <span>{current_product?.originalPrice}</span>
                        </span>
                    </div>
                </div>
                <div className=" flex shrink-0 ">
                    {product_details.products.map((product)=>
                    <div key={product.id} onClick={()=>setCurrentProduct(product.id)} className={`size-16 border border-gray-900 hover:border-blue-800 ${current_product.id == product.id && " border-[3px] border-blue-700 "} m-1 rounded-md flex  justify-center items-center`}>
                        <img src={product.img} className=' object-fill max-h-14 max-w-14  ' alt="" />
                    </div>
                )}
                </div>
            </div>
            <span className="text-sm  text-sky-800 hover:text-sky-950">
                <Link to={product_details?.more?.link} >{product_details?.more?.title}</Link>
            </span>
        </div>
  )
}

export default Display_four_product_in_details