import './HeaderNav.css';

import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const HeaderNav = () => {

    const {user,handleLogOut} = useAuth();

    return (
        <div className="text-gray-600 body-font px-44 md:px-5 xl:px-20">
            <div className="container mx-auto flex flex-wrap justify-around  py-5 flex-col md:flex-row items-center xl:justify-between">
                <a className="flex items-center text-gray-900 mb-4 md:mb-0">
                  <img src="https://i.ibb.co/Zd242sL/travele-logo-2.png" alt="" />
                </a>
                <nav className="menu md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link to="/" className="m-2 md:mr-5 lg:mr-10 text-lg hover:text-gray-900">HOME</Link>
                    <Link to="/package" className="m-2 md:mr-5 lg:mr-10 text-lg hover:text-gray-900">PACKAGES</Link>
                    {
                        user.email ?  <Link to="/my-orders" className="m-2 md:mr-5 lg:mr-10 text-lg hover:text-gray-900">My BOOKING</Link> : ''
                    }
                    {
                        user.email ?  <Link to="/all-orders" className="m-2 md:mr-5 lg:mr-10 text-lg hover:text-gray-900">ALL BOOKING</Link> : ''
                    }
                    {
                        user.email ? '' : <Link to="/login" className="m-2 md:mr-5 lg:mr-10 text-lg hover:text-gray-900">LOGIN</Link>
                    }
                    
                </nav>
                {
                    user.email ? <div class="flex items-center justify-center ">
                    <div class=" relative inline-block text-left dropdown">
                      <span class="rounded-md shadow-sm"
                        ><button class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800" 
                         type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
                          <span>{user.displayName}</span>
                          <svg class="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </button
                      ></span>
                      <div class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                        <div class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                          <div class="px-4 py-3">         
                            <p class="text-sm leading-5">Signed in as</p>
                            <p class="text-sm font-medium leading-5 text-gray-900 truncate">{user.email}</p>
                          </div>
                          <div class="py-1">
                            <Link to="/add-package"  tabindex="0" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm font-bold leading-5 text-left"  role="menuitem" >Add Package</Link>
                            
                            </div>
                          <div class="py-1">
                            <a onClick={handleLogOut} href="javascript:void(0)" tabindex="3" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left font-bold"  role="menuitem" >Sign out</a></div>
                        </div>
                      </div>
                    </div>
                  </div> :
                  <button className="inline-flex items-center bg-red-400 text-white border-0 py-2 px-4 focus:outline-none hover:bg-blue-500 text-base mt-4 md:mt-0">BOOK NOW
                </button>
                }
                
            </div>
        </div>
    );
};

export default HeaderNav;