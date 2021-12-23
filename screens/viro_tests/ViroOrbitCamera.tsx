import {
  Viro3DObject,
  ViroARScene,
  ViroARSceneNavigator,
  ViroMaterials,
  ViroOrbitCamera,
} from '@viro-community/react-viro';
import React from 'react';
import {StyleSheet} from 'react-native';
import {handleTrackingUpdated} from '../../utils/handleTrackingUpdated';

/**
 * @todo not really sure what this does, but it doesn't crash.
 * The image might need to be swapped out
 *
 * Could also require VR instead of AR
 */
const HelloWorldSceneAR = () => {
  return (
    <ViroARScene onTrackingUpdated={handleTrackingUpdated}>
      <ViroOrbitCamera
        position={[0, 0, 0]}
        focalPoint={[0, 0, -10]}
        active={true}
      />
      <Viro3DObject
        source={require('../../assets/airboat.obj')}
        position={[0, -0, -3]}
        scale={[0.1, 0.1, 0.1]}
        rotation={[45, 0, 0]}
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

ViroMaterials.createMaterials({
  heart: {
    lightingModel: 'Blinn',
    diffuseTexture: require('../../assets/grid.jpeg'),
  },
});

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
