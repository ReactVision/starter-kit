import {
  ViroARImageMarker,
  ViroARScene,
  ViroARSceneNavigator,
  ViroARTrackingTargets,
  ViroBox,
} from '@viro-community/react-viro';
import React from 'react';
import {StyleSheet} from 'react-native';
import {handleTrackingUpdated} from '../../utils/handleTrackingUpdated';

const HelloWorldSceneAR = () => {
  return (
    <ViroARScene onTrackingUpdated={handleTrackingUpdated}>
      <ViroARImageMarker
        target={'targetOne'}
        onAnchorFound={() => console.log('onAnchorFound')}
        onAnchorUpdated={() => console.log('onAnchorUpdated')}
        onAnchorRemoved={() => console.log('onAnchorRemoved')}>
        <ViroBox position={[0, -3, 0]} scale={[0.5, 0.5, 0.5]} />
      </ViroARImageMarker>
    </ViroARScene>
  );
};

ViroARTrackingTargets.createTargets({
  targetOne: {
    source: require('../../assets/image_marker.png'),
    orientation: 'Up',
    physicalWidth: 0.1, // real world width in meters
  },
});

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
