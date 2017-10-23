import Expo from 'expo';
import React from 'react';
import { Container, Content } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import AppFooterContainer from './containers/AppFooterContainer.js';
import reducers from './reducers';
import { MODES } from './constants';

const initialState = {
  mode: MODES.ARTICLES
};
const store = createStore(reducers, initialState);

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
          <Content>
            <View style={styles.container}>
              <Text>Open up App.js to start working on your app!</Text>
              <Text>Changes you make will automatically reload.</Text>
              <Text>Shake your phone to open the developer menu.</Text>
              <Text>Shake your phone to open the developer menu.</Text>
            </View>
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
