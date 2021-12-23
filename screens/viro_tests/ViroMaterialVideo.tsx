import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroMaterials,
  ViroMaterialVideo,
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
      <ViroMaterialVideo
        material={'test_material'}
        paused={false}
        onBufferStart={() => console.log('onBufferStart')}
        onBufferEnd={() => console.log('onBufferEnd')}
        loop={true}
        muted={false}
        volume={1.0}
        onFinish={() => console.log('onFinish')}
        onUpdateTime={() => console.log('onUpdateTime')}
      />
    </ViroARScene>
  );
};

ViroMaterials.createMaterials({
  test_material: {
    shininess: 2.0,
    lightingModel: 'Lambert',
    diffuseTexture: require('../../assets/360Test.mp4'),
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
