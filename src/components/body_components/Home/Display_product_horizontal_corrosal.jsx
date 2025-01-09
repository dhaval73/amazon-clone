import React from 'react';
import { Link } from 'react-router';
import './custom_scroll.css'
function DisplayProductHorizontalCorrosal() {
    const display_product = {
        title:"Related to items you've viewed",
        products : [
            { id: 1, img: 'https://picsum.photos/200/300',link:"#"},
            { id: 2, img: 'https://picsum.photos/200/250',link:"#"},
            { id: 3, img: 'https://picsum.photos/200/251',link:"#"},
            { id: 4, img: 'https://picsum.photos/200/252',link:"#"},
            { id: 4, img: 'https://picsum.photos/200/253',link:"#"},
            { id: 4, img: 'https://picsum.photos/200/254',link:"#"},
            { id: 4, img: 'https://picsum.photos/200/255',link:"#"},
            { id: 4, img: 'https://picsum.photos/200/250',link:"#"},
            { id: 4, img: 'https://picsum.photos/200/250',link:"#"},
            { id: 4, img: 'https://picsum.photos/200/250',link:"#"},
            { id: 4, img: 'https://picsum.photos/200/250',link:"#"},
            { id: 4, img: 'https://picsum.photos/200/250',link:"#"},
            { id: 4, img: 'https://picsum.photos/200/250',link:"#"},
            { id: 4, img: 'https://picsum.photos/200/250',link:"#"},
            { id: 4, img: 'https://picsum.photos/200/250',link:"#"},
        ],
        more : {
            title: 'See more',
            link: '#',
        }
    }
    

    return (
        <div className="p-5 pb-3 h-72 flex flex-col bg-white">
            
            <span className=" font-bold mb-1 text-xl">
                {display_product.title}
                <Link className=' pl-2 font-semibold text-sm text-sky-800 hover:text-sky-950 hover:underline' >{display_product.more.title}</Link>
            </span>
            
            <div className=" flex flex-row h-full  gap-0  overflow-x-scroll custom-scrollbar  ">
            {display_product.products.map((product) => (
                <div
                    key={product.id}
                    className="flex-shrink-0  text-center"
                >
                    <img
                        src={product.img}
                        alt={product.name}
                        className="w-auto h-full object-contain "
                    />
                </div>
            ))}
            </div>
        </div>
    );
}

export default DisplayProductHorizontalCorrosal;
