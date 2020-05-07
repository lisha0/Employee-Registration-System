import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import UserList from './UserList';
import UserCreate from './UserCreate';
import UserEdit from './UserEdit';

const App = () => {
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact={true} component={UserList}></Route>
                    <Route path='/users/new' exact={true} component={UserCreate}></Route>
                    <Route path='/users/edit/:id' exact component={UserEdit}></Route>    
                </Switch>
               

            </BrowserRouter>
        </div>
    )
}

export default App;