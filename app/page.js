"use client";
import Image from "next/image";
import iqac from "./assets/iqac2.png";

export default function Home() {
  return (
    <>
      <section className="text-gray-600 body-font bg-[#fefae0]">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={iqac}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4  text-gray-900 font-bold">
              INTERNAL QUALITY ASSURANCE CELL
            </h1>
            <p className="mb-8 leading-relaxed">
              An Internal Quality Assurance Cell (IQAC) is a dedicated unit
              within an educational institution that ensures and enhances the
              quality of academic and administrative processes. It focuses on
              continuous improvement, monitoring, and evaluation to uphold and
              advance the overall standards of the institution. The IQAC plays a
              pivotal role in promoting a culture of quality assurance and
              facilitating accreditation processes.
            </p>
            <div className="flex justify-center">
              {/* <button className="inline-flex text-white bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-100 hover:text-black rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
