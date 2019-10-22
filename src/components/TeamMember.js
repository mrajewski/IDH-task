import React from 'react';

function TeamMember(props) {

    return (
        <div className="team-member">
            <div className="member-mail">
            </div>
            <img src={props.img} alt="" className="member-img"/>
            <h3 className="member-name">{props.name}</h3>
            <p className="member-position">{props.position}</p>
            <p className="member-location">{props.location}</p>

        </div>
    )

}

export default TeamMember

