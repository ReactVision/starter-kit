'use strict';
import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { ViroARSceneNavigator } from '@viro-community/react-viro';
import SceneAR from './SceneAR';

class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }} >
        <ViroARSceneNavigator
          autofocus={true}
          initialScene={{
            scene: SceneAR,
          }}
          style={{ flex: 1 }}
        />
      </SafeAreaView>
    );
  }
}

export default App;