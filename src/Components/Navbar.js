import React from "react";
import { Stack } from "@mui/material";

const Navbar = () => {
    return(
        <Stack direction='row' justifyContent='flex-end' sx={{gap: {sm: '100px', xs: '40px'}, mt: { sm: '32px', xs: '20px'}, justifyContent: 'none'}} px="30px">
            <Stack direction="row" gap="40px" fontSize="24px" alignItems='flex-end' >
                {/*<Link to="/" style={{textDecoration: 'none', color:"#3A1212", borderBottom:'3px solid #ffc300'}}>Home</Link>*/}
                <a href="#exercise" style={{textDecoration: 'none', color:"#3A1212", borderBottom:'3px solid #ffc300'}}>Get Started</a>
            </Stack>
        </Stack>
    )
}
export default Navbar;