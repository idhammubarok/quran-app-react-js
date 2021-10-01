import React, { lazy, Suspense } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {Spinner} from 'react-bootstrap'
const Home = lazy(()=> import('../src/pages/Home'))
const Surah = lazy(()=> import('../src/pages/Surah'))

const AppRoute =()=>{
    return(
        <Suspense fallback={<Spinner animation="grow" />}>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                <Route exact path="/home" component={Home} />
                <Route exact path="/surah/:id" component={Surah} />
            </Switch>
        </Suspense>
        
    )
}

export default AppRoute;