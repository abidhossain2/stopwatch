import React from 'react';
import { useState } from 'react';
import './Stopwatch.css'

const Stopwatch = () => {

    let [time, setTime] = useState({ms:0, s:0, m:0, h:0});
    const [timeUp, setTimeUp] = useState();
    const handleStart = () => {
        runTime();
        setTimeUp(setInterval(runTime, 10));
    }

    const handlePause = () => {
        clearInterval(timeUp)
    }

    const handleResume = () => {
        handleStart();
    }

    const handleReset = () => {
        clearInterval(timeUp)
        setTime({ms:0, s:0, m:0, h:0})
    }
    const runTime = () => {
        if(time.ms === 100){
            time.s++;
            time.ms = 0;
        }
        if(time.s === 60){
            time.m++;
            time.s = 0;
        }
        if(time.m === 60){
            time.h++;
            time.m = 0;
        }
        time.ms++;
        return setTime({ms:time.ms, s:time.s, m:time.m, h:time.h})
    }

    return (
        <div className='container'>
            <div className="stopwatch-container">
                <div className='times'>
                    <div className="time-box"><p>{(time.h >= 10) ? time.h : "0"+time.h}</p></div> :
                    <div className="time-box"><p>{(time.m >= 10) ? time.m : "0"+time.m }</p></div> :
                    <div className="time-box"><p>{(time.s >= 10) ? time.s : "0"+time.s }</p></div> :
                    <div className="time-box"><p>{(time.ms >= 10) ? time.ms : "0"+time.ms}</p></div>
                </div>
                <div className='btn-container'>
                    <button onClick={handleStart}>Start</button>
                    <button onClick={handlePause}>Pause</button>
                    <button onClick={handleResume}>Resume</button>
                    <button onClick={handleReset}>Reset</button>
                </div>
            </div>
        </div>
    );
};

export default Stopwatch;