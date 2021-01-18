import {
    Route,
    BrowserRouter as Router,
    Switch,
    Redirect,
} from 'react-router-dom';
import { LandingScreen } from '../screens/LandingScreen/LandingScreen';
import { GameRouter } from './GameRouter';

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <LandingScreen />
                </Route>
                <Route path="/game">
                    <GameRouter />
                </Route>

                <Redirect to="/" />
            </Switch>   
        </Router>
    )
}
