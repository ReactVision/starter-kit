import {
  Viro3DObject,
  ViroAmbientLight,
  ViroARScene,
  ViroARSceneNavigator,
  ViroText,
} from '@viro-community/react-viro';
import React from 'react';
import {StyleSheet} from 'react-native';
import {handleTrackingUpdated} from '../../utils/handleTrackingUpdated';

const HelloWorldSceneAR = () => {
  return (
    <ViroARScene onTrackingUpdated={handleTrackingUpdated}>
      <ViroAmbientLight color="#ffffff" />
      <ViroText
        text={'Hello World!'}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -1]}
        style={styles.helloWorldTextStyle}
      />
      <Viro3DObject
        scale={[0.1, 0.1, 0.1]}
        position={[0, 0, -2]}
        source={require('../../assets/Issue41/LibertyStatue_2.obj')}
        resources={[
          // require('../../assets/Issue41/LibertyStatue.mtl'),
          require('../../assets/Issue41/Liberty-DecorazioniMarmo-2.bmp'),
          require('../../assets/Issue41/Liberty-GreenBronze-1.bmp'),
          require('../../assets/Issue41/Liberty-MattoniBasamento-1.bmp'),
          require('../../assets/Issue41/Liberty-Pavimentazione-1.bmp'),
          require('../../assets/Issue41/Liberty-PortaBronzo-1.bmp'),
        ]}
        type="OBJ"
      />
      <Viro3DObject
        scale={[0.1, 0.1, 0.1]}
        position={[0, 0, -2]}
        source={require('../../assets/Issue41/LibertyStatue.obj')}
        resources={[
          // require('../../assets/Issue41/LibertyStatue.mtl'),
          require('../../assets/Issue41/Liberty-DecorazioniMarmo-2.bmp'),
          require('../../assets/Issue41/Liberty-GreenBronze-1.bmp'),
          require('../../assets/Issue41/Liberty-MattoniBasamento-1.bmp'),
          require('../../assets/Issue41/Liberty-Pavimentazione-1.bmp'),
          require('../../assets/Issue41/Liberty-PortaBronzo-1.bmp'),
        ]}
        type="OBJ"
      />

      <ViroAmbientLight />
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
