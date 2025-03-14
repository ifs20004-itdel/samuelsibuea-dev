import React from 'react'
import {Container, Button} from 'react-floating-action-button'
import { FaRobot } from 'react-icons/fa'

export default function () {
    return (
        <Container>
            {/* <Link></Link> */}
            <Button
                
                tooltip="Chatbot"
                icon = "fa fa-robot"
                styles={{ backgroundColor: "#0077b6", color: "white" }}
                onClick={()=> alert("Chatbot still under development!")}
            >
                <FaRobot size={35}/>
            </Button>
        </Container>
    )
}