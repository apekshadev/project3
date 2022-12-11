import React from 'react';
import HomeBanner from '../../Layout/Banner/HomeBanner/HomeBanner';
import HomeProductTeaser from "../../Component/HomeProductTeaser/HomeProductTeaser";
import HomeTeaserOne from "../../Component/HomeTeaserOne/HomeTeaserOne";
import HomeTeaserTwo from "../../Component/HomeTeaserTwo/HomeTeaserTwo";

const  Home=()=> {
    return (
        <>
            <HomeBanner />
            <HomeProductTeaser />
            <HomeTeaserOne />
            <HomeTeaserTwo />
           
        </>
    );
}

export default Home;