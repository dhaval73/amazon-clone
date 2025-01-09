import { useEffect, useState } from 'react'
import desktop_hero_1 from '../../../../public/Home_page_imgs/Desktop_hero_img/D183640088_IN_WLD_RedmiNote14_NewLaunch_PC_Hero_3000x1200._CB539525795_.jpg'
import desktop_hero_2 from '../../../../public/Home_page_imgs/Desktop_hero_img/81pIPl-hTuL._SX3000_.jpg'
import desktop_hero_3 from '../../../../public/Home_page_imgs/Desktop_hero_img/_Desktop_3000x1200._CB537848982_.jpg'
import { MdNavigateBefore, MdNavigateNext  } from "react-icons/md";
function Desktop_heros_corrosol() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        { id: 1, image: desktop_hero_1, alt: 'Slide 1' },
        { id: 2, image: desktop_hero_2, alt: 'Slide 2' },
        { id: 3, image: desktop_hero_3, alt: 'Slide 3' },
    ];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        const autoSlide = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000);
        return () => clearInterval(autoSlide);
    }, [slides.length]);

    return (
        <div className=" relative overflow-hidden">
            {/* Carousel Inner */}
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((slide) => (  
                    <div key={slide.id} className="min-w-full relative">
                        <img
                            src={slide.image}
                            alt={slide.alt}
                            className="w-full h-auto object-cover bg-gradient-to-b"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent  to-zinc-200"></div>
                    </div>
                ))}
            </div>

            {/* Previous Arrow */}
            <button
                onClick={handlePrev}
                className="absolute top-1/4 left-4 transform -translate-y-1/2"
            >
                <MdNavigateBefore color='gray'  size={100}  />
            </button>

            {/* Next Arrow */}
            <button
                onClick={handleNext}
                className="absolute top-1/4 right-4 transform -translate-y-1/2"
            >
                <MdNavigateNext color='gray'  size={100} />
            </button>
        </div>
    )
}


export default Desktop_heros_corrosol





