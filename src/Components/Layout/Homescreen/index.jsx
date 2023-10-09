import React from "react";
import HeroSection from "../HeroSection"
import AboutMe from "../AboutMe";
import Navbar from "../Navbar";
import MySkills from "../MySkills";
import MyPortofolio from "../MyPortofolio";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import Resume from "../../Resume";
import {Toaster} from 'react-hot-toast'


export default function Layout(){

    return(
        <>
        <Navbar/>
        <HeroSection/>
        <MySkills/>
        <AboutMe/>
        <MyPortofolio/>
        <Resume/>
        <Toaster/>
        <ContactMe/>
        <Footer/>     
        </>
    )
}