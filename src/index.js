import React from 'react';
import ReactDOM from 'react-dom';
import teamData from "./teamData";
import "./styles.scss";

import TeamMember from "./components/TeamMember";

function App() {

    return (
        <>
            <TeamMember img={teamData[0].img}
                        name={teamData[0].name}
                        position={teamData[0].position}
                        location={teamData[0].location}
                        mail={teamData[0].mail}
                        id={teamData[0].id}
            />
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
