import React from 'react';
import Slider from 'react-slick';
import './Home.css'; 


const Header = () => {
    return (
        <header className="header">
            <h2>Welcome to Vanhellie Candies!</h2>
            <p>Interesting treats are waiting for you</p>
        </header>
    );
};

function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className="home">
            <Header />
            <div className="carousel">
                <Slider {...settings}>
                    <div className="slide">
                        <video
                            src="https://videos.pexels.com/video-files/15915217/15915217-uhd_2560_1440_30fps.mp4"
                            alt="Candy Corner"
                            className="slide-video"
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            controls={false}
                        />
                        <div className="modal-overlay">
                            <h1>Candy Corner</h1>
                            <p>Delicious and sweet treats for everyone.</p>
                        </div>
                    </div>

                    <div className="slide">
                        <video
                            src="https://videos.pexels.com/video-files/3752507/3752507-hd_1920_1080_24fps.mp4"
                            alt="Spicy Corner"
                            className="slide-video"
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            controls={false}
                        />
                        <div className="modal-overlay">
                            <h1>Spicy Corner</h1>
                            <p>Spice up your life with our hot selections.</p>
                        </div>
                    </div>

                    <div className="slide">
                        <video
                            src="https://videos.pexels.com/video-files/8670754/8670754-hd_1920_1080_25fps.mp4"
                            alt="Mystery Boxes"
                            className="slide-video"
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            controls={false}
                        />
                        <div className="modal-overlay">
                            <h1>Mystery Boxes</h1>
                            <p>Exciting surprises waiting inside!</p>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Home;
