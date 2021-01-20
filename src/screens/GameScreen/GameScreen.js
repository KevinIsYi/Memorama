import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from '../../components/Card/Card';
import { NameAndGridSize } from '../../components/NameAndGridSize/NameAndGridSize';
import { fillBoard } from '../../actions/boardActions';
import './gameScreen.css';

export const GameScreen = () => {
  
    const dispatch = useDispatch();
    const { board:{ board }, customGrid:{ rows, columns } } = useSelector(state => state);

    useEffect(() => {
        dispatch(fillBoard(rows, columns));
    }, [rows, columns, dispatch]);

    return (
        <div className="input-container">
            
            <NameAndGridSize />
            <div className="card-container center-x" style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${ rows }, 1fr)`,
                gridRowGap: '25px',
                gridColumnGap: '50px',
                justifyContent: 'center',
            }}>

            {
                board.map((card, index) => (
                    <Card
                        key={index}
                        image={card}
                    />
                ))  
            }
            </div>
        </div>
    )
}
