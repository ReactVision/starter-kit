'use strict';

import React, {Component} from 'react';

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
class BusinessCard extends Component {
  componentDidMount() {
    // console.log('Hjskjkjsjkjs');
    // popo = {
    //   qr: {
    //     source: require('./res/testQR.png'),
    //     orientation: 'Up',
    //     physicalWidth: 0.1, // real world width in meters
    //     data: 'Hello',
    //   },
    //   businessCard: {
    //     source: require('./res/business_card.png'),
    //     orientation: 'Up',
    //     physicalWidth: 0.1, // real world width in meters
    //     data: 'Bye',
    //   },
    // };
    // console.log(popo);
  }
  state = {
    isTracking: false,
    initialized: false,
    runAnimation: false,
  };

  getNoTrackingUI() {
    const {isTracking, initialized} = this.state;
    return (
      <ViroText text={initialized ? 'Initializing AR...' : 'No Tracking'} />
    );
  }

  getARScene() {
    return (
      <>
        {Object.keys(popo).map(key => {
          return (
            <ViroNode key={key}>
              <ViroARImageMarker
                target={key}
                onAnchorFound={() => {
                  console.log(key);
                  this.setState({
                    runAnimation: true,
                  });
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
        {/* <ViroNode>
          <ViroARImageMarker
            target={'qr'}
            onAnchorFound={() =>
              this.setState({
                runAnimation: true,
              })
            }>
            <ViroNode key="card">
              <ViroText
                textClipMode="None"
                text={'hey'}
                scale={[0.015, 0.015, 0.015]}
                style={styles.textStyle}
                rotation={[-90, 0, 0]}
              />
            </ViroNode>
          </ViroARImageMarker>
        </ViroNode> */}
      </>
    );
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        {this.state.isTracking ? this.getNoTrackingUI() : this.getARScene()}
      </ViroARScene>
    );
  }

  _onInitialized = (state, reason) => {
    if (state == ViroTrackingStateConstants.TRACKING_NORMAL) {
      isTracking: true;
    } else {
      isTracking: false;
    }
  };
}

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
  card: {
    flexDirection: 'column',
  },
  cardWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0.001,
    flex: 0.5,
  },
  subText: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 0.5,
  },
});

ViroARTrackingTargets.createTargets(
  //   {
  //   qr: {
  //     source: require('./res/testQR.png'),
  //     orientation: 'Up',
  //     physicalWidth: 0.1, // real world width in meters
  //     data: 'Hello',
  //   },
  //   a: this.state.codes[0].target,

  //   // businessCard: {
  //   //   source: require('./res/business_card.png'),
  //   //   orientation: 'Up',
  //   //   physicalWidth: 0.1, // real world width in meters
  //   //   data: 'Bye',
  //   // },
  // }
  popo,
);

ViroMaterials.createMaterials({
  imagePlaceholder: {
    diffuseColor: 'rgba(255,255,255,1)',
  },
  quad: {
    diffuseColor: 'rgba(0,0,0,0.5)',
  },
});

ViroAnimations.registerAnimations({
  animateImage: {
    properties: {
      positionX: 0.05,
      opacity: 1.0,
    },
    easing: 'Bounce',
    duration: 500,
  },
  animateViro: {
    properties: {
      positionZ: 0.02,
      opacity: 1.0,
    },
    easing: 'Bounce',
    duration: 500,
  },
});

export default BusinessCard;
