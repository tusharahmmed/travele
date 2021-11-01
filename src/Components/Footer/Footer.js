import './Footer.css';

import React from 'react';

const Footer = () => {
    return (
        <footer className="text-gray-200 body-font bg-gray-700">
            <div className="container mx-auto flex flex-wrap items-center p-5 flex-col lg:flex-row  lg:px-10 xl:px-36">
                <span className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                    <a className="mr-5 border-r-2 pr-2 hover:text-gray-400">Privacy Policy</a>
                    <a className="mr-5 border-r-2 pr-2 hover:text-gray-400">Term & Condition</a>
                    <a className="mr-5 hover:text-gray-400">FAQ</a>
                </span>
                <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                <img src="https://i.ibb.co/Zd242sL/travele-logo-2.png" alt="" />
                </a>
                <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                    <span>Copyright © 2021 Travele. All rights reserveds</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;