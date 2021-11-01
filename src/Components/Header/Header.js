
import './Header.css';

import React from 'react';
import HeaderTop from '../HeaderTop/HeaderTop';
import HeaderNav from '../HeaderNav/HeaderNav';
import Hero from '../Hero/Hero';
import Login from '../Login/Login';

const HeaderHome = () => {
    return (
        <header className="header h-full">

            <div className="header-container ">
                <HeaderTop></HeaderTop>
                <HeaderNav></HeaderNav>
                <Hero></Hero>
            </div>
        </header>
    )
}
const HeaderLogin = () => {
    return (
        <header className="header h-full">

            <div className="header-container ">
                <HeaderTop></HeaderTop>
                <HeaderNav></HeaderNav>
                <Login></Login>
            </div>
        </header>
    )
}
const HeaderPackage = () => {
    return (
        <header className="header h-full">

            <div className="header-container ">
                <HeaderTop></HeaderTop>
                <HeaderNav></HeaderNav>
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font text-white text-2xl md:text-4xl lg:text-7xl mb-4 font-extrabold lg:px-6 md:px-36 ">TRAVELLING AROUND THE WORLD</h1>
                    </div>
                </div>
            </div>
        </header>
    )
}
const HeaderMyOrder = () => {
    return (
        <header className="header h-full">

            <div className="header-container ">
                <HeaderTop></HeaderTop>
                <HeaderNav></HeaderNav>
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font text-white text-2xl md:text-4xl lg:text-7xl mb-4 font-extrabold lg:px-6 md:px-36 ">My Booking</h1>
                    </div>
                </div>
            </div>
        </header>
    )
}
const HeaderAllOrder = () => {
    return (
        <header className="header h-full">

            <div className="header-container ">
                <HeaderTop></HeaderTop>
                <HeaderNav></HeaderNav>
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font text-white text-2xl md:text-4xl lg:text-7xl mb-4 font-extrabold lg:px-6 md:px-36 ">All Booking</h1>
                    </div>
                </div>
            </div>
        </header>
    )
}
const HeaderAddPackage = () => {
    return (
        <header className="header h-full">

            <div className="header-container ">
                <HeaderTop></HeaderTop>
                <HeaderNav></HeaderNav>
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font text-white text-2xl md:text-4xl lg:text-7xl mb-4 font-extrabold lg:px-6 md:px-36 ">Add Package</h1>
                    </div>
                </div>
            </div>
        </header>
    )
}

export { HeaderHome, HeaderLogin, HeaderPackage,HeaderMyOrder, HeaderAllOrder ,HeaderAddPackage};