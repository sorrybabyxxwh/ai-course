import React from "react";
import {Box, Stack, Typography} from "@mui/material";
import HeroImg from '../images/andrea-de-santis-zwd435-ewb4-unsplash.jpg'
import './styles.css'

const HeroBanner = () => {
    return(
        <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px" height='70vh'>
            <Typography fontWeight={700} sx={{ fontSize: { lg: '28px', xs: '20px' } }} mb="23px" mt="30px">
                ARTIFICIAL INTELLIGENCE <br/>
            </Typography>
            <Typography fontSize="22px" width='400px'>
                This course introduces students to the basic knowledge representation, problem solving, and learning methods of artificial intelligence.
            </Typography>
            <Stack>
                <button href="#" className="cta" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#2558ff', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}><span>Learn More</span></button>
            </Stack>
            <img src={HeroImg} alt="hero-banner" className="hero-banner-img" />

        </Box>
    )
}
export default HeroBanner;