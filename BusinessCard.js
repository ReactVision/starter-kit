'use strict';

import React, { Component } from 'react';

import {StyleSheet, Linking} from 'react-native';
// TODO instead use get instead of local import. use only for testing
import people from './people';

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
  ViroQuad
} from '@viro-community/react-viro';

class BusinessCard extends Component {

  state = {
    isTracking: false,
    initialized: false,
    runAnimation: false,
    peopleObjTargets: {}
  }

  componentDidMount() {

    const peopleObjTargetsLocal = {}

    people.forEach(person => {
      peopleObjTargetsLocal[person.id] = {
        source: require('./pokemon/004.png'),
        orientation: 'Up',
        physicalWidth: 0.05, // width in meters,
        data : person,
        type : 'Image',
      }
    })

    this.setState({peopleObjTargets : peopleObjTargetsLocal})
    ViroARTrackingTargets.createTargets(peopleObjTargetsLocal);

  }

  getNoTrackingUI(){
    const { isTracking, initialized } = this.state;
    return (
      <ViroText text={
        initialized ? 'Initializing AR...'
          : "No Tracking"
      }/>
    )
  }

  getARScene() {
    return (
      <ViroNode>
        {Object.values(this.state.peopleObjTargets).map((person, index) => {
          return (
            <ViroARImageMarker target={person['data']['id']} key={index}
              onAnchorFound={
                () => this.setState({
                    runAnimation: true
                })}
            >
              <ViroNode key={person['data']['name']}>
                <ViroNode
                  opacity={0} position={[0, -0.02, 0]}
                  animation={{
                    name:'animateImage',
                    run: this.state.runAnimation
                    }}
                >
                  <ViroFlexView
                      rotation={[-90, 0, 0]}
                      height={0.03}
                      width={0.05}
                      style={styles.card}
                  >
                    <ViroFlexView
                      style={styles.cardWrapper}
                    >
                      <ViroImage
                        height={0.015}
                        width={0.015}
                        style={styles.image}
                        source={{uri : person['data']['image']}}
                      />
                      <ViroText
                        textClipMode="None"
                        text={person['data']['name']}
                        scale={[.015, .015, .015]}
                        style={styles.textStyle}
                      />
                    </ViroFlexView>
                    <ViroFlexView
                      onTouch={() => Linking.openURL(person['data']['link'])}
                      style={styles.cardWrapper}
                    >
                      <ViroText
                        width={0.01}
                        height={0.01}
                        textAlign="left"
                        textClipMode="None"
                        text={person['data']['company_name']}
                        scale={[.01, .01, .01]}
                        style={styles.textStyle}
                      />
                      <ViroImage
                        height={0.01}
                        width={0.01}
                        style={styles.image}
                        source={{uri : person['data']['company_logo']}}
                      />
                    </ViroFlexView>
                  </ViroFlexView>
                </ViroNode>
                <ViroFlexView >
                  <ViroText text={person['data']['mail']}
                    rotation={[-90, 0, 0]}
                    scale={[.01, .01, .01]}
                    style={styles.textStyle}
                  />
                  <ViroText text={person['data']['role']}
                    rotation={[-90, 0, 0]}
                    scale={[.01, .01, .01]}
                    style={styles.textStyle}
                  />
                </ViroFlexView>
              </ViroNode>
            </ViroARImageMarker>)
        })}
    </ViroNode>
    )
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        { this.state.isTracking ? this.getNoTrackingUI() : this.getARScene() }
      </ViroARScene>
    );
  }

  _onInitialized = (state, reason) => {
    if (state == ViroTrackingStateConstants.TRACKING_NORMAL) {
      isTracking: true
    } else  {
      isTracking: false
    }
  }
}

var styles = StyleSheet.create({
  textStyle: {
    flex: .5,
    fontFamily: 'Roboto',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'top',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'column',
    backgroundColor: '#4476BA',
  },
  cardWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0.001,
    flex: .5
  },
  subText: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: .5
  }
});

ViroMaterials.createMaterials({
  imagePlaceholder: {
    diffuseColor: "rgba(255,255,255,1)"
  },
  quad: {
    diffuseColor: "rgba(0,0,0,0.5)"
  }
});

ViroAnimations.registerAnimations({
  animateImage:{
    properties:{
      positionX: 0.05,
      opacity: 1.0
    },
      easing:"Bounce",
      duration: 500
  },
  animateViro: {
    properties: {
      positionZ: 0.02,
      opacity: 1.0,
    },
    easing:"Bounce",
    duration: 500
  }
});

export default BusinessCard;