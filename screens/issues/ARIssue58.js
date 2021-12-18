import {
  ViroARObjectMarker,
  ViroARScene,
  ViroARSceneNavigator,
  ViroARTrackingTargets,
  ViroButton,
  ViroConstants,
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
  const onInitialized = (state, reason) => {
    console.log('onInitialized', state, reason);
    if (state === ViroConstants.TRACKING_NORMAL) {
      console.log('tracking initialized');
    } else if (state === ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  };

  const onButtonGaze = () => {
    console.log('button gazed');
  };

  const onButtonTap = () => {
    console.log('button tapped');
  };

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroButton
        source={require('../../assets/button/button.png')}
        gazeSource={require('../../assets/button/gazing.png')}
        tapSource={require('../../assets/button/tapped.png')}
        position={[0, 0, -5]}
        height={1}
        width={1}
        onTap={onButtonTap}
        onGaze={onButtonGaze}
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
