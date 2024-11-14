import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Importação dos módulos Swiper
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import slide1 from '../../img/image.png';
import slide2 from '../../img/image1.png';
import slide3 from '../../img/image2.png';
import news1 from '../../img/image3.png';
import news2 from '../../img/image4.png';

function HomeC() {
  const navigate = useNavigate();

  const handleVolunteerClick = () => {
    navigate('/login');
  };

  return (
    <div className=" bg-white">
   
      {/* Main Carousel Section */}
      <main className="p-6">
        <section className="">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex flex-col w-[70vw] h-[35vw] items-center mx-auto">
                <img src={slide1} alt="Slide 1" className="rounded-lg shadow-lg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col w-[70vw] h-[35vw] items-center mx-auto">
                <img src={slide2} alt="Slide 2" className="rounded-lg shadow-lg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col w-[70vw] h-[35vw] items-center mx-auto">
                <img src={slide3} alt="Slide 3" className="rounded-lg shadow-lg" />
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="min-h-screen w-[85vw] ml-[6vw] bg-white">
            {/* News Section */}
            <section id="news" className="my-12 items-center justify-center">
              <h3 className="text-xl font-semibold text-[#34323E] text-center mb-4">Notícias</h3>
              <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                pagination={{ clickable: true }}
                loop={true}
                className="mySwiper1"
              >
                {/* Slide 1 */}
                <SwiperSlide>
                  <div className="flex justify-center items-center">
                    <img src={news1} alt="Notícia 1" className="rounded-lg shadow-lg w-[50vw] h-[30vw]" />
                  </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                  <div className="flex justify-center items-center">
                    <img src={news2} alt="Notícia 2" className="rounded-lg shadow-lg w-[50vw] h-[30vw]" />
                  </div>
                </SwiperSlide>

                {/* Custom Navigation Buttons */}
                <div className="swiper-button-next text-blue-500"></div>
                <div className="swiper-button-prev text-blue-500"></div>
              </Swiper>
            </section>

            {/* Volunteer Section */}
            <section id="volunteer" className="text-center my-12">
              <h3 className="text-xl font-semibold text-black mb-4">Voluntário</h3>
              <div className="bg-[#ffff] text-black w-[30vw] ml-[27vw] h-[15vw] p-6 rounded-lg shadow-2xl">
                <p className="text-lg mt-[3vw]">
                  Faça parte do nosso time de voluntários e ajude a transformar vidas!
                </p>
                <div>
                  <button onClick={handleVolunteerClick} className="mt-4 bg-gray-400 text-white px-6 py-2 rounded-md">
                    Seja Voluntário
                  </button>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomeC;
