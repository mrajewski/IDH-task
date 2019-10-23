import React from 'react';
import ReactDOM from 'react-dom';
import teamData from "./teamData";
import "./styles.scss";
import TeamMember from "./components/TeamMember";


function App() {

    return (
        <>
            <h1 className="page-title">Meet our team</h1>
            <section className="team-members-container">
            {teamData.map(el=>{
                return (
                    <TeamMember img={el.img}
                                name={el.name}
                                position={el.position}
                                location={el.location}
                                mail={el.mail}
                                id={el.id}
                                key={el.id}
                    />
                )
            })}
            </section>

        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
