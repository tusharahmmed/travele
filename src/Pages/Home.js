import React from 'react';
import Activity from '../Components/Activity/Activity';
import Footer from '../Components/Footer/Footer';
import { HeaderHome } from '../Components/Header/Header';
import Newsletter from '../Components/Newslatter/Newsletter';
// import Hero from '../Components/Hero/Hero';
import PoPularPackages from '../Components/PopularPackages/PoPularPackages';

const Home = () => {
    return (
        <>
           <HeaderHome></HeaderHome>
           <PoPularPackages></PoPularPackages>
           <Activity></Activity>
           <Newsletter></Newsletter>
           <Footer></Footer> 
        </>
    );
};

export default Home;