import { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import Error from './ErrorStatistic/Error';

const StatisticsMenu: FC = () => {
  return (
    <Switch>
      <Route exact path="/statistics/error">
        <Error />
      </Route>
    </Switch>
  );
};

export default StatisticsMenu;
