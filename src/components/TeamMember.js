import React from 'react';
import mail from '../assets/img/Mail closed.svg'

function TeamMember(props) {

    return (
        <div key={props.id} className="team-member">
            <div className="member-avatar">
                <span className="member-img-over"/>
                <img src={props.img} alt="" className="member-img"/>
                <a href={`mailto:${props.mail}`} className="member-mail">
                    <img className='member-envelope' src={mail} alt=""/>
                </a>
            </div>
            <h3 className="member-name">{props.name}</h3>
            <p className="member-position">{props.position}</p>
            <p className="member-location">{props.location}</p>
        </div>
    )

}

export default TeamMember

