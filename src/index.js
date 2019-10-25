import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import teamData from "./teamData";
import "./styles.scss";
import TeamMember from "./components/TeamMember";
import Slider from "./components/Slider";

class App extends Component {
    state={
        startSlide: 0,
        isVisible:false
    };
    handleOnSwipe = slide => {
        this.setState({
            startSlide: slide,
            isVisible:true
        })
    };
    handleOnClose=(e)=>{
        e.stopPropagation();
        this.setState({
            isVisible:false
        })
    };
    render() {
        return (
            <>
               <h1 className="page-title">Meet our team</h1>
                <section className="team-members-container">
                    {teamData.map(el => {
                        return (
                            <TeamMember img={el.img}
                                        name={el.name}
                                        position={el.position}
                                        location={el.location}
                                        mail={el.mail}
                                        id={el.id}
                                        key={el.id}
                                        swipe={this.handleOnSwipe}
                                        visible={this.state.isVisible}
                            />
                        )
                    })}
                </section>
                {this.state.isVisible?<section className="slider-container"><Slider close={this.handleOnClose}
                                                                                    slide={this.state.startSlide}/></section>:null}
            </>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
