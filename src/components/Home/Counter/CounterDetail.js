import React from 'react';
import CountUp from 'react-countup';

const CounterDetail = ({countData}) => {
    return (
        <div className="col-md-3 col-sm-6 text-center">
            <div className="d-flex align-items-center">
                <div className="w-25 border-2 me-2 border-end icon-wrap">
                    <i className={countData.icon}></i>
                </div>
                <div>
                    <CountUp className="display-5 fw-bold" end={countData.number} duration={5}/>
                    <p>{countData.title}</p>
                </div>
            </div>
        </div>
    );
};

export default CounterDetail;