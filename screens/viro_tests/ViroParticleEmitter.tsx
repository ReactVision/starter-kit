import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroMaterials,
  ViroParticleEmitter,
} from '@viro-community/react-viro';
import React from 'react';
import {StyleSheet} from 'react-native';
import {handleTrackingUpdated} from '../../utils/handleTrackingUpdated';

const HelloWorldSceneAR = () => {
  return (
    <ViroARScene onTrackingUpdated={handleTrackingUpdated}>
      <ViroParticleEmitter
        position={[0, 4.5, 0]}
        duration={2000}
        visible={true}
        delay={0}
        run={true}
        loop={true}
        fixedToEmitter={true}
        image={{
          source: require('../../assets/particle_snow.png'),
          height: 0.1,
          width: 0.1,
          bloomThreshold: 1.0,
        }}
        spawnBehavior={{
          particleLifetime: [4000, 4000],
          emissionRatePerSecond: [150, 200],
          spawnVolume: {
            shape: 'box',
            params: [20, 1, 20],
            spawnOnSurface: false,
          },
          maxParticles: 800,
        }}
        particleAppearance={{
          opacity: {
            initialRange: [0, 0],
            factor: 'time',
            interpolation: [
              {endValue: 0.5, interval: [0, 500]},
              {endValue: 1.0, interval: [4000, 5000]},
            ],
          },

          rotation: {
            initialRange: [0, 360],
            factor: 'time',
            interpolation: [{endValue: 1080, interval: [0, 5000]}],
          },

          scale: {
            initialRange: [
              [5, 5, 5],
              [10, 10, 10],
            ],
            factor: 'time',
            interpolation: [
              {endValue: [3, 3, 3], interval: [0, 4000]},
              {endValue: [0, 0, 0], interval: [4000, 5000]},
            ],
          },
        }}
        particlePhysics={{
          velocity: {
            initialRange: [
              [-2, -0.5, 0],
              [2, -3.5, 0],
            ],
          },
        }}
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
