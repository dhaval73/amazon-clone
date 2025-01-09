import React from 'react';
import { Link } from 'react-router';

function Display_product_four() {
    // temparery
    const product_details = {
        title: "Pick up where you left off",
        products: [
            {
                id: 1,
                name: "Product 1",
                img: "https://picsum.photos/200/250",
                link : "#",
            },
            {
                id: 2,
                name: "Product 2",
                img: "https://picsum.photos/200/250",
                link : "#",
            },
            {
                id: 3,
                name: "Product 3",
                img: "https://picsum.photos/200/250",
                link : "#",
            },
            {
                id: 4,
                name: "Product 4",
                img: "https://picsum.photos/200/250",
                link : "#",
            },
        ],
        more:{
            title:"See more",
            link:"#",
        }
    };

    return (
        <div className="p-4 max-w-[450px] bg-white ">
            <h1 className="text-xl font-semibold mb-3">{product_details.title}</h1>
            <div className="grid grid-cols-2 gap-4">
                {product_details.products.map((product) => (
                    <div
                        key={product.id}
                        className="flex flex-col overflow-hidden h-full"
                    >
                        <Link to={product.link}>
                        <img
                            src={product.img}
                            alt={product.name}
                            className="w-full max-h-32  object-contain mb-0.5"
                        />
                        <div className="flex-1 text-start font-medium text-sm text-gray-700 ">
                            {product?.name}
                        </div>
                        </Link>
                    </div>
                ))}
            </div>
            <span className=" className=' text-sm  text-sky-800 hover:text-sky-950'">
                <Link>{product_details.more.title}</Link>
            </span>
        </div>
    );
}

export default Display_product_four;
