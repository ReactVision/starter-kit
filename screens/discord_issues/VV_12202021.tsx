import {
  Viro3DObject,
  ViroARScene,
  ViroARSceneNavigator,
  ViroARTrackingTargets,
} from '@viro-community/react-viro';
import React from 'react';
import {StyleSheet} from 'react-native';
import {handleTrackingUpdated} from '../../utils/handleTrackingUpdated';

ViroARTrackingTargets.createTargets({
  targetOne: {
    source: require('../../assets/cokecan.arobject'),
    type: 'Object',
  },
});

const HelloWorldSceneAR = () => {
  const handleLoadStart = (...args: any) => {
    console.log('handleLoadStart', ...args);
  };

  const handleLoadEnd = (...args: any) => {
    console.log('handleLoadEnd', ...args);
  };

  const handleError = (...args: any) => {
    console.log('handleError', ...args);
  };

  return (
    <ViroARScene onTrackingUpdated={handleTrackingUpdated}>
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
