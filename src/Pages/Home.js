import React from "react";

import CTA from "../Components/CTA";
import HeroBanner from "../Components/HeroBanner";

import Info from "../Components/Info";
import Footer from "../Components/Footer";
import {Box} from "@mui/material";

const Home = () => {
    return(
        <Box>
            <HeroBanner />
            <Info/>
            <CTA/>
            <Footer />
        </Box>

    )
}
export default Home;