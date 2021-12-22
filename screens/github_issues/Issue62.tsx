import {
  Viro360Image,
  ViroARTrackingTargets,
  ViroScene,
  ViroVRSceneNavigator,
} from '@viro-community/react-viro';
import React from 'react';

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
