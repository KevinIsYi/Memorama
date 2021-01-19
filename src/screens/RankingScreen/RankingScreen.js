import './rankingScreen.css';

export const RankingScreen = () => {

    const data = [
        {
            name: "Kevin",
            cards: 14,
            time: 15.45
        },
        {
            name: "Pedro",
            cards: 14,
            time: 3.78
        },
        {
            name: "Juan",
            cards: 14,
            time: 9.46
        },
        {
            name: "Pinche Gonzalo",
            cards: 14,
            time: 15.45
        },
        {
            name: "Manuelito",
            cards: 50,
            time: 17.36
        },
    ]

    return (
        <div className="ranking center-xy text-center round-border">
            <div className="table-headers gray-color bold">
                <h1>Place</h1>
                <h1>Name</h1>
                <h1># Cards</h1>
                <h1>Time</h1>
            </div>
            {
                data.map(({ name, cards, time }, index) => (
                    <div
                        className="table-data"
                        key={index}
                    >
                        <p key={ index }>{index + 1}.-</p>
                        <p>{name}</p>
                        <p>{cards}</p>
                        <p>{time}</p>
                    </div>
                ))
            }
        </div>
    )
}
