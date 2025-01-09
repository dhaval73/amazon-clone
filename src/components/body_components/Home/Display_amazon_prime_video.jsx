import React from 'react';
import prime_img from '../../../../public/Home_page_imgs/Amazon_prime_images/amezon_prime1.jpg'
function DisplayAmazonPrimeVideo(video_detail) {
  video_detail = {
    title: "Farzi - Season 1",
    img: prime_img,
    link: '#',
  }
  return (
    <>
      <div className=' relative h-full' >
        <span className=' z-10 absolute top-4 left-5 font-bold text-xl text-white '>Prime Video: Recommended for you</span>
        <span className='z-10 absolute top-12 left-5 font-semibold text-sm text-white '>{video_detail.title}</span>
        <div className="relative w-full h-full">
          <img
            src={video_detail.img}
            alt="Example"
            className="w-full h-full "
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/90"
          ></div>
        </div>
        <span className=' absolute bottom-5 left-5 text-sm text-white '>Start watching on Prime Video</span>
      </div>
    </>
  );
}

export default DisplayAmazonPrimeVideo;
