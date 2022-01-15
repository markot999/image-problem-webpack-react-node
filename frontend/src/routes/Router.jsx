import { Route, Switch, useLocation } from 'react-router-dom'

import HomePage from '../pages/HomePage'

const Router = () => {
  const location = useLocation()

  return (
    <>
      <Switch location={location} key={location.key}>
        <Route path='/' exact component={HomePage} />
      </Switch>
    </>
  )
}

export default Router
