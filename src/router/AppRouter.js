import {
    Route,
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';
import { LandingScreen } from '../screens/LandingScreen/LandingScreen';

export const AppRouter = () => {
    return (
        <Router>
            <>
                <Switch>
                    <Route to="/" component={LandingScreen} />
                    
                    <Redirect to="/" />
                </Switch> 
            </>
        </Router>
    )
}
