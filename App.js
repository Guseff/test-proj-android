import Expo from 'expo';
import React from 'react';
import { Container, Content } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import AppFooterContainer from './containers/AppFooterContainer.js';
import AppHeaderContainer from './containers/AppHeaderContainer.js';
import MainFieldContainer from './containers/MainFieldContainer.js';
import rootReducer from './reducers';
import { TABS } from './constants';

const initialState = {
  mode: TABS.HOME
};
const store = createStore(rootReducer);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    });

    this.setState({ isReady: true });
  } 

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading/>
    }
    return (
      <Provider store={store}>
        <Container>
          <AppHeaderContainer />
          <Content style={styles.container}>
            <MainFieldContainer />
          </Content>
          <AppFooterContainer />
        </Container>
      </Provider>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingRight: 15,
    paddingLeft: 15,
  },
});
