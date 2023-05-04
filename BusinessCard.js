import React, { Component } from 'react';
import firestore from '@react-native-firebase/firestore';
// import firebaseConfig from './firebaseconfig';
// import {collection, addDoc, getDocs, where, query} from 'firebase/firestore'; // import collection and addDoc functions from Firestore

import { StyleSheet, Linking } from 'react-native';
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
  ViroQuad,
} from '@viro-community/react-viro';

class BusinessCard extends Component {
  state = {
    isTracking: false,
    initialized: false,
    runAnimation: false,
    peopleObjTargets: {},
    entryTargets: {},
    realTargets: {},
    ready: false,
    activeKey: null,
  };
  componentDidMount() {
    this.get();
    console.log('Get');
  }

  get = async () => {
    entriesLocal = {};
    try {
      const querySnapshot = await firestore().collection('entries').get();
      const entryTargets = {};
      querySnapshot.forEach(documentSnapshot => {
        entryTargets[documentSnapshot.id] = documentSnapshot.data();
      });
      const parseInteger = (num) => {
        let str = num.toString();
        str = str.padStart(3, "0");
        return str;
      };
      this.setState({ entryTargets }, () => {
        for (const [key, value] of Object.entries(this.state.entryTargets)) {
          entriesLocal[key] = {
            source: {
              uri: `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${parseInteger(value.pokemon)}.png`,
            },
            orientation: 'Up',
            physicalWidth: 0.1, // width in meters,
            data: { text: value.text, pokemon: value.pokemon },
            type: 'Image',
          };
        }

        this.setState({
          realTargets: entriesLocal,
        });

        console.log('Entries Local', entriesLocal);
        ViroARTrackingTargets.createTargets(entriesLocal);
        this.setState({
          ready: true,
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  getNoTrackingUI() {
    const { isTracking, initialized } = this.state;
    return (
      <ViroText text={initialized ? 'Initializing AR...' : 'No Tracking'} />
    );
  }

  render() {
    const testContent = (demoText) => <ViroFlexView borderRadius={30} width={2.1} position={[0, -5, 0]} rotation={[-90, 0, 0]} height={3} backgroundColor={'pink'} style={{ flexDirection: 'column' }} >
    <ViroFlexView backgroundColor={'#092336'} style={{ flex: 0.1, flexDirection: 'row' }} >
        <ViroFlexView backgroundColor={'#092336'} style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }} >
            <ViroText
                style={{ flex: 0.4, color: 'white', marginLeft: .1, }}
                text={'Tech People'}
                fontSize={12} />
            <ViroText
                style={{ flex: 0.4, color: 'white', marginLeft: .1, }}
                text={"100 HP"}
                fontSize={12} />
        </ViroFlexView>
    </ViroFlexView>
    <ViroFlexView backgroundColor={'white'} style={{ flex: 0.6 }} >
        <ViroImage borderRadius={30} style={{ flex: 1 }} source={{ uri: 'https://lh3.googleusercontent.com/9BdThza876Ojf5bkVg5yafoEsR0aABZ7cT1jtsWeAxXuWA4wFMXAJOHoST-3DVTKNqLp0Ir_ia3g9zS0k_u-JbImNzMOLoDT553U=s0' }} />
    </ViroFlexView>
    <ViroFlexView backgroundColor={'#239bac'} style={{ flex: 0.3, flexDirection: 'column' }} >
        <ViroText
            style={{ flex: 0.3, color: 'white', marginLeft: .2 }}
            text={'Demo'}
            fontSize={12} />
        <ViroText
            style={{ flex: 0.7, color: 'white', marginLeft: .2 }}
            text={demoText}
            fontSize={12} />
    </ViroFlexView>
  </ViroFlexView>

    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        {Object.keys(this.state.realTargets).map((key, index) => {
          return (
            <ViroARImageMarker
              target={key}
              key={index}
              onAnchorUpdated={(e) => {
                // change active key when a new target is found
                if(this.state.activeKey !== key && e.trackingMethod === 'tracking'){
                  console.log('Anchor found ' + this.state.realTargets[key].data.pokemon)
                  // show info from key 
                  this.setState({
                    activeKey: key
                  });
                }
              }}
            >
              {this.state.activeKey === key &&
                <ViroNode>
                  {testContent(this.state.realTargets[key].data.text)}
                </ViroNode>
              }
            </ViroARImageMarker>
          );
        })}
      </ViroARScene>
    );
  }

  _onInitialized = (state, reason) => {
    if (state == ViroTrackingStateConstants.TRACKING_NORMAL) {
      //
    } else {
      //
    }
  };

}

var styles = StyleSheet.create({
  textStyle: {
    flex: 0.5,
    fontFamily: 'Roboto',
    fontSize: 50,
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
    flex: 0.5,
  },
  subText: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 0.5,
  },
});

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
