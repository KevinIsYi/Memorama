import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { Clock } from '../Clock/Clock';
import { startClock, stopClock } from '../../actions/gridActions';
import './nameAndGridSize.css';

export const NameAndGridSize = () => {

    const dispatch = useDispatch();
    const { customGrid:{ enableCustom } } = useSelector(state => state);
    const [name, setName] = useState("");

    const [gridSize, setGridSize] = useState({
        rows: '',
        columns: ''
    });
    
    const { rows, columns } = gridSize;
    
    const handleInputText = ({target:{ value }}) => {
        setName(value);
    }
    const handleInputChange = ({ target:{ name, value } }) => {
        setGridSize({
            ...gridSize,
            [name]: Number(value)
        });
    }

    const isValidEntry = () => {
        if (name === '') {
            Swal.fire('Error', 'Enter your name', 'error');
        }
        else if (rows === 0 || columns === 0 || rows === '' || columns === '') {
            Swal.fire('Error', 'Both fields must be greater than zero', 'error');
        }
        else if ((rows * columns) % 2 !== 0) {
            Swal.fire('Error', `Total number of cards must be even. You selected: ${ rows * columns }`, 'error');
        }
        else if (rows * columns > 40) {
            Swal.fire('Error', `Total number of cards must be less than 40. You selected: ${ rows * columns }`, 'error');
        }
        else {
            dispatch(startClock({
                name,
                rows,
                columns
            }));

            setTimeout(() => {
                dispatch(stopClock());
            }, 10000);
        }
    }

    return (
        <div className="grid-options center-x">
            <div className="input-grid-options">
                <input
                    type="text"
                    placeholder="Your Name"
                    value={ name }
                    onChange={handleInputText}
                    className="roboto bold yellow-text no-border round-border first-input input-style text-center"
                    autoComplete="off"
                    disabled={ enableCustom }
                />
                <div className="grid-size-options">
                    <input
                        type="number"
                        placeholder="Rows"
                        name="rows"
                        value={rows}
                        min="0"
                        className="roboto bold yellow-text no-border round-border input-style size-option text-center"
                        onChange={handleInputChange}
                        disabled={ enableCustom }
                    />
                    <input
                        type="number"
                        placeholder="Columns"
                        name="columns"
                        value={columns}
                        min="0"
                        className="roboto bold yellow-text no-border round-border input-style size-option text-center"
                        onChange={handleInputChange}
                        disabled={ enableCustom }
                    />
                </div>
            </div>
            <button
                className={`grid-options-button lobster yellow-text bg-light-blue ${ enableCustom && 'button-disabled' }`}
                onClick={isValidEntry}
                disabled={ enableCustom }
            >
                Confirm
            </button>
            <Clock />
        </div>
    )
}
