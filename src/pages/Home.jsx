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
        <div className='bg-blue-400 w-[30%]'>
          <h1 className=''>NEWS LETTER</h1>
          <p className='font-bold mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores fugit sequi iure ipsam sed temporibus! </p>
          <a href="" className='mt-4'>REGISTER</a>
        </div>
        <div className='bg-blue-500 w-[70%]'></div>
        </div>

      </section>
      <section className='h-[100vh] flex flex-col justify-center items-center '>
        <div className='flex flex-col justify-center items-center space-y-12'>
          <p className='underline text-[18px]'>JOIN US</p>
          <p className='font-bold text-[22px]'> Sign up for the Roc Nation newsletter</p>
          <label>ENTER EMAIL ADDRESS</label>

          <input type='email' className='w-[400px] h-[50px] border-b-2 border-black'/>
        </div>
        <p class="absolute text-gray-400 text-[310px] font-bold opacity-[25%]">ROCKNATION</p>

      </section>

      <footer className="footer sm:footer-horizontal border-t-2 p-10 h-[50vh] flex justify-around text-[18px]">

      <div className='flex space-x-[100px]'>
        <nav className='flex flex-col space-y-4'>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav className='flex flex-col space-y-4'>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
      </div>
        
        <nav>
          <h6 className="footer-title">FOLLOW US</h6>
          <div className="grid grid-flow-col gap-8">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
</footer>

      <section></section>
    </div>
  )
}

export default Home;