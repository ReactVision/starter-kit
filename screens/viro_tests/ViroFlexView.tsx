import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroFlexView,
  ViroImage,
} from '@viro-community/react-viro';
import React from 'react';
import {StyleSheet} from 'react-native';
import {handleTrackingUpdated} from '../../utils/handleTrackingUpdated';

const HelloWorldSceneAR = () => {
  return (
    <ViroARScene onTrackingUpdated={handleTrackingUpdated}>
      <ViroFlexView
        style={{flexDirection: 'row'}}
        width={1.0}
        height={1.0}
        position={[0, 0, -2]}
        rotation={[0, 0, 0]}>
        <ViroImage
          source={require('../../assets/grid.jpeg')}
          style={{flex: 1, margin: 0.1}}
        />
        <ViroImage
          source={require('../../assets/grid.jpeg')}
          style={{flex: 1, margin: 0.1}}
        />
      </ViroFlexView>
    </ViroARScene>
  );
};

export default () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}
    />
  );
};

var styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
