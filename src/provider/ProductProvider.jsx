import { useState } from 'react';
import { ProductContext } from '../context/ProductContext.js'; // Import the context

import Keepshoppingfor1 from "/Home_page_imgs/Display_four_product_in_details/Keepshoppingfor1.jpg"
import Keepshoppingfor2 from "/Home_page_imgs/Display_four_product_in_details/Keepshoppingfor2.jpg"
import Keepshoppingfor3 from "/Home_page_imgs/Display_four_product_in_details/Keepshoppingfor3.jpg"
import Keepshoppingfor4 from "/Home_page_imgs/Display_four_product_in_details/Keepshoppingfor4.jpg"
import Pickupwhereyouleftoff1 from "/Home_page_imgs/Display_product_four/Pick-up-where-you-left-off1.jpg"
import Pickupwhereyouleftoff2 from "/Home_page_imgs/Display_product_four/Pick-up-where-you-left-off2.jpg"
import Pickupwhereyouleftoff3 from "/Home_page_imgs/Display_product_four/Pick-up-where-you-left-off3.jpg"
import Pickupwhereyouleftoff4 from "/Home_page_imgs/Display_product_four/Pick-up-where-you-left-off4.jpg"
import DealsRelatedToSavedItems1 from "/Home_page_imgs/Display_product_four/DealsRelatedToSavedItems1.jpg"
import DealsRelatedToSavedItems2 from "/Home_page_imgs/Display_product_four/DealsRelatedToSavedItems2.jpg"
import DealsRelatedToSavedItems3 from "/Home_page_imgs/Display_product_four/DealsRelatedToSavedItems3.jpg"
import DealsRelatedToSavedItems4 from "/Home_page_imgs/Display_product_four/DealsRelatedToSavedItems4.jpg"
import RevampYourHomeInStyle1 from "/Home_page_imgs/Display_product_four/Revamp-Your-Home-In-Style1.jpg";
import RevampYourHomeInStyle2 from "/Home_page_imgs/Display_product_four/Revamp-Your-Home-In-Style2.jpg";
import RevampYourHomeInStyle3 from "/Home_page_imgs/Display_product_four/Revamp-Your-Home-In-Style3.jpg";
import RevampYourHomeInStyle4 from "/Home_page_imgs/Display_product_four/Revamp-Your-Home-In-Style4.jpg";
import TopMobileAccessories1 from "/Home_page_imgs/Display_product_four/Top-Mobile-Accessories1.jpg";
import TopMobileAccessories2 from "/Home_page_imgs/Display_product_four/Top-Mobile-Accessories2.jpg";
import TopMobileAccessories3 from "/Home_page_imgs/Display_product_four/Top-Mobile-Accessories3.jpg";
import TopMobileAccessories4 from "/Home_page_imgs/Display_product_four/Top-Mobile-Accessories4.jpg";
import ActivewearDiscount1 from "/Home_page_imgs/Display_product_four/Activewear-Discount1.jpg";
import ActivewearDiscount2 from "/Home_page_imgs/Display_product_four/Activewear-Discount2.jpg";
import ActivewearDiscount3 from "/Home_page_imgs/Display_product_four/Activewear-Discount3.jpg";
import ActivewearDiscount4 from "/Home_page_imgs/Display_product_four/Activewear-Discount4.jpg";
import CustomersMostLovedFashion1 from "/Home_page_imgs/Display_product_four/Customers-Most-Loved-Fashion1.jpg";
import CustomersMostLovedFashion2 from "/Home_page_imgs/Display_product_four/Customers-Most-Loved-Fashion2.jpg";
import CustomersMostLovedFashion3 from "/Home_page_imgs/Display_product_four/Customers-Most-Loved-Fashion3.jpg";
import CustomersMostLovedFashion4 from "/Home_page_imgs/Display_product_four/Customers-Most-Loved-Fashion4.jpg";
import LatestCollection1 from "/Home_page_imgs/Display_product_four/Latest-Collection1.jpg";
import LatestCollection2 from "/Home_page_imgs/Display_product_four/Latest-Collection2.jpg";
import LatestCollection3 from "/Home_page_imgs/Display_product_four/Latest-Collection3.jpg";
import LatestCollection4 from "/Home_page_imgs/Display_product_four/Latest-Collection4.jpg";

