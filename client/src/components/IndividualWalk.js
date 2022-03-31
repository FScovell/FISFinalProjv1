
import Dashboard from '../pages/Dashboard'
import * as React from 'react';
import { useState, useEffect } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';

export default function IndividualWalk({setFormTab, formTab, walk, user, handleLogout}) { 
    const [tab, setTab] = useState(false)
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    function walkClickTester(){
        setFormTab(!formTab)
    }

    function deleteWalk(){
        console.log(walk.id)
        fetch(`http://127.0.0.1:3000/deleteWalk?id=${walk.id}`, {method: "DELETE"})
        window.location.reload()
    }
    // if(tab === true){

            return(
                <>
                    {/* <h1 onClick={walkClickTester} align="center">{walk.name}</h1> */}
                    <div alignItems="center" justifyContent="center">
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                    {walk.name}
                                </Typography>
                                <Typography sx={{ color: 'text.secondary' }}>{walk.description}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Dashboard walk={walk} user={user} handleLogout={handleLogout}/>
                                <button onClick={deleteWalk}>Delete Walk</button>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </>
            )


    // }else{
    //         return(
    //             <>
    //                 <h1 onClick={walkClickTester} align="center">{walk.name}</h1>
    //             </>
    //         )
    // }


}