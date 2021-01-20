import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { stopClock } from '../../actions/gridActions';
import './clock.css';

export const Clock = () => {

    const dispatch = useDispatch();
    const { customGrid: { isClockRunning } } = useSelector(state => state);
    const started = useRef(false);

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [date, setDate] = useState('00:00:00');

    
    useEffect(() => {

        if (!isClockRunning) {
            const pulishDate = (time, module) => (time < 10 ? `0${time % module}` : time % module);
            started.current = true;
            setTimeout(() => {
                setSeconds(seconds + 1);
                setMinutes(Math.floor(seconds / 60));
                setHours(Math.floor(minutes / 60));
                setDate(`${ pulishDate(hours, 24) }:${ pulishDate(minutes, 60) }:${ pulishDate(seconds, 60) }`);
            }, 1000);
        }
        else if (started.current) {
            dispatch(stopClock(date));
        }
        
    }, [hours, minutes, seconds, date, isClockRunning, dispatch]);


    return (
        <div className="timer blue-text lobster">
            <h1 className="time-title round-border">Time: </h1>
            <h1>{date}</h1>
        </div>
    )
}
