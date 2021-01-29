import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
import Img1 from '../assets/images/primarykids.jpg'
import Img2 from '../assets/images/maggy&child.png'
import Img3 from '../assets/images/schoolgirl.jpg'
import Img4 from '../assets/images/behindbars.png'
import Img5 from '../assets/images/classroom.jpg'

function App() {
    return (
        <div className="carousel" >
            <Carousel>

                <Carousel.Item>
                    <img className="carouselimg" src={Img1} alt="img1"/>  
                </Carousel.Item>

                <Carousel.Item>
                    <img className="carouselimg" src={Img2} alt="img2"/>  
                </Carousel.Item>

                <Carousel.Item>
                    <img className="carouselimg" src={Img3} alt="img3"/>  
                </Carousel.Item>

                <Carousel.Item>
                    <img className="carouselimg" src={Img4} alt="img4"/>  
                </Carousel.Item>

                <Carousel.Item>
                    <img className="carouselimg" src={Img5} alt="img5"/>  
                </Carousel.Item>


            </Carousel>
        </div>
    );
}

export default App;
