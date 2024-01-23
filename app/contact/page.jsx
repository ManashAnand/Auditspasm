import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <>
      <section className="text-gray-600 body-font relative bg-[#fefae0]">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap bg-[#fefae0]">
          <div className="w-full h-screen bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative bg-[#fefae0]">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder={0}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://maps.google.com/maps?q=Nitte+Meenakshi+Institute+of+Technology&output=embed"

              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
            />
            <div className="bg-white w-full relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                6429, NITTE Meenakshi College Rd, BSF Campus, Yelahanka, Bengaluru, Karnataka 560064
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                      EMAIL
                </h2>
                <a href="mailto: iqacaudit.faculty@nmit.ac.in"
                 className="text-indigo-500 leading-relaxed">
                  iqacaudit.faculty@nmit.ac.in
                </a>
               
              </div>
            </div>
          </div>
         
        </div>
      </section>
    </>
  );
};

export default Contact;
