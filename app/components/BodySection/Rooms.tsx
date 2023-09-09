"use client";

import ImageGallery from "./ImageGallery";

const Rooms = () => {
  return (
        <div className = "min-h-[600px] py-16 flex flex-col items-center justify-center  px-3">
            <div className = "container max-w-[1200px] mx-auto text-black text-center">
                <h2 className = "font-gilda font-normal text-2xl sm:text-[38px] tracking-[.04em] mb-3">Relax at the bedrooms with Comfy Couches.</h2>
                <p className="mt-9 tracking-[.04em] text-lg sm:text-2xl font-barlow font-light max-w-[600px] mx-auto leading-7 sm:leading-9">Everything for an active vacation and luxury experience lover.</p>
               <ImageGallery />
            </div>
        </div>
  );
};

export default Rooms;
