import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroARTrackingTargets,
  ViroButton,
} from '@viro-community/react-viro';
import {ViroClickState} from '@viro-community/react-viro/components/Types/ViroEvents';
import {Viro3DPoint} from '@viro-community/react-viro/components/Types/ViroUtils';
import React from 'react';
import {StyleSheet} from 'react-native';
import {handleTrackingUpdated} from '../../utils/handleTrackingUpdated';

ViroARTrackingTargets.createTargets({
  targetOne: {
    source: require('../../assets/cokecan.arobject'),
    type: 'Object',
  },
});

const HelloWorldSceneAR = () => {
  const onButtonClick = (position: Viro3DPoint, source: any) => {
    console.log('button clicked', position, source);
  };

  const onButtonClickState = (
    stateValue: ViroClickState,
    position: Viro3DPoint,
    source: any,
  ) => {
    console.log('button click state', stateValue, position, source);
  };

  return (
    <ViroARScene onTrackingUpdated={handleTrackingUpdated}>
      <ViroButton
        source={require('../../assets/button/button.png')}
        gazeSource={require('../../assets/button/gazing.png')}
        tapSource={require('../../assets/button/tapped.png')}
        clickSource={require('../../assets/button/click.png')}
        position={[0, 0, -5]}
        height={1}
        width={1}
        onClick={onButtonClick}
        onClickState={onButtonClickState}
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
