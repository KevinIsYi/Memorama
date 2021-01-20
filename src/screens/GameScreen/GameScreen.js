
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fillBoard } from '../../actions/boardActions';
import { Card } from '../../components/Card/Card';
import { NameAndGridSize } from '../../components/NameAndGridSize/NameAndGridSize';
import './gameScreen.css';

export const GameScreen = () => {
  
    const dispatch = useDispatch();
    const { board:{ board } } = useSelector(state => state);
    
    useEffect(() => {
        dispatch(fillBoard(6, 6));
    }, [dispatch]);

    return (
        <div className="input-container">
            
            <NameAndGridSize />
            <div className="card-container center-x" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(6, 1fr)',
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
