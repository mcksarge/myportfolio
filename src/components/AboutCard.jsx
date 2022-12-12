import {useState} from 'react';

function AboutCard({info}) {

    const [image, setImage] = useState(info.image)
    const [text, setText] = useState(info.text)

    console.log(image)
 

    return (
        <div className='about-card'>
            <p className='section-title'>{text}</p>
        </div>
    )
}

export default AboutCard;