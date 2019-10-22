import React from 'react';

function TeamMember(props) {

    return (
        <div key={props.id} className="team-member">
            <div className="member-mail">
            </div>
            <div className="member-avatar">
                <span className="member-img-over"/>
                <img src={props.img} alt="" className="member-img"/>
            </div>
            <h3 className="member-name">{props.name}</h3>
            <p className="member-position">{props.position}</p>
            <p className="member-location">{props.location}</p>
            <a href={props.mail} className="member-mail">


            </a>

        </div>
    )

}

export default TeamMember

