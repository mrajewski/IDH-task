import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';
import teamData from '../teamData';
import NextArrow from '@material-ui/icons/ArrowForwardIos'
import PrevArrow from '@material-ui/icons/ArrowBackIos'
import CloseBtn from '@material-ui/icons/Close'


class Slider extends Component {
    state={
       loaded: false
    };
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
                <div className="slider-center">
                    <section className="slider">
                        <ReactSwipe
                            ref={reactSwipe => (this.reactSwipe = reactSwipe)}
                            className="mySwipe"
                            swipeOptions={swipeOptions}
                        >
                            {/*Generate slides*/}
                            {teamData.map(el => {
                                return (
                                    <div key={el.id} className="slide">
                                        <div className="slide-background">
                                            {this.state.loaded? <span className="slide-over"/>:null}
                                            <img onLoad={() => this.setState({loaded: true})} className="slide-img" src={el.slide} alt=""/>
                                        </div>
                                        {this.state.loaded?<div className="slide-content-border"/>:null}
                                        {this.state.loaded?<div className="slide-text">
                                            <p className="slide-member-position">{el.position}</p>
                                            <p className="slide-member-name">{el.name}</p>
                                        </div>:null}
                                    </div>
                                )
                            })}
                        </ReactSwipe>
                        {this.state.loaded?<button className='prev-btn' type="button" onClick={this.prev}>
                            <PrevArrow className="prev-arrow"/>
                        </button>:null}
                        {this.state.loaded?<button className='next-btn' type="button" onClick={this.next}>
                            <NextArrow className="next-arrow"/>
                        </button>:null}
                        {this.state.loaded?<button className='close-btn' type="button" onClick={this.props.close}>
                            <CloseBtn className="close"/>
                        </button>:null}
                    </section>
                </div>
            </section>
        );
    }
}
export default Slider
