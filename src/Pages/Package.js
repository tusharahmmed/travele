import React from 'react';
import Footer from '../Components/Footer/Footer';
import { HeaderPackage } from '../Components/Header/Header';
import PoPularPackages from '../Components/PopularPackages/PoPularPackages';

const Package = () => {
    return (
        <>
            <HeaderPackage></HeaderPackage>
            <PoPularPackages></PoPularPackages>
            <Footer></Footer>
        </>
    );
};

export default Package;