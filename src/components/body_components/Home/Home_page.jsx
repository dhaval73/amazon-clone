
import Desktop_heros_corrosol from './Desktop_heros_corrosol'
import DisplayAmazonPrimeVideo from './Display_amazon_prime_video'
import Display_product_four from './Display_product_four'
import DisplayProductHorizontalCorrosal from './Display_product_horizontal_corrosal'
import Display_singal_product_in_offer from './Display_singal_product_in_offer'
import Display_four_product_in_details from './Display_four_product_in_details'
import { useContext } from 'react'
import { ProductContext } from '../../../context/ProductContext'


function Home_page() {

  const product_details = useContext(ProductContext)[0]
console.log(product_details)
  return (
    <div className=' min-h-screen bg-zinc-200 '>
      <div className=' p-2 pt-0 pb-0'>
      <Desktop_heros_corrosol/>
      </div>
      <div className=' relative bottom-80 p-7 pt-0 pb-0 w-full'>
        <div className=" w-full grid grid-cols-4 gap-5">
       <Display_product_four product_details={product_details.Display_product_four.Pick_up_where_you_left_off} clamptitle showtitle />
       <Display_product_four product_details={product_details.Display_product_four.DealsRelatedToSavedItems}  />
       <Display_product_four product_details={product_details.Display_product_four.Top_mobile_accessories_for_your_smartphone} showtitle />
       <Display_product_four  />

  
       <div className="bg-white  col-span-2">
       <DisplayAmazonPrimeVideo />
       </div>
       <Display_product_four product_details={product_details.Display_product_four.Revamp_your_home_in_style}  />
       <Display_singal_product_in_offer />
       <div className=" col-span-4">
        <DisplayProductHorizontalCorrosal/>
       </div  >
       <div className=" col-span-4">
        <DisplayProductHorizontalCorrosal/>
       </div>
      <Display_four_product_in_details product_details={product_details.Display_four_product_in_details.Keep_shopping_for}  />
       <Display_product_four product_details={product_details.Display_product_four.Activewear_discount}  />
       <Display_product_four product_details={product_details.Display_product_four.Customers_most_loved_fashion}  />
       <Display_product_four product_details={product_details.Display_product_four.Latest_collection}  />
        </div>
      </div>
      </div>
 
  )
}
export default Home_page