import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroARTrackingTargets,
  ViroConstants,
  ViroImage,
} from '@viro-community/react-viro';
import React from 'react';
import {StyleSheet} from 'react-native';

ViroARTrackingTargets.createTargets({
  targetOne: {
    source: require('../../assets/cokecan.arobject'),
    type: 'Object',
  },
});

const HelloWorldSceneAR = () => {
  function onInitialized(state, reason) {
    console.log('onInitialized', state, reason);
    if (state === ViroConstants.TRACKING_NORMAL) {
      console.log('tracking initialized');
    } else if (state === ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroImage
        position={[0, 0, -2]}
        height={1}
        width={1}
        source={require('../../assets/grid.jpeg')}
      />
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
