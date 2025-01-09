
import Desktop_heros_corrosol from './Desktop_heros_corrosol'
import DisplayAmazonPrimeVideo from './Display_amazon_prime_video'
import Display_product_four from './Display_product_four'
import DisplayProductHorizontalCorrosal from './Display_product_horizontal_corrosal'
import Display_singal_product_in_offer from './Display_singal_product_in_offer'

function Home_page() {
  return (
    <div className=' min-h-screen bg-zinc-200 '>
      <div className=' p-2 pt-0 pb-0'>
      <Desktop_heros_corrosol/>
      </div>
      <div className=' relative bottom-80 p-7 pt-0 pb-0 w-full'>
        <div className=" w-full grid grid-cols-4 gap-5">
       <Display_product_four />
       <Display_product_four />
       <Display_product_four />
       <Display_product_four />
       <div className="bg-white  col-span-2">
       <DisplayAmazonPrimeVideo />
       </div>
       <Display_product_four />
       <Display_singal_product_in_offer />
       <div className=" col-span-4">
        <DisplayProductHorizontalCorrosal/>
       </div>
        </div>
      </div>
      </div>
  )
}
export default Home_page