'use strict';

import React, {Component, useState} from 'react';
import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroDirectionalLight,
  ViroBox,
  ViroTrackingStateConstants,
  ViroARTrackingTargets,
  ViroMaterials,
  ViroText,
  ViroImage,
  ViroFlexView,
  ViroARImageMarker,
  ViroARObjectMarker,
  ViroAmbientLight,
  ViroARPlane,
  ViroAnimatedImage,
  ViroAnimations,
  ViroNode,
  Viro3DObject,
  ViroQuad,
} from '@viro-community/react-viro';

let popo = {
  qr: {
    source: require('./res/testQR.png'),
    orientation: 'Up',
    physicalWidth: 0.1, // real world width in meters
    data: 'Hello',
  },
  businessCard: {
    source: require('./res/business_card.png'),
    orientation: 'Up',
    physicalWidth: 0.1, // real world width in meters
    data: 'Bye',
  },
};

const CardFun = () => {
  const [ar, setAr] = useState({
    isTracking: false,
    initialized: false,
    runAnimation: false,
  });

  const getNoTrackingUI = () => {
    const {isTracking, initialized} = ar;
    return (
      <ViroText text={initialized ? 'Initializing AR...' : 'No Tracking'} />
    );
  };

  const getARScene = () => {
    return (
      <>
        {Object.keys(popo).map(key => {
          return (
            <ViroNode key={key}>
              <ViroARImageMarker
                target={key}
                onAnchorFound={() => {
                  console.log(key);

                  setAr(prevAr => [...prevAr, {runAnimation: true}]);
                }}>
                <ViroNode key="card">
                  <ViroText
                    textClipMode="None"
                    text={popo[key].data}
                    scale={[0.015, 0.015, 0.015]}
                    style={styles.textStyle}
                    rotation={[-90, 0, 0]}
                  />
                </ViroNode>
              </ViroARImageMarker>
            </ViroNode>
          );
        })}
      </>
    );
  };
};

const render = () => {
  return (
    <ViroARScene onTrackingUpdated={_onInitialized}>
      {ar.isTracking ? getNoTrackingUI() : getARScene()}
    </ViroARScene>
  );
};

const _onInitialized = (ar, reason) => {
  if (ar == ViroTrackingStateConstants.TRACKING_NORMAL) {
    setAr(prevAr => [...prevAr, {isTracking: true}]);
  } else {
    setAr(prevAr => [...prevAr, {isTracking: false}]);
  }
};

var styles = StyleSheet.create({
  textStyle: {
    flex: 0.5,
    fontFamily: 'Roboto',
    fontSize: 70,
    color: '#ffffff',
    textAlignVertical: 'top',
    textAlign: 'left',
    fontWeight: 'bold',
  },
});

ViroARTrackingTargets.createTargets(popo);

export default CardFun;
