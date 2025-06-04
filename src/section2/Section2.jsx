import React from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import Bg from "../assets/images/section2/bg.jpeg";

const CoutureByCavalli = () => {
    return (
        <section
            className="w-full bg-center bg-cover text-black"
            style={{
                backgroundImage: `url(${Bg})`,
            }}
        >
            <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
                {/* Left Section */}
                <div className="space-y-10">
                    {/* ...same content... */}
                    <div>
                        <p className="text-sm font-light">Designer apartments</p>
                        <h3 className="text-2xl font-bold tracking-wide">BRANDED BY CAVALLI</h3>
                    </div>

                    <div>
                        <p className="text-sm font-light">Starting price</p>
                        <h3 className="text-2xl font-bold tracking-wide">AED 21,904,000</h3>
                    </div>

                    <div>
                        <p className="text-sm font-light">Payment plan</p>
                        <h3 className="text-2xl font-bold tracking-wide">60/40*</h3>
                    </div>

                    <div>
                        <p className="text-sm font-light">Project Handover</p>
                        <h3 className="text-2xl font-bold tracking-wide">Q2, 2027</h3>
                    </div>
                </div>

                {/* Right Section */}
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight uppercase">
                        COUTURE BY CAVALLI:<br />
                        THE HAUTE EDITION OF LUXURY LIVING
                    </h2>
                    <p className="text-base leading-relaxed text-gray-700">
                        Discover a distinctive collection of luxury residences, where contemporary decadence meets natural sophistication—reserved for those who live exceptionally. Experience designer living in exclusive residences along the scenic Dubai Canal at Safa Park. Branded by Roberto Cavalli, this tower embodies Italian elegance and curated design, offering 3 to 5-bedroom apartments and 6-bedroom penthouses for a lifestyle of unparalleled refinement.
                    </p>

                    {/* Buttons */}
                    <div className="flex items-center space-x-4 pt-4">
                        <button className="px-6 py-3 border border-black rounded-full text-sm hover:border-[#CCB073] hover:text-[#CCB073] transition-all">
                            GET IN TOUCH
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center border border-black rounded-full hover:border-[#CCB073] hover:text-[#CCB073] transition-all">
                            <FaWhatsapp className="text-lg" />
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center border border-black rounded-full hover:border-[#CCB073] hover:text-[#CCB073] transition-all">
                            <FaPhone className="text-lg" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoutureByCavalli;
