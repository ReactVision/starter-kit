import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  ViroScene,
  ViroText,
  ViroConstants,
  ViroVRSceneNavigator,
  ViroDirectionalLight,
} from '@viro-community/react-viro';

const HelloWorldSceneAR = () => {
  const [text, setText] = useState('Initializing AR...');

  function onInitialized(state, reason) {
    console.log('guncelleme', state, reason);
    if (state === ViroConstants.TRACKING_NORMAL) {
      setText('Hello World!');
    } else if (state === ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }

  return (
    <ViroScene onTrackingUpdated={onInitialized}>
      <ViroText
        text="Hello World!"
        width={2}
        height={2}
        position={[0, 0, -2]}
        style={styles.helloWorldTextStyle}
      />
    </ViroScene>
  );
};

export default () => {
  return (
    <ViroVRSceneNavigator
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
