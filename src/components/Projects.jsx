import {useState} from 'react'

function Projects(){
    const [cards, setCards] = useState([])


    return(
        <>
            <header>
                <h1 className="section-title">Projects</h1>
            </header> 
        </>
    )
}

export default Projects;