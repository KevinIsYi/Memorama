import { useState } from 'react';
import Swal from 'sweetalert2';

import './nameAndGridSize.css';

export const NameAndGridSize = () => {

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
                />
                <div className="grid-size-options">
                    <input
                        type="number"
                        placeholder="Rows"
                        name="rows"
                        value={rows}
                        min="0"
                        className="roboto bold yellow-text no-border round-border input-style size-option text-center"
                        onChange={ handleInputChange }
                    />
                    <input
                        type="number"
                        placeholder="Columns"
                        name="columns"
                        value={columns}
                        min="0"
                        className="roboto bold yellow-text no-border round-border input-style size-option text-center"
                        onChange={ handleInputChange }
                    />
                </div>
            </div>
            <button
                className="grid-options-button lobster yellow-text bg-light-blue"
                onClick={ isValidEntry }
            >
                Confirm
            </button>
        </div>
    )
}
