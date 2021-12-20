import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroARTrackingTargets,
  ViroConstants,
  Viro3DObject,
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

  const handleLoadStart = (...args) => {
    console.log('handleLoadStart', ...args);
  };

  const handleLoadEnd = (...args) => {
    console.log('handleLoadEnd', ...args);
  };

  const handleError = (...args) => {
    console.log('handleError', ...args);
  };

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <Viro3DObject
        source={{
          uri: 'https://storage.googleapis.com/room-bucket/object_car.obj',
        }}
        resources={[
          {uri: 'https://storage.googleapis.com/room-bucket/object_car.mtl'},
          {
            uri: 'https://storage.googleapis.com/room-bucket/object_car_main_Base_Color.png',
          },
          {
            uri: 'https://storage.googleapis.com/room-bucket/object_car_main_Metallic.png',
          },
          {
            uri: 'https://storage.googleapis.com/room-bucket/object_car_main_Roughness.png',
          },
        ]}
        position={[0, 0, -2]}
        scale={[0.5, 0.5, 0.5]}
        highAccuracyEvents={false}
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
        onError={handleError}
        shadowCastingBitMask={2}
        type="OBJ"
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
