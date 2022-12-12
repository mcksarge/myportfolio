import {useState, useEffect} from 'react';
import AboutCard from './AboutCard';

function About() {
    const [cards, setCards] = useState([])

    console.log(cards)

    const allCards = cards.map((card, i) => {
        return (
            <>
                <AboutCard key={i} info={card} />
            </>
        )
    })

    return (
        <>
            <header>
                <h1 className="section-title">About Me</h1>
            </header>
            <div id="about-me-section">
                {allCards}
            </div>
        </>
        
    )
}

export default About;