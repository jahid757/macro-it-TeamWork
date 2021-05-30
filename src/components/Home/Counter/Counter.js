import React from 'react';
import CounterDetail from './CounterDetail';

const count = [
    {
        title:'Projects Completed',
        number:100,
        icon:'fas fa-hand-holding-heart'
    },
    {
        title:'Remaining Project',
        number:465,
        icon:'fas fa-code'
    },
    {
        title:'Business Start-up',
        number:100,
        icon:'fas fa-briefcase',
    },
    {
        title:'Former Employees',
        number:100,
        icon:'fas fa-heart',
    }
]

const Counter = () => {
    return (
        <div className="py-5" style={{ backgroundColor:'rgb(231, 231, 231)'}}>
            <div className="container">
                <div className="row">
                    {
                        count.map(count => <CounterDetail countData={count}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Counter;