"use client";

import Image from "next/image";
import Container from "../Container";

const Bathroom = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <Container>
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex w-full mb-20 flex-wrap">
              <div className="container max-w-[1200px] mx-auto text-black text-center">
                <h2 className="font-gilda font-normal text-2xl sm:text-[38px] tracking-[.04em] mb-3">
                  Relax at the bedrooms with Comfy Couches.
                </h2>
                <p className="mt-9 tracking-[.04em] text-lg sm:text-2xl font-barlow font-light max-w-[600px] mx-auto leading-7 sm:leading-9">
                  Everything for an active vacation and luxury experience lover.
                </p>
              </div>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            </div>
            <div className="flex flex-wrap md:-m-2 -m-1">
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-1/2">
                  <Image
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="/images2/img1.jpg"
                    height={500}
                    width={500}
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <Image
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="/images2/img2.jpg"
                    height={500}
                    width={500}
                  />
                </div>
                <div className="md:p-2 p-1 w-full">
                  <Image
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="/images2/img3.jpg"
                    height={500}
                    width={500}
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                  <Image
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="/images2/img4.jpg"
                    height={500}
                    width={500}
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <Image
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="/images2/img5.jpg"
                    height={500}
                    width={500}
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <Image
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="/images2/img6.jpg"
                    height={500}
                    width={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Bathroom;
