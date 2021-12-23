import {
  Viro3DObject,
  ViroAmbientLight,
  ViroARScene,
  ViroARSceneNavigator,
  ViroPortal,
  ViroPortalScene,
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
      <ViroPortalScene position={[0, 0, -2]}>
        <ViroPortal position={[0, 0, -2]} scale={[0.5, 0.5, 0.5]}>
          <Viro3DObject
            source={require('../../assets/portal/portal_window_frame.vrx')}
            resources={[
              require('../../assets/portal/portal_window_frame_diffuse.png'),
              require('../../assets/portal/portal_window_frame_normal.png'),
              require('../../assets/portal/portal_window_frame_specular.png'),
            ]}
            type="VRX"
          />
        </ViroPortal>
      </ViroPortalScene>
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
