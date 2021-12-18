import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroMaterials,
  ViroAmbientLight,
  ViroNode,
  ViroText,
  Viro3DObject,
  ViroConstants,
} from '@viro-community/react-viro';
import React from 'react';
import {StyleSheet} from 'react-native';

ViroMaterials.createMaterials({
  test: {
    lightingModel: 'Blinn',
    diffuseColor: 'yellow',
    shininess: 0.5,
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

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroAmbientLight color="#ffffff" />
      <ViroNode scale={[0.7, 0.7, 0.7]} position={[0, 0, -1]}>
        <ViroText
          text={'Hello World!'}
          scale={[0.7, 0.7, 0.7]}
          position={[0, 1, -1]}
          style={styles.helloWorldTextStyle}
        />
        <Viro3DObject
          source={require('../../assets/airboat.obj')}
          materials={['test']}
          scale={[0.1, 0.1, 0.1]}
          position={[0, 0, -2]}
          type="OBJ"
          onLoadStart={() => {
            console.log('LoadStart');
          }}
          onLoadEnd={() => {
            console.log('LoadEnd');
          }}
        />
      </ViroNode>
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
