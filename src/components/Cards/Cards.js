import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fillBoard } from "../../actions/boardActions";
import { Card } from "../Card/Card";

export const Cards = () => {

    const dispatch = useDispatch();
    const { board: { board }, customGrid: { rows, columns } } = useSelector(state => state);

    useEffect(() => {
        dispatch(fillBoard(rows, columns));
    }, [rows, columns, dispatch]);
    
    return (
        <div className="card-container center-x" style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${ rows }, 1fr)`,
            gridRowGap: '25px',
            gridColumnGap: '25px',
            justifyContent: 'center',
        }}>
            {
                board.map(({ id, card, isCorrect, isPicked }, index) => (
                    <Card
                        id={id}
                        key={index}
                        image={card}
                        isCorrect={isCorrect}
                        isPicked={isPicked}
                    />
                ))
            }

        </div>
    )
}
