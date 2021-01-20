import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTime } from '../../actions/gridActions';
import './clock.css';

export const Clock = () => {

    const dispatch = useDispatch();
    const { customGrid: { isClockRunning } } = useSelector(state => state);

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [time, setTime] = useState('00:00:00');

    useEffect(() => {
        if (isClockRunning) {
            const twoDigitNumber = (time, module) => (time % module < 10 ? `0${time % module}` : time % module);
            setTimeout(() => {
                setSeconds(seconds + 1);
                setMinutes(Math.floor(seconds / 60));
                setHours(Math.floor(minutes / 60));

                const newTime = `${ twoDigitNumber( hours, 24 ) }:${ twoDigitNumber( minutes, 60 ) }:${ twoDigitNumber( seconds, 60 ) }`;
                setTime(newTime);
                dispatch(updateTime(newTime));
            }, 1000);
        }
    }, [hours, minutes, seconds, time, isClockRunning, dispatch]);

    return (
        <div className="timer blue-text lobster">
            <h1 className="time-title round-border">Time: </h1>
            <h1>{time}</h1>
        </div>
    )
}
