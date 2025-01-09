import React from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Projects from '../components/Projects';
import Mission from '../components/mission';


const Home = () => {
    return (
        <>
            <Hero />
            <Intro />
            <Mission/>
            <Projects />
            {/* <Portfolio /> */}
            {/* <Clients /> */}
            <Cta/>
            <Footer />
        </>

    )
}

export default Home;

