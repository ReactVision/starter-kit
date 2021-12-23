import {
  ViroAmbientLight,
  ViroARScene,
  ViroARSceneNavigator,
  ViroMaterials,
  ViroPolygon,
} from '@viro-community/react-viro';
import React from 'react';
import {StyleSheet} from 'react-native';
import {handleTrackingUpdated} from '../../utils/handleTrackingUpdated';

/**
 * @todo: Don't think I'm using this right, but the documentation
 * isn't clear on why I'm not seeing anything.
 *
 * Doesn't crash, but doesn't render anything.
 */
const HelloWorldSceneAR = () => {
  return (
    <ViroARScene onTrackingUpdated={handleTrackingUpdated}>
      <ViroPolygon
        rotation={[0, 0, 0]}
        position={[0, -2, -2]}
        vertices={[
          [-1, 0],
          [0, 1],
          [1, 0],
        ]}
        holes={[
          [
            [-0.75, -0.75],
            [-0.75, -0.5],
            [-0.5, -0.5],
            [-0.5, -0.75],
          ],
          [
            [0.75, -0.75],
            [0.75, -0.5],
            [0.5, -0.5],
            [0.5, -0.75],
          ],
        ]}
        materials={'test'}
      />
      <ViroAmbientLight />
    </ViroARScene>
  );
};

ViroMaterials.createMaterials({
  test: {
    lightingModel: 'Blinn',
    diffuseTexture: require('../../assets/grid.jpeg'),
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
