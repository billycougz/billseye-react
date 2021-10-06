import React, { useState } from 'react';

enum TimerStates { NOT_STARTED, STARTED, STOPPED }

function Timer({ onChange }: any) {
    const [timerState, setTimerState] = useState(TimerStates.NOT_STARTED);
    const [duration, setDuration] = useState(0);
    const [timerInterval, setTimerInterval] = useState(null);

    const handleStart = () => {
        setTimerState(TimerStates.STARTED);
        setDuration(0);
        const startStamp = new Date();
        const interval = setInterval(() => {
            const currentStamp = new Date();
            const msDifference = (currentStamp.getTime() - startStamp.getTime()) / 1000;
            setDuration(msDifference);
            onChange(msDifference);
        }, 1000);
        // @ts-ignore
        setTimerInterval(interval);
    }

    const handleStop = () => {
        setTimerState(TimerStates.STOPPED);
        // @ts-ignore
        clearInterval(timerInterval);
        setTimerInterval(null);
    }

    const handleCancel = () => {
        setTimerState(TimerStates.NOT_STARTED);
        // @ts-ignore
        clearInterval(timerInterval);
        setTimerInterval(null);
        onChange(undefined);
    }

    const convertMsToMMSS = (ms: number) => {
        const minutes = Math.floor(ms / 60) > 9 ? Math.floor(ms / 60) : '0' + Math.floor(ms / 60);
        const seconds = Math.floor(ms % 60) > 9 ? Math.floor(ms % 60) : '0' + Math.floor(ms % 60);
        return `${minutes}:${seconds}`;
    }

    return (
        <div id="timer-container" className="col-xs-12">

            {timerState === TimerStates.NOT_STARTED && (
                <button id="timerButton" className="btn btn-warning w-100" type="button" onClick={handleStart}>
                    Start Timer
                </button>
            )}

            {timerState !== TimerStates.NOT_STARTED && (
                <div className={timerState === TimerStates.STOPPED ? 'input-group' : undefined}>

                    {timerState === TimerStates.STARTED && (
                        <button id="timerButton" className="btn btn-warning w-50" type="button" onClick={handleStop}>
                            Stop Timer
                        </button>
                    )}

                    {timerState === TimerStates.STOPPED && (
                        <span id="gameDuration" className="input-group-text">Duration </span>
                    )}

                    <span className={timerState === TimerStates.STOPPED ? 'form-control' : undefined}>
                        <span id="timer-duration">{convertMsToMMSS(duration)}</span>
                        <span onClick={handleCancel}>Cancel</span>
                    </span>

                </div>
            )}

        </div>
    );
}

export default Timer;
