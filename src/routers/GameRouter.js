import { Redirect, Route, Switch } from "react-router-dom"
import { Header } from "../components/Header/Header";
import { GameScreen } from "../screens/GameScreen/GameScreen"
import { RankingScreen } from "../screens/RankingScreen/RankingScreen"

export const GameRouter = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/game/play">
                    <GameScreen />
                </Route>
                <Route path="/game/ranking">
                    <RankingScreen />
                </Route>

                <Redirect to="/game/screen" />
            </Switch>
        </>
    )
}
