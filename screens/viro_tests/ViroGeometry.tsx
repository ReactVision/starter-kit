import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroGeometry,
} from '@viro-community/react-viro';
import React from 'react';
import {StyleSheet} from 'react-native';
import {handleTrackingUpdated} from '../../utils/handleTrackingUpdated';

const HelloWorldSceneAR = () => {
  return (
    <ViroARScene onTrackingUpdated={handleTrackingUpdated}>
      {/* All this... for a triangle? :) */}
      <ViroGeometry
        position={[0, 0, -2]}
        scale={[0.1, 0.1, 0.1]}
        vertices={[
          [1, 0, 0],
          [0, 1, 0],
          [-1, 0, 0],
        ]}
        normals={[
          [0, 0, 1],
          [0, 0, 1],
          [0, 0, 1],
        ]}
        texcoords={[
          [1, 0],
          [0, 1],
          [-1, 0],
        ]}
        triangleIndices={[[0, 1, 2]]}
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
