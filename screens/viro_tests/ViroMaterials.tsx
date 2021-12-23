import {
  Viro3DObject,
  ViroARScene,
  ViroARSceneNavigator,
  ViroMaterials,
} from '@viro-community/react-viro';
import React from 'react';
import {StyleSheet} from 'react-native';
import {handleTrackingUpdated} from '../../utils/handleTrackingUpdated';

const HelloWorldSceneAR = () => {
  return (
    <ViroARScene onTrackingUpdated={handleTrackingUpdated}>
      <Viro3DObject
        type="OBJ"
        source={require('../../assets/LibertyStatue/LibertyStatue_2.obj')}
        resources={[
          require('../../assets/LibertyStatue/LibertyStatue.mtl'),
          require('../../assets/LibertyStatue/Liberty-DecorazioniMarmo-2.bmp'),
          require('../../assets/LibertyStatue/Liberty-GreenBronze-1.bmp'),
          require('../../assets/LibertyStatue/Liberty-MattoniBasamento-1.bmp'),
          require('../../assets/LibertyStatue/Liberty-Pavimentazione-1.bmp'),
          require('../../assets/LibertyStatue/Liberty-PortaBronzo-1.bmp'),
        ]}
        position={[0, 0, -0.4]}
        scale={[0.1, 0.1, 0.1]}
        materials={['heart']}
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
