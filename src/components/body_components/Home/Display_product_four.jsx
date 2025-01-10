import React from 'react';
import { Link } from 'react-router';

function Display_product_four({product_details,showtitle = false, clamptitle}) {
    console.log(product_details?.title)
  
   

    return (
        <div className="p-4 max-w-[450px] flex flex-col bg-white ">
            <h1 className="text-xl font-bold mb-3">{product_details?.title}</h1>
            <div className=" flex-1 grid grid-cols-2 gap-4 ">
                {product_details?.products?.map((product) => (
                    <Link key={product.id} className=' flex-1' to={product?.link}>
                    <div
                        className="flex flex-col  justify-center overflow-hidden h-full"
                    >
                        <img
                            src={product?.image}
                            alt={product?.title}
                            className="w-full max-h-32 flex-1  object-contain"
                        />
                        <div className={`text-start font-medium text-sm text-gray-700 ${clamptitle && "line-clamp-1"} `}>
                            { showtitle && product?.title}
                        </div>
                    </div>
                        </Link>
                ))}
            </div>
            <span className=" text-sm  text-sky-800 hover:text-sky-950">
                <Link>{product_details?.more?.title}</Link>
            </span>
        </div>
    );
}

export default Display_product_four;
