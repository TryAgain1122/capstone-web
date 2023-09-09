"use client";
import Image from "next/image";
import Container from "../Container";
import Link from "next/link";

const Banner = () => {
  return (
    <div>
      <section
        className="
         dark:bg-gray-900
           min-h-[640px]
           mx-auto
           px-3
           flex
           items-center"
      >
        <Container>
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <Image
                  className="object-cover object-center rounded"
                  alt="hero"
                  src="/images/deca2.jpg"
                  width={500}
                  height={500}
                />
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="
              text-2xl 
              sm:text-[38px]
              tracking-[.04em]
              font-normal
              py-3
              text-white
              mb-3">
            Edsa deca tower
          </h1>
          <p className="
            mb-8 
            leading-relaxed  
            opacity-60 
            font-light 
            text-justify 
            text-base
            text-white"> 
             Deca Tower       
             Mandaluyong Edsa is Providing you Easy access to
             everything that you need. Its proximity to main business districts
             and cities make your life extraordinary 
          </p>
          <Link
            href="#"
            className="
                             bg-indigo-500
                               text-white
                               px-4
                               min-w-[158px]
                               min-h-[48px]
                               inline-flex
                               items-center
                               justify-center
                               uppercase
                               hover:bg-orange-300
                               mt-8
                               tracking-widest
                               font-bold
                               shadow
                               rounded-sm
                             "
          >
            Know More
          </Link>
              </div>
            </div>
          </section>
          {/* <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="
              text-2xl 
              sm:text-[38px]
              tracking-[.04em]
              font-normal
              py-3
              text-white
              mb-3">
            Edsa deca tower
          </h1>
          <p className="
            mb-8 
            leading-relaxed  
            opacity-60 
            font-light 
            text-justify 
            text-base
            text-white"> 
             Deca Tower       
             Mandaluyong Edsa is Providing you Easy access to
             everything that you need. Its proximity to main business districts
             and cities make your life extraordinary 
          </p>
          <Link
            href="#"
            className="
                               bg-orange-400
                               px-4
                               min-w-[158px]
                               min-h-[48px]
                               inline-flex
                               items-center
                               justify-center
                               uppercase
                               hover:bg-orange-300
                               mt-8
                               tracking-widest
                               font-bold
                               shadow
                               rounded-sm
                             "
          >
            Know More
          </Link>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image 
            className="object-cover object-center rounded" alt="hero" 
            src="/images/deca2.jpg" 
            width={500}
            height={500}
          />
        </div>
      </div> */}
        </Container>
      </section>
    </div>
  );
};

export default Banner;
