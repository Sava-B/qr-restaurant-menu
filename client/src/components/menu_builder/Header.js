import { Box } from "@mui/material"
import React from "react"

function Header() {
    return (
        <>
            {/* HEADER - BACKGROUND - PHOTO */}
            <Box sx={{ height: "25vh", position: "relative" }}>

                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Box
                        sx={{ position: "relative", borderRadius: "100" }}
                        style={{
                            height: "calc(10vw + 3rem)",
                            width: "100vw",
                            backgroundImage: "url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80)",
                            backgroundSize: "cover",
                            backgroundPosition: "center top"
                        }}>
                    </Box>
                </Box>
            </Box>

        </>
    )
}

export default Header
