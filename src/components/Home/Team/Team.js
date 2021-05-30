import React from 'react';
import TeamDetail from './TeamDetail';

import jahidImg from '../../../images/admin2.20a81b41.png';
import asrafulImg from '../../../images/asraful.png';
import sakibImg from '../../../images/sakib.jpg';

const teamData = [
    {
        id:1,
        name:'Md Jahid Hasan',
        position:'Web Developer',
        img:jahidImg
    },
    {
        id:2,
        name:'Ashraful Hasan Zayed',
        position:'Web Developer',
        img:asrafulImg
    },
    {
        id:3,
        name:'Sakib Hasan',
        position:'Project Manager',
        img:sakibImg
    }
]
const Team = () => {
    return (
        <div className="py-5 text-center" style={{ backgroundColor:'rgb(231, 231, 231)'}}>
            <p className="mb-0 h6">LEADERSHIP <span className="text-warning">TEAM</span></p>
            <h1 className="fw-bold my-4">Meet The Expert Team</h1>
            <div className="container">
                <div className="row mt-3">
                    {
                        teamData.map(teamMember => <TeamDetail key={teamMember.id} teamMember={teamMember}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Team;