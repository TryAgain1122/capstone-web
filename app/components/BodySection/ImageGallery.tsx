'use client'

import Image from "next/image";

const ImageGallery = () => {
  return (
    <div>
      <div className="flex justify-center ">
        <nav className="self-center w-full max-w-7xl  ">
          <div className="flex flex-col  justify-around items-center md:items-start border-b-2">
          </div>
        </nav>
      </div>
      <div className="flex justify-center  ">
        <div className="flex flex-col md:flex-row space-y-2  items-center justify-center max-w-7xl w-full p-4">
          <div className="w-full md:w-1/2 mx-2 h-96  overflow-hidden  ">
            <Image
              src="/images/bedroom1.jpg"
              alt="bedroom"
              className="h-full w-full"
              height="500"
              width="500"
            />
          </div>
          <div className="w-full md:w-1/2 mx-2 h-96 ">
            <div className="flex flex-col space-y-2">
              <div className="h-48 w-full   overflow-hidden  ">
                <Image
                  src="/images/bedroom2.jpg"
                  alt="bedroom"
                  width="500"
                  height="500"
                  className="h-full w-full"
                />
              </div>
              <div className="h-48 w-full flex space-x-1 p-2">
                <div className="h-full w-1/2 overflow-hidden  ">
                <Image
                  src="/images/bedroom2.jpg"
                  alt="bedroom"
                  width="500"
                  height="500"
                  className="h-full w-full"
                />
                </div>
                <div className="h-full w-1/2  overflow-hidden  ">
                <Image
                  src="/images/bedroom4.jpg"
                  alt="bedroom"
                  width="500"
                  height="500"
                  className="h-full w-full"
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
