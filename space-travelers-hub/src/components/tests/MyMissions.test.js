import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import MyMissions from '../myProfile/MyMissions';
import store from '../../redux/store';

it('matches snapshot', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MyMissions />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
