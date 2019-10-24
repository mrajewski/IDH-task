import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';
import teamData from "../teamData";
import NextArrow from '@material-ui/icons/ArrowForwardIos'
import PrevArrow from '@material-ui/icons/ArrowBackIos'
import CloseBtn from '@material-ui/icons/Close'

// generate slides
const slideArr = teamData.map(el => {
    return (
        <div key={el.id} className="slide">
            <div className="slide-background">
                <span className="slide-over"/>
                <img className="slide-img" src={el.slide} alt=""/>
            </div>
            <div className="slide-content-border">
            </div>
            <div className="slide-text">
                <p className="slide-member-position">{el.position}</p>
                <p className="slide-member-name">{el.name}</p>
            </div>
        </div>
    )
});

class Slider extends Component {
    next = () => {
        this.reactSwipe.next();
    };

    prev = () => {
        this.reactSwipe.prev();
    };

    render() {
        // Swipe.js options
        const swipeOptions = {
            startSlide: this.props.slide,
            speed: 1000,
            disableScroll: true,
            continuous: true
        };
        return (
            <section className="slider-container">
                <section className="slider">
                    <ReactSwipe
                        ref={reactSwipe => (this.reactSwipe = reactSwipe)}
                        className="mySwipe"
                        swipeOptions={swipeOptions}
                    >
                        {slideArr}
                    </ReactSwipe>
                    <button className='prev-btn' type="button" onClick={this.prev}>
                        <PrevArrow className="prev-arrow"/>
                    </button>
                    <button className='next-btn' type="button" onClick={this.next}>
                        <NextArrow className="next-arrow"/>
                    </button>
                    <button className='close-btn' type="button" onClick={this.props.close}>
                        <CloseBtn className="close"/>
                    </button>
                </section>
            </section>
        );
    }
}

export default Slider
