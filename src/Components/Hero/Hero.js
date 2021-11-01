import './Hero.css';

import React from 'react';

const Hero = () => {
    return (
        <section className="hero text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <div className="text-center lg:w-2/3 w-full">
                <h1 className="title-font text-white text-2xl md:text-4xl lg:text-7xl mb-4 font-extrabold lg:px-6 md:px-36 ">TRAVELLING AROUND THE WORLD</h1>
                <p className="mb-8 leading-relaxed md:px-32 lg:px-24">Taciti quasi, sagittis excepteur hymenaeos, id temporibus hic proident ullam, eaque donec delectus tempor consectetur nunc, purus congue? Rem volutpat sodales! Mollit. Minus exercitationem wisi. </p>
                <div className="flex justify-center">
                <button className="ml-4 inline-flex text-white bg-red-400 border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 text-lg">CONTINUE READING</button>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;