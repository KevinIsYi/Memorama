import { Cards } from '../../components/Cards/Cards';
import { NameAndGridSize } from '../../components/NameAndGridSize/NameAndGridSize';
import './gameScreen.css';

export const GameScreen = () => {
  
    return (
        <div className="input-container">
            
            <NameAndGridSize />
            <Cards />
        </div>
    )
}
