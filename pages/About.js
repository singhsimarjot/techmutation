import React, {useEffect} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import SectionTwo from '../components/SectionTwo'
import ApplySection from '../components/ApplySection'
import Footer from '../components/Footer'
import Header from '../components/Header'
import AboutSecThree from '../components/About/AboutSecThree'
import AboutSecFour from '../components/About/AboutSecFour'


export default function About() {

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 200;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
      else {
        reveals[i].classList.remove("active");
      }
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll", reveal);

},[])


  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About Us</title>
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/slick-theme.css" />
        <link rel="stylesheet" href="css/slick.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous">
        </link>
        <link rel="stylesheet" href="css/applicationSS.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="js/slick.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
      </Head>
      
      <Header titlename="About us" HeadrImge="images/about-heros.png" />
      <SectionTwo TagLine="We Offer a Full Range Of Digital Marketing Services!" />
      <AboutSecThree />
      <AboutSecFour />
      <ApplySection />
      <Footer />
    </div>
  )
}