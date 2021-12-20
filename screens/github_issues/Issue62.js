import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroARTrackingTargets,
  ViroButton,
  ViroConstants,
  ViroScene,
  Viro360Image,
  ViroVRSceneNavigator,
} from '@viro-community/react-viro';
import React from 'react';
import {StyleSheet} from 'react-native';

ViroARTrackingTargets.createTargets({
  targetOne: {
    source: require('../../assets/cokecan.arobject'),
    type: 'Object',
  },
});

const HelloWorldScene = () => {
  return (
    <ViroScene>
      <Viro360Image source={require('../../assets/grid.jpeg')} />
    </ViroScene>
  );
};

export default () => {
  return (
    <ViroVRSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldScene,
      }}
    />
  );
};
