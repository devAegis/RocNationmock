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

      <section>
        <div className='flex justify-between m-auto mt-[60px] w-[80%]'>
          <p>About ROCKNATION</p>
          <p>Listen & Subscribe</p>
        </div>

        <div className='m-auto mt-[10px] w-[80%] bg-blue-50 h-[90vh] grid grid-cols-2 grid-rows-2'>
          {/* First Grid Item */}
          <div className='bg-blue-300 flex justify-center items-center  transition-all duration-300 bg-cover bg-center relative'>
            <div
              className='bg-blue-300 h-full w-1/2 bg-cover bg-center relative '
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

            <div
              className='bg-blue-300 h-full w-1/2 bg-cover bg-center relative '
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
        </div>

          {/* Second Grid Item */}
          <div className='bg-blue-400 flex justify-center items-center hover:bg-blue-300 transition-all duration-300'>
            <p>Grid Item 2</p>
          </div>

          {/* Third Grid Item */}
          <div className='bg-blue-500 flex justify-center items-center hover:bg-blue-400 transition-all duration-300'>
            <p>Grid Item 3</p>
          </div>

          {/* Fourth Grid Item */}
          <div className='bg-blue-600 flex justify-center items-center hover:bg-blue-500 transition-all duration-300'>
            <div
              className='bg-blue-300 h-full w-1/2 bg-cover bg-center relative '
              style={{ backgroundImage: "url('https://images.pexels.com/photos/844928/pexels-photo-844928.jpeg?auto=compress&cs=tinysrgb&w=600')" }}
            >
            <div className='absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-60 transition-all duration-300'>
              
            </div>
              {/* Transparent Overlay at the Bottom */}
            </div>

            <div
              className='bg-blue-300 h-full w-1/2 bg-cover bg-center relative '
              style={{ backgroundImage: "url('https://images.pexels.com/photos/844928/pexels-photo-844928.jpeg?auto=compress&cs=tinysrgb&w=600')" }}
            >
            
              {/* Transparent Overlay at the Bottom */}
            </div>
          </div>
        </div>
      </section>

      <section className='h-[100vh]'>

      <div className='flex justify-between m-auto mt-[130px] w-[80%]'>
          <p>ANNOUNCEMENTS</p>
          <a href=''>READ ALL</a>
      </div>

      <div className='flex m-auto mt-[20px] w-[80%] bg-blue-50 h-[90vh]'>
        <div className='bg-blue-400 w-[30%] text-[18px] p-8 flex flex-col justify-center '>
          <h1 className=''>NEW UPDATES</h1>
          <p className='font-bold mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores fugit sequi iure ipsam sed temporibus! </p>
          <a href="" className='mt-4'>LEARNMORE</a>
        </div>
      <div className='bg-blue-500 w-[70%]'></div>
      </div>

      </section>

      <section className='h-[100vh]'>

        <div className='flex justify-between m-auto mt-[140px] w-[80%]'>
            <p>Our Philanthropy</p>
            <a href=''>READ ALL</a>
          </div>

        <div className='flex m-auto mt-[20px] w-[80%] bg-blue-50 h-[90vh]'>
          <div className='bg-blue-400 w-[30%] text-[18px] p-8 flex flex-col justify-center'>
            <h1 className=''>NEWS LETTER</h1>
            <p className='font-bold mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores fugit sequi iure ipsam sed temporibus! </p>
            <a href="" className='mt-4'>REGISTER</a>
          </div>
        <div className='bg-blue-500 w-[70%]'></div>
        </div>

      </section>

      

    </div>
  )
}

export default Home;