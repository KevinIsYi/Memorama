import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { updateTime } from '../../actions/gridActions';
import './clock.css';

export const Clock = () => {

    const dispatch = useDispatch();
    const { isClockRunning } = useSelector(state => state.customGrid);

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [time, setTime] = useState('00:00:00');

    const wasRunning = useRef(false);

    useEffect(() => {
        if (isClockRunning) {
            const twoDigitNumber = (time, module) => (time % module < 10 ? `0${time % module}` : time % module);
            wasRunning.current = true;
            setTimeout(() => {
                setSeconds(seconds + 1);
                setMinutes(Math.floor(seconds / 60));
                setHours(Math.floor(minutes / 60));

                const newTime = `${ twoDigitNumber( hours, 24 ) }:${ twoDigitNumber( minutes, 60 ) }:${ twoDigitNumber( seconds, 60 ) }`;
                setTime(newTime);
            }, 1000);
            dispatch(updateTime(time));
        }
        else if (wasRunning.current) { // Initialized with 0 and 
            Swal.fire('Finish!', '', 'success');
        }
    }, [hours, minutes, seconds, time, isClockRunning, dispatch]);

    return (
        <div className="timer blue-text lobster">
            <h1 className="time-title round-border">Time: </h1>
            <h1>{time}</h1>
        </div>
    )
}
