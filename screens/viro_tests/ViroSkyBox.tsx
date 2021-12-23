import {
  ViroAmbientLight,
  ViroARScene,
  ViroARSceneNavigator,
  ViroSkyBox,
} from '@viro-community/react-viro';
import React from 'react';
import {StyleSheet} from 'react-native';
import {handleTrackingUpdated} from '../../utils/handleTrackingUpdated';

const HelloWorldSceneAR = () => {
  return (
    <ViroARScene onTrackingUpdated={handleTrackingUpdated}>
      <ViroSkyBox
        source={{
          nx: require('../../assets/skybox/nx.png'),
          px: require('../../assets/skybox/px.png'),
          ny: require('../../assets/skybox/ny.png'),
          py: require('../../assets/skybox/py.png'),
          nz: require('../../assets/skybox/nz.png'),
          pz: require('../../assets/skybox/pz.png'),
        }}
      />
      <ViroAmbientLight color={'#fff'} />
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
