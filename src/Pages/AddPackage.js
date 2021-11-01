import React from 'react';
import AddNewPackage from '../Components/AddNewPackage/AddNewPackage';
import Footer from '../Components/Footer/Footer';
import { HeaderAddPackage } from '../Components/Header/Header';

const AddPackage = () => {
    return (
        <>

            <HeaderAddPackage></HeaderAddPackage>
            <AddNewPackage></AddNewPackage>
            <Footer></Footer>
        </>
    );
};

export default AddPackage;