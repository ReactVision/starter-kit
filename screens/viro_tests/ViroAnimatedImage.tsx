import {
  ViroAnimatedImage,
  ViroAnimations,
  ViroARScene,
  ViroARSceneNavigator,
} from '@viro-community/react-viro';
import React from 'react';
import {StyleSheet} from 'react-native';
import {handleTrackingUpdated} from '../../utils/handleTrackingUpdated';

const HelloWorldSceneAR = () => {
  return (
    <ViroARScene onTrackingUpdated={handleTrackingUpdated}>
      <ViroAnimatedImage
        height={1}
        width={1}
        onLoadStart={() => console.log('onLoadStart')}
        onLoadEnd={() => console.log('onLoadEnd')}
        position={[0, 0, -3]}
        animation={{name: 'loopRotate', run: true, loop: true}}
        source={require('../../assets/grid.jpeg')}
        placeholderSource={require('../../assets/grid.jpeg')}
        onAnimationStartViro={() => console.log('onAnimationStartViro')}
        onAnimationFinishViro={() => console.log('onAnimationFinishViro')}
      />
    </ViroARScene>
  );
};

ViroAnimations.registerAnimations({
  loopRotate: {properties: {rotateY: '+=45'}, duration: 1000},
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
