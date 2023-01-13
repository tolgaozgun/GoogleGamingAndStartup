
import React from 'react'
import { Box, Typography } from '@mui/material'

const SpeakerBox = (props) => {

    return (
        <Box sx={{ color: 'white', width: '100%', padding: '10px', marginY: "10px", marginLeft: '' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: "9px" }}>
                <Typography style={{ fontSize: '30px', fontWeight: 'bold' }}>
                    {props.speaker}
                </Typography>
                <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: 'white' }}>
                    <img src={props.image} alt="google" style={{ width: '100%', height: '100%', borderRadius: "50%" }} />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', padding: "9px" }}>
                <Typography style={{ fontSize: '20px', fontWeight: 'bold' }}>
                    {props.description}
                </Typography>
                <Typography style={{ fontSize: '20px', fontWeight: 'bold' }}>
                    {props.time}
                </Typography>
            </div>
        </Box>
    )
}

export default SpeakerBox