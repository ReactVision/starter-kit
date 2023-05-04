import React, {Component} from 'react';
import firestore from '@react-native-firebase/firestore';
// import firebaseConfig from './firebaseconfig';
// import {collection, addDoc, getDocs, where, query} from 'firebase/firestore'; // import collection and addDoc functions from Firestore

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
  };
  componentDidMount() {
    this.get();
    console.log('Het');
    // ViroARTrackingTargets.createTargets({
    //   hello: {
    //     source:
    //       // {
    //       //   uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    //       // },
    //       // require('./pokemon/bulbasur.png'),
    //       {
    //         uri: 'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/001.png',
    //       },
    //     // }
    //     orientation: 'Up',
    //     physicalWidth: 0.15, // width in meters,
    //     data: 'ssss',
    //     type: 'Image',
    //   },
    // })
  }

  get = async () => {
    entriesLocal = {};
    try {
      const querySnapshot = await firestore().collection('entries').get();
      const entryTargets = {};
      querySnapshot.forEach(documentSnapshot => {
        entryTargets[documentSnapshot.id] = documentSnapshot.data();
      });
      this.setState({entryTargets}, () => {
        for (const [key, value] of Object.entries(this.state.entryTargets)) {
          entriesLocal[key] = {
            source: {
              uri: `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/00${value.pokemon}.png`,
            },
            orientation: 'Up',
            physicalWidth: 0.3, // width in meters,
            data: value.text,
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

  // let entriesLocal = {};
  // try {
  // const querySnapshot = firestore().collection('entries').get();
  // const entryTargets = {};
  // querySnapshot.forEach(documentSnapshot => {
  //   entryTargets[documentSnapshot.id] = documentSnapshot.data();
  // });
  // this.setState({entryTargets}, () => {
  //   for (const [key, value] of Object.entries(this.state.entryTargets)) {
  //     entriesLocal['1'] = {
  //       source:
  //         // {
  //         // uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${String(
  //         //   value.pokemon,
  //         // )}.png`,
  //         // require('./pokemon/bulbasur.png'),
  //         {
  //           uri: 'https://github.com/HybridShivam/Pokemon/blob/master/assets/images/001.png',
  //         },
  //       // }
  //       orientation: 'Up',
  //       physicalWidth: 0.15, // width in meters,
  //       data: value.text,
  //       type: 'Object',
  //     };
  //   }
  //   this.setState({
  //     realTargets: entriesLocal,
  //   });
  //   console.log('Entries Local', entriesLocal);
  //   // ViroARTrackingTargets.createTargets(entriesLocal);
  // });
  // this.setState({
  //   ready: true,
  // });
  // } catch (error) {
  //   console.log(error);
  // }

  // if (Object.keys(this.state.entryTargets).length === 0) {
  //   console.log('Empty');
  // }
  // for (const [key, value] of Object.entries(this.state.entryTargets)) {
  //   entriesLocal[key] = {
  //     source: {
  //       uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${String(
  //         value.pokemon,
  //       )}.png`,
  //     },
  //     orientation: 'Up',
  //     physicalWidth: 0.05, // width in meters,
  //     data: person,
  //     type: 'Image',
  //   };
  //   console.log(entriesLocal[key]);
  // }

  // this.state.entryTargets.forEach(entry => {
  //   console.log(entry);
  //   // entriesLocal[person.id] = {
  //   //   source: require('./pokemon/bulbasur.png'),
  //   //   orientation: 'Up',
  //   //   physicalWidth: 0.05, // width in meters,
  //   //   data: person,
  //   //   type: 'Image',
  //   // };
  // });

  // this.setState({peopleObjTargets: entriesLocal});
  // ViroARTrackingTargets.createTargets(entriesLocal);
  // }

  getNoTrackingUI() {
    const {isTracking, initialized} = this.state;
    return (
      <ViroText text={initialized ? 'Initializing AR...' : 'No Tracking'} />
    );
  }

  getARScene() {
    // this.setState({
    //   ready: true,
    // });
    return (
      <ViroNode>
        {Object.keys(this.state.realTargets).map((key, index) => {
          return (
            <ViroARImageMarker
              target={key}
              key={index}
              onAnchorFound={
                // this.setState({
                //   runAnimation: true,
                // });
                () => console.log('Anchor found')
              }>
              <ViroNode>
                <ViroText
                  textClipMode="None"
                  text={this.state.realTargets[key].data + 'jksjksjkj'}
                  scale={[1, 1, 1]}
                  position={[0.1, -2, 0]}
                  rotation={[-75, 0, 0]}
                  style={styles.textStyle}
                />
              </ViroNode>
            </ViroARImageMarker>
          );
        })}
      </ViroNode>
    );

    {
      /* <ViroNode key={person['data']['name']}>
                <ViroNode
                  opacity={0}
                  position={[0, -0.02, 0]}
                  animation={{
                    name: 'animateImage',
                    run: this.state.runAnimation,
                  }}>
                  <ViroFlexView
                    rotation={[-90, 0, 0]}
                    height={0.03}
                    width={0.05}
                    style={styles.card}>
                    <ViroFlexView style={styles.cardWrapper}>
                      <ViroImage
                        height={0.015}
                        width={0.015}
                        style={styles.image}
                        source={{uri: person['data']['image']}}
                      />
                      <ViroText
                        textClipMode="None"
                        text={person['data']['name']}
                        scale={[0.015, 0.015, 0.015]}
                        style={styles.textStyle}
                      />
                    </ViroFlexView>
                    <ViroFlexView
                      onTouch={() => Linking.openURL(person['data']['link'])}
                      style={styles.cardWrapper}>
                      <ViroText
                        width={0.01}
                        height={0.01}
                        textAlign="left"
                        textClipMode="None"
                        text={person['data']['company_name']}
                        scale={[0.01, 0.01, 0.01]}
                        style={styles.textStyle}
                      />
                      <ViroImage
                        height={0.01}
                        width={0.01}
                        style={styles.image}
                        source={{uri: person['data']['company_logo']}}
                      />
                    </ViroFlexView>
                  </ViroFlexView>
                </ViroNode>
                <ViroFlexView>
                  <ViroText
                    text={person['data']['mail']}
                    rotation={[-90, 0, 0]}
                    scale={[0.01, 0.01, 0.01]}
                    style={styles.textStyle}
                  />
                  <ViroText
                    text={person['data']['role']}
                    rotation={[-90, 0, 0]}
                    scale={[0.01, 0.01, 0.01]}
                    style={styles.textStyle}
                  />
                </ViroFlexView>
              </ViroNode> */
    }
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
    fontSize: 30,
    color: '#ff0000',
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
