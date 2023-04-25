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
  ViroButton,
} from '@viro-community/react-viro';

let popo = {
  // qr: {
  //   source: require('./res/testQR.png'),
  //   orientation: 'Up',
  //   physicalWidth: 0.1, // real world width in meters
  //   data: 'Hello',
  // },
  // businessCard: {
  //   source: require('./res/business_card.png'),
  //   orientation: 'Up',
  //   physicalWidth: 0.1, // real world width in meters
  //   data: 'Bye',
  // },
};

class Card extends Component {
  constructor() {
    super();
    this._targ = this._targ.bind(this);
  }
  componentDidMount() {
    // popo['qr'] = {
    //   source: require('./res/testQR.png'),
    //   orientation: 'Up',
    //   physicalWidth: 0.1, // real world width in meters
    //   data: 'Hello',
    // };
    // console.log('Done');
    popo = {
      bulbasur: {
        source: require('./pokemon/bulbasur.png'),
        orientation: 'Up',
        physicalWidth: 0.1, // real world width in meters
        data: 'bulbasur',
      },
      charmander: {
        source: require('./pokemon/charmander.png'),
        orientation: 'Up',
        physicalWidth: 0.1, // real world width in meters
        data: 'charmander',
      },
      pikachu: {
        source: require('./pokemon/pikachu.png'),
        orientation: 'Up',
        physicalWidth: 0.1, // real world width in meters
        data: 'pikachu',
      },
      squirtle: {
        source: require('./pokemon/squirtle.png'),
        orientation: 'Up',
        physicalWidth: 0.1, // real world width in meters
        data: 'squirtle',
      },
    };
    this.setState({
      ready: true,
    });
    console.log('Het');
    ViroARTrackingTargets.createTargets(popo);
  }
  state = {
    isTracking: false,
    initialized: false,
    runAnimation: false,
    ready: false,
  };

  getNoTrackingUI() {
    const {isTracking, initialized} = this.state;
    return (
      <ViroText text={initialized ? 'Initializing AR...' : 'No Tracking'} />
    );
  }

  _targ() {
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
    // this.setState({
    //   ready: true,
    // });
    // console.log('Het');
    // ViroARTrackingTargets.createTargets(popo);
  }

  getARScene() {
    return (
      <>
        {this.state.ready
          ? Object.keys(popo).map(key => {
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
            })
          : console.log('Nope')}
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
});

export default Card;
