import React from 'react'
import { Link } from 'react-router'
import product_img from '../../../../public/Home_page_imgs/single_product_in_offer/single_product_in_offer-1.jpg'

function Display_singal_product_in_offer(product_details) {
    product_details = {
        title: "Up to 75% off | Headphones",
        img: product_img,
        link: "#",
        more: {
            title: 'Shop Now',
            link: '#',
        }
    }
    return (
        <div className="p-5 max-w-[450px] bg-white flex flex-col ">
            <h1 className="text-xl font-bold mb-3">{product_details.title}</h1>
            <img className=' h-full mb-5 mt-3  ' src={product_details.img}  alt={product_details.title} />
            <span className=' text-sm  text-sky-800 hover:text-sky-950'>
                <Link to={product_details.more.link} >
                    {product_details.more?.title}
                </Link>
            </span>

        </div>
    )
}

export default Display_singal_product_in_offer