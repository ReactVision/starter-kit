'use strict';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroConstants,
  Viro3DObject,
  ViroAmbientLight,
  ViroNode,
  ViroDirectionalLight,
  ViroImage,
  ViroQuad,
  ViroBox,
} from '@viro-community/react-viro';

class SceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: "Initializing AR...",
      modelWorldRotation: [0, 0, 0],
      displayHitReticle: false,
      foundPlane: false,
      planeReticleLocation: [0, 0, 0],
      shouldBillboard: true,
      isReady: false,
      lastFoundPlaneLocation: [0, 0, 0],
    };

    // bind 'this' to functions
    this._onTrackingUpdated = this._onTrackingUpdated.bind(this);
    this._getScanningQuads = this._getScanningQuads.bind(this);
    this._onClickScanningQuads = this._onClickScanningQuads.bind(this);
    this._setInitialDirection = this._setInitialDirection.bind(this);
    this._getModel = this._getModel.bind(this);
    this._onCameraARHitTest = this._onCameraARHitTest.bind(this);
  }

  render() {

    return (
      <ViroARScene
        onCameraARHitTest={this._onCameraARHitTest}
        onTrackingUpdated={this._onTrackingUpdated}
      >
        <ViroAmbientLight
          color={"#ffffff"}
          intensity={200}
        />
        <ViroDirectionalLight
          color="#ffffff"
          direction={[0, -1, -.5]}
          position={[0, 9, 0]}
          castsShadow={true}
          shadowOpacity={.9}
        />
        <ViroText text={this.state.text} scale={[.5, .5, .5]} position={[0, 0, -1]} style={styles.textStyle} />
        {this._getScanningQuads()}
        {this._getModel()}
      </ViroARScene>
    );
  }

  _setInitialDirection() {
    if (this.node) {
      this.node.getTransformAsync().then((retDict) => {
        let rotation = retDict.rotation;
        let absX = Math.abs(rotation[0]);
        let absZ = Math.abs(rotation[2]);

        let yRotation = rotation[1];

        // if the X and Z aren't 0, then adjust the y rotation (the quaternion flipped the X or Z).
        if (absX != 0 && absZ != 0) {
          yRotation = 180 - (yRotation);
        }

        yRotation = yRotation;

        this.setState({
          modelWorldRotation: [0, yRotation, 0],
          shouldBillboard: false,
        });
      });
    }
  }

  _getScanningQuads() {
    if (this.state.isReady) {
      return;
    }

    return (
      <ViroNode
        transformBehaviors={"billboardY"}
        position={this.state.planeReticleLocation}
        scale={[.5, .5, .5]}
        onClick={this._onClickScanningQuads}
      >
        <ViroText
          rotation={[0, 0, 0]}
          visible={this.state.foundPlane}
          textAlign="center"
          text="Click to Place"
        />
        <ViroImage rotation={[-90, 0, 0]} visible={this.state.foundPlane} source={require('./res/tracking_diffuse_2.png')} />
        <ViroImage rotation={[-90, 0, 0]} visible={!this.state.foundPlane} source={require('./res/tracking_diffuse.png')} />
      </ViroNode>
    )
  }

  _onClickScanningQuads() {
    if (this.state.foundPlane) {
      this.setState({
        isReady: true
      })
      this._setInitialDirection();
    }
  }

  _getModel() {

    let position = this.state.isReady ? this.state.lastFoundPlaneLocation : [0, 20, 0];

    var transformBehaviors = this.state.shouldBillboard ? "billboardY" : [];

    return (
      <ViroNode position={position} rotation={this.state.modelWorldRotation} transformBehaviors={transformBehaviors}>
        <ViroNode
          ref={(ref) => { this.node = ref }}
          scale={[1, 1, 1]}
        >
          <Viro3DObject
            visible={this.state.isReady}
            position={[0, .5, 0]}
            source={require('./res/emoji_heart_anim/emoji_heart_anim.vrx')}
            resources={[
              require('./res/emoji_heart_anim/emoji_heart.png'),
              require('./res/emoji_heart_anim/emoji_heart_specular.png'),
            ]}
            animation={{ name: "02", delay: 0, loop: true, run: true }}
            type="VRX" />
          <ViroQuad
            rotation={[-90, 0, 0]}
            position={[0, -.001, 0]}
            width={8}
            height={8}
            arShadowReceiver={true}
            ignoreEventHandling={true} />
        </ViroNode>
      </ViroNode>
    )
  }

  _onTrackingUpdated(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: "Hello World!"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }

  _onCameraARHitTest(results) {
    if (!this.state.isReady) {
      if (results.hitTestResults.length > 0) {
        for (var i = 0; i < results.hitTestResults.length; i++) {
          let result = results.hitTestResults[i];
          if (result.type == "ExistingPlaneUsingExtent") {
            this.setState({
              planeReticleLocation: result.transform.position,
              displayHitReticle: true,
              foundPlane: true,
              lastFoundPlaneLocation: result.transform.position
            });
 //           this.props.arSceneNavigator.viroAppProps.setIsOverPlane(true);
            return;
          }
        }
      }
      return;
    }

    //else we made it here, so just forward vector with unmarked.
    let newPosition = [results.cameraOrientation.forward[0] * 1.5, results.cameraOrientation.forward[1] * 1.5, results.cameraOrientation.forward[2] * 1.5];
    newPosition[0] = results.cameraOrientation.position[0] + newPosition[0];
    newPosition[1] = results.cameraOrientation.position[1] + newPosition[1];
    newPosition[2] = results.cameraOrientation.position[2] + newPosition[2];
    this.setState({
      planeReticleLocation: newPosition,
      displayHitReticle: true,
      foundPlane: false,
    });
  //  this.props.arSceneNavigator.viroAppProps.setIsOverPlane(false);
  }
}

let styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

export default SceneAR;