// Provider component
export const ProductProvider = ({ children }) => {
  const products_details = useState({
    Display_four_product_in_details: {
      Keep_shopping_for: {
        title: 'Keep shopping for',
        products: [
          {
            id: 1,
            brand: "CEDO",
            model_name: "Samsung Galaxy A14 (5G)",
            features: "Back Case Cover | Camera Protection | Shockproof Bumper-Edge | Acrylic Crystal Clear 360",
            price: 179.00,
            originalPrice: 999.00,
            img: Keepshoppingfor1
          },
          {
            id: 2,
            brand: "Amazon Brand - Solimo",
            model_name: "Samsung Galaxy A14 5G",
            features: "Back Cover Case | Compatible for Samsung Galaxy A14 5G",
            price: 225.00,
            originalPrice: 999.00,
            img: Keepshoppingfor2
          },
          {
            id: 3,
            brand: "TheGiftKart",
            model_name: "Samsung Galaxy A14 4G / A14 5G",
            features: "Hybrid ShockProof Back Cover | Stylish Camera Border | Plated",
            price: 289.00,
            originalPrice: 999.00,
            img: Keepshoppingfor3
          },
          {
            id: 4,
            brand: "TheGiftKart",
            model_name: "Samsung Galaxy A14 4G / A14 5G",
            features: "Liquid Silicone Back Cover | Soft Micro-Fibre Lining Inside | Camera Protection",
            price: 189.25,
            originalPrice: 999.00,
            img: Keepshoppingfor4
          }
        ],
        more: {
          title: 'See more',
          link: "$"
        }
      },
    },
    Display_product_four: {
      Pick_up_where_you_left_off: {
        title: 'Pick up where you left off',
        products: [
          {
            id: 1,
            title: "Lava Blaze Duo 5G (Artic White, 6GB RAM, 128GB Storage)",
            image: Pickupwhereyouleftoff1,
          },
          {
            id: 2,
            title: "iQOO Z9 Lite 5G (Mocha Brown, 6GB RAM, 128GB Storage)",
            image: Pickupwhereyouleftoff2,
          },
          {
            id: 3,
            title: "SupCares Edge To Edge Tempered Glass For Samsung Galaxy A14 5G (6.6 Inch)",
            image: Pickupwhereyouleftoff3,
          },
          {
            id: 4,
            title: "TheGiftKart Shockproof Clear Back Cover Case for Samsung Galaxy A14 4G / A14 5G",
            image: Pickupwhereyouleftoff4,
          }
        ],
        more: {
          title: 'See more',
          link: "$"
        }
      },
      DealsRelatedToSavedItems : {
        title: 'Deals related to items you\'ve saved',
        products: [
          {
            id: 1,
            title: "iQOO Z9s 5G (Onyx Green, 8GB RAM, 128GB Storage)",
            image: DealsRelatedToSavedItems1,
          },
          {
            id: 2,
            title: "Lava Agni 3 5G (Pristine Glass, 8GB+128GB)",
            image: DealsRelatedToSavedItems2,
          },
          {
            id: 3,
            title: "TECNO Phantom X2 Pro 5G Mars Orange (12GB RAM, 256GB Storage)",
            image: DealsRelatedToSavedItems3,
          },
          {
            id: 4,
            title: "Lava Blaze Duo 5G (Celestial Blue, 8GB RAM, 128GB Storage)",
            image: DealsRelatedToSavedItems4,
          },
        ],
        more: {
          title: 'See all deals',
          link: "$",
        },
      },
      Revamp_your_home_in_style: {
        title: 'Revamp your home in style',
        products: [
          {
            id: 1,
            title: "Cushion covers, bedsheets & more",
            image: RevampYourHomeInStyle1,
          },
          {
            id: 2,
            title: "Figurines, vases & more",
            image: RevampYourHomeInStyle2,
          },
          {
            id: 3,
            title: "Home storage",
            image: RevampYourHomeInStyle3,
          },
          {
            id: 4,
            title: "Lighting solutions",
            image: RevampYourHomeInStyle4,
          }
        ],
        more: {
          title: 'Explore all',
          link: "$",
        }
      },
      Top_mobile_accessories_for_your_smartphone : {
        title: 'Top mobile accessories for your smartphone',
        products: [
          {
            id: 1,
            title: "Headsets",
            image: TopMobileAccessories1,
          },
          {
            id: 2,
            title: "Cables and chargers",
            image: TopMobileAccessories2,
          },
          {
            id: 3,
            title: "Cases and covers",
            image: TopMobileAccessories3,
          },
          {
            id: 4,
            title: "Powerbanks",
            image: TopMobileAccessories4,
          }
        ],
        more: {
          title: 'See all offers',
          link: "$",
        }
      },
      Activewear_discount : {
        title: 'Up to 70% off | Activewear that keeps up with you',
        products: [
          {
            id: 1,
            title: "GYMIFIC Sports Training Running Dry Fit Solid Shorts for Men (XL, T-Blue)",
            image: ActivewearDiscount1,
          },
          {
            id: 2,
            title: "NEVER LOSE Women Compression T-Shirt, Top Full Sleeve Plain Athletic Fit Multi Sports Cycling, Cricket, Football, Badminton, Gym, Fitness & Other Outdoor Inner Wear (Black, Medium)",
            image: ActivewearDiscount2,
          },
          {
            id: 3,
            title: "NEVER LOSE Gym Compression Men's Skin Tight Shorts with Mobile Pocket for Gym, Running, Cycling, Swimming, Basketball, Cricket, Yoga, Football, Tennis, Badminton & Many More Sports (M, Black)",
            image: ActivewearDiscount3,
          },
          {
            id: 4,
            title: "GYMIFIC Women's Long Sleeve Workout T-Shirts Super Soft Fit Gym,Yoga Athletic Casual Tops T-Shirts for Women (S, Grey)",
            image: ActivewearDiscount4,
          }
        ],
      },
      Customers_most_loved_fashion : {
        title: "Customers’ Most-Loved Fashion for you",
        products: [
          {
            id: 1,
            title: "FUNDAY FASHION Cotton Half Sleeve Printed Oversized T-Shirt for Womens/Girls (Pack of 2) (Small, Grey & Pink)",
            image: CustomersMostLovedFashion1,
          },
          {
            id: 2,
            title: "Allen Solly Men's Regular Fit Polo (ASKPQRGF701338_Medium Blue_L)",
            image: CustomersMostLovedFashion2,
          },
          {
            id: 3,
            title: "Red Tape Sneaker Casual Shoes for Men | Soft Cushion Insole, Slip-Resistance, Dynamic Feet Support, Arch Support & Perfect for Casual Wear Black/Red, 6 UK",
            image: CustomersMostLovedFashion3,
          },
          {
            id: 4,
            title: "Campus Women's Raise Anglfals/Munlt Sneakers - 8Uk/India 22L-129, Multicolor",
            image: CustomersMostLovedFashion4,
          }
        ],
        more: {
          title: 'Explore more',
          link: "$",
        }
      },
      Latest_collection : {
        title: 'Up to 50% off | Discover latest Collection from stores near you',
        products: [
          {
            id: 1,
            title: "Saanjh Women's Cream & Brown Rayon Stripes Printed Straight Kurta with Bottom (SNJHR5_HRKB0072BRWN_XL)",
            image: LatestCollection1,
          },
          {
            id: 2,
            title: "Saanjh Women Peach Floral Printed Calf Length Straight Rayon Kurta Set_ (SNJH_HRKB0063PCH_XL)",
            image: LatestCollection2,
          },
          {
            id: 3,
            title: "AMN ART Noa Women Block Print Viscose Rayon Anarkali Kurta (Multicolor,M)",
            image: LatestCollection3,
          },
          {
            id: 4,
            title: "KAWAHARA Women's Regular Fit Office Wear Comfortable Lightweight Cotton Blend Embellished Readymade Kurti Tree Pack of 2 (Large, Green-Yellow)",
            image: LatestCollection4,
          }
        ]
      }
      
    },
  
    


  })

  return (
    <ProductContext.Provider value={products_details}>
      <div className=" h-full w-full">
        {children}
      </div>
    </ProductContext.Provider>
  );
};
