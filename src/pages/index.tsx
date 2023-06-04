"use client"; // This is a client component

import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import {NavBar} from '../components/NavBar';
import {Footer} from '../components/Footer';
import Image from 'next/image';
import { BsDiscord } from 'react-icons/bs';


const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>SASE TAMU</title>
    </Head>

    <div className="fixed w-full z-40">
      <NavBar/>
    </div>
    <div className="bg-white text-black font-source">
    <div className="flex bg-white items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover bg-informational">

      {/* DESKTOP */}
      <div className="hidden md:block mt-12">
          <div>
            <div className="dash mb-5 md:dash-md"></div>
          </div>
          <div className="text-center">
            <div className="text-white font-bebas text-8xl">Howdy! We are SASE TAMU.</div>
          </div>
          <div>
            <div className="dash mt-3"></div>
          </div>
          <div className="flex font-source text-lg flex-row space-x-5 mt-3 items-center justify-center">
            <button className="bg-sky-700 bg-opacity-75 mt-5 hover:bg-sky-700 hover:text-white text-white py-2 px-4 border rounded">
              <a href="/join">
                Join SASE!
              </a>
            </button>
            <button className="bg-slate-500 bg-opacity-25 mt-5 hover:bg-slate-500 hover:text-white text-white py-2 px-4 border rounded">
            <a href="/upcoming-events">
                Upcoming Events
              </a>
            </button>
          </div> 
      </div>

      {/* MOBILE */}
      <div className="block md:hidden">
          <div>
            <div className="dash-sm mb-5"></div>
          </div>
          <div className="text-center">
            <div className="text-white font-bebas text-7xl">Howdy! We are SASE TAMU.</div>
          </div>
          <div>
            <div className="dash-sm mt-3"></div>
          </div>
          <div className="flex font-source text-lg flex-row space-x-5 mt-3 items-center justify-center">
            <button className="bg-sky-700 bg-opacity-75 mt-5 hover:bg-sky-700 hover:text-white text-white py-2 px-4 border rounded">
              <a href="/join">
                Join SASE!
              </a>
            </button>
            <button className="bg-slate-500 bg-opacity-25 mt-5 hover:bg-slate-500 hover:text-white text-white py-2 px-4 border rounded">
            <a href="/upcoming-events">
                Upcoming Events
              </a>
            </button>
          </div>
      </div>
    </div>

    <div className="bg-white flex flex-col font-source md:flex-row">
      <div className="md:w-1/2 pt-5 pr-10 pb-20 pl-10 md:pl-20">
        <a className="font-bebas text-5xl">Our Mission</a>
        <div className="pt-5 md:pb-5">
          <div>The Society of Asian Scientists and Engineers (SASE) was founded in November 2007 to help Asian heritage scientific and engineering professionals achieve their full potential.</div>
          <div className="font-bold">SASE is dedicated to the advancement of Asian heritage scientists and engineers in education and employment so that they can achieve their full career potential. In addition to professional development, SASE also encourages members to contribute to the enhancement of the communities in which they live.</div>          
          <button className="bg-sky-700 bg-opacity-75 mt-5 hover:bg-sky-700 hover:text-white text-white py-2 px-4 border rounded">
              <a href="/about">
                Learn more!
              </a>
            </button>
        </div>
      </div>
      <div className="md:w-1/2 pl-10 pr-10 -mt-10 md:mt-0 self-center">
        <Image className="w-full rounded-xl"
                  src="/LONESTAR.jpg"
                  width={450}
                  height={50}
                  alt="Picture of SASE at Lonestar"
        />
      </div>
    </div>

    <div className="bg-white flex justify-center pt-10 p-20">
      <svg width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="bi bi-three-dots">
      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
      </svg>
    </div>

    <div className="hidden md:block">
    <div className="p-10 pb-10 flex justify-center">
    <div className="googleCalendar">
    <iframe src="https://calendar.google.com/calendar/embed?src=sasetamu%40gmail.com&ctz=America%2FChicago"></iframe>
    </div>  
    </div>
    </div>
    
    <div className="block md:hidden">
    <div className="pl-10 pr-10 flex justify-center">
    <div className="smgoogleCalendar">
    <iframe src="https://calendar.google.com/calendar/embed?src=sasetamu%40gmail.com&ctz=America%2FChicago&mode=AGENDA" height="400"></iframe>
    </div>  
    </div>
    </div>



    <div className="hidden md:block bg-white h-max flex justify-center pt-20 p-10 md:p-20">
    </div>
      
    </div>

    <Footer/>

  
  </>
  );
};

export default Home;
