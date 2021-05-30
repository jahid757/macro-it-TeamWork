import React from 'react';

const TeamDetail = ({teamMember}) => {
    return (
        <div className="col-md-4 col-sm-6">
            <div class="card">
                <img src={teamMember.img} class="card-img-top img-100" alt={teamMember.name}/>
                <div class="card-body">
                <h4 class="card-title">{teamMember.name}</h4>
                <p className="text-warning h5 ">{teamMember.position}</p>
                </div>
            </div>
        </div>
    );
};

export default TeamDetail;