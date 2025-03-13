// pages/Home.js
import React from 'react';


function Home() {
  return (
    <div>
      

      <section>
        <div className="relative carousel w-full">
          <div id="slide1" className="carousel-item relative w-full h-[80vh] bg-black ">
            <img
              src="https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="w-[50%] mx-auto" aling-center/>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className=" border-none bg-transparent text-white text-[24px] m-">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full h-[80vh] bg-black">
            <img
              src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="w-[50%] mx-auto" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full h-[80vh] bg-black">
            <img
              src="https://images.pexels.com/photos/12602140/pexels-photo-12602140.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="w-[50%] mx-auto" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full h-[80vh] bg-black">
            <img
              src="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="w-[50%] mx-auto " />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='flex justify-between m-auto mt-[60px] w-[80%]'>
          <p>About ROCKNATION</p>
          <p>Listen & Subscribe</p>
        </div>

        <div className='flex justify-between m-auto mt-[10px] w-[80%] '>
          {/* First Child Div */}
          <div
            className='bg-blue-300 h-[60vh] w-1/3 bg-cover bg-center relative '
            style={{ backgroundImage: "url('https://images.pexels.com/photos/844928/pexels-photo-844928.jpeg?auto=compress&cs=tinysrgb&w=600')" }}
          >
          <div className='absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-60 transition-all duration-300'>
            <div className='absolute flex items-center justify-between p-6 bottom-0 left-0 right-0 h-[120px] bg-transparent hover:bg-black transition-all duration-300'>
              <p className='text-[30px] font-bold text-white '>Music</p>
              <p className='text-[18px] text-white'>INFINITY SONGS</p>
            </div>
          </div>
            {/* Transparent Overlay at the Bottom */}
          </div>

          {/* Second Child Div */}
          <div
            className='bg-blue-300 h-[60vh] w-1/3 bg-cover bg-center relative '
            style={{ backgroundImage: "url('https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=600')" }}
          >
          <div className='absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-60 transition-all duration-300'>
            <div className='absolute flex items-center justify-between p-6 bottom-0 left-0 right-0 h-[120px] bg-transparent hover:bg-black transition-all duration-300'>
                <p className='text-[30px] font-bold text-white '>Sport</p>
                <p className='text-[18px] text-white'>ARSENAL</p>
            </div>
          </div>
            {/* Transparent Overlay at the Bottom */}
          </div>

          {/* Third Child Div */}
          <div
            className='bg-blue-300 h-[60vh] w-1/3 bg-cover bg-center relative '
            style={{ backgroundImage: "url('https://images.pexels.com/photos/39896/space-station-moon-landing-apollo-15-james-irwin-39896.jpeg?auto=compress&cs=tinysrgb&w=600')" }}
          >
          <div className='absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-60 transition-all duration-300'>
          <div className='absolute flex items-center justify-between p-6 bottom-0 left-0 right-0 h-[120px] bg-transparent hover:bg-black transition-all duration-300'>
                <p className='text-[30px] font-bold text-white '>Discover</p>
                <p className='text-[18px] text-white'>MOONWALK</p>
            </div>
          </div>
            {/* Transparent Overlay at the Bottom */}
          </div>

        </div>
      </section>

      <section></section>

      <section></section>

      <section></section>

      <section></section>

      <section></section>

      <section></section>
    </div>
  )
}

export default Home;