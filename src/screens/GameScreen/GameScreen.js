
import { Card } from '../../components/Card/Card';
import { NameAndGridSize } from '../../components/NameAndGridSize/NameAndGridSize';
import './gameScreen.css';

export const GameScreen = () => {

    return (
        <div className="input-container">
            <NameAndGridSize />
            <div className="card-container center-x" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(10, 1fr)',
                gridRowGap: '25px',
                gridColumnGap: '50px',
                justifyContent: 'center',
            }}>

                <Card
                    image="barrel"
                />
            </div>
        </div>
    )
}
