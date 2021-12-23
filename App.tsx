import React, {useState} from 'react';
import {
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AR from './screens/demos/AR';
import VR from './screens/demos/VR';
import CheethKeeth12202021 from './screens/discord_issues/CheethKeeth_12202021';
import VV12202021 from './screens/discord_issues/VV_12202021';
import Issue24 from './screens/github_issues/Issue24';
import Issue31 from './screens/github_issues/Issue31';
import Issue41 from './screens/github_issues/Issue41';
import Issue58 from './screens/github_issues/Issue58';
import Issue62 from './screens/github_issues/Issue62';
import Viro360Image from './screens/viro_tests/Viro360Image';
import Viro360Video from './screens/viro_tests/Viro360Video';
import Viro3DObject from './screens/viro_tests/Viro3DObject';
import ViroAmbientLight from './screens/viro_tests/ViroAmbientLight';
import ViroAnimatedImage from './screens/viro_tests/ViroAnimatedImage';
import ViroARImageMarker from './screens/viro_tests/ViroARImageMarker';
import ViroARPlane from './screens/viro_tests/ViroARPlane';
import ViroARPlaneSelector from './screens/viro_tests/ViroARPlaneSelector';
import ViroBox from './screens/viro_tests/ViroBox';
import ViroButton from './screens/viro_tests/ViroButton';
import ViroController from './screens/viro_tests/ViroController';
import ViroDirectionalLight from './screens/viro_tests/ViroDirectionalLight';
import ViroFlexView from './screens/viro_tests/ViroFlexView';
import ViroGeometry from './screens/viro_tests/ViroGeometry';
import ViroImage from './screens/viro_tests/ViroImage';
import ViroLightingEnvironment from './screens/viro_tests/ViroLightingEnvironment';
import ViroMaterials from './screens/viro_tests/ViroMaterials';
import ViroMaterialVideo from './screens/viro_tests/ViroMaterialVideo';
import ViroOmniLight from './screens/viro_tests/ViroOmniLight';
import ViroOrbitCamera from './screens/viro_tests/ViroOrbitCamera';
import ViroParticleEmitter from './screens/viro_tests/ViroParticleEmitter';
import ViroPolygon from './screens/viro_tests/ViroPolygon';
import ViroPolyline from './screens/viro_tests/ViroPolyline';
import ViroPortal from './screens/viro_tests/ViroPortal';
import ViroQuad from './screens/viro_tests/ViroQuad';
import ViroSkyBox from './screens/viro_tests/ViroSkyBox';
import ViroSound from './screens/viro_tests/ViroSound';
import ViroSoundField from './screens/viro_tests/ViroSoundField';
import ViroSpatialSound from './screens/viro_tests/ViroSpatialSound';
import ViroSphere from './screens/viro_tests/ViroSphere';
import ViroSpinner from './screens/viro_tests/ViroSpinner';
import ViroSpotLight from './screens/viro_tests/ViroSpotLight';
import ViroText from './screens/viro_tests/ViroText';
import ViroVideo from './screens/viro_tests/ViroVideo';

// import ViroARObjectMarker from './screens/viro_tests/ViroARObjectMarker';

const viro_tests = [
  'Viro360Image',
  'Viro360Video',
  'Viro3DObject',
  'ViroAnimatedImage',
  // Is this not working due to GVR removed? what should this look like?
  'ViroAmbientLight',
  'ViroARImageMarker',
  // TODO: Couldn't get a good scan of an object marker to work with AR Scanner
  // https://developer.apple.com/documentation/arkit/content_anchors/scanning_and_detecting_3d_objects?preferredLanguage=occ
  // 'ViroARObjectMarker',
  'ViroARPlane',
  'ViroARPlaneSelector',
  'ViroBox',
  'ViroButton',
  // TODO: Need VR camera to test this
  'ViroController',
  // TODO: Need VR camera to test this
  'ViroDirectionalLight',
  'ViroFlexView',
  'ViroGeometry',
  'ViroLightingEnvironment',
  'ViroImage',
  // TODO: Viro materials doesn't seem to be working.
  // The current lead is that metro is not resolving an asset embedded in the material.
  // I think what is happening is the asset resolver for the .obj files is using the
  // absolute path on my computer, and not the resolved path in the bundle.
  'ViroMaterials',
  // TODO: Didn't see anything, but didn't crash. Might need VR to test this.
  'ViroMaterialVideo',
  // TODO: Didn't see anything, but didn't crash. Might need VR to test this.
  'ViroOmniLight',
  'ViroOrbitCamera',
  'ViroParticleEmitter',
  'ViroPolygon',
  'ViroPolyline',
  'ViroPortal',
  'ViroQuad',
  'ViroSkyBox',
  // TODO: Sound doesn't seem to be working.
  'ViroSound',
  // TODO: Crash with Unrecognized selector sent to instance
  'ViroSoundField',
  // TODO: Crash with Unrecognized selector sent to instance
  'ViroSpatialSound',
  'ViroSphere',
  'ViroSpinner',
  // TODO: Didn't see anything, but didn't crash. Might need VR to test this.
  'ViroSpotLight',
  'ViroText',
  // TODO: Crash with Unrecognized selector sent to instance
  'ViroVideo',
];

const demos = [
  {title: 'AR Demo', id: 'AR'},
  {title: 'VR Demo', id: 'VR'},
];

const github_issues = ['24', '31', '41', '58', '62'];

const discord_issues = [
  {
    title: 'CheethKeeth 12/20/2021',
    id: 'CheethKeeth_12202021',
    link: 'https://discord.com/channels/774471080713781259/774471080713781263/922512508751855647',
  },
  {
    title: 'VV 12/20/2021',
    id: 'VV_12202021',
    link: 'https://discord.com/channels/774471080713781259/774471080713781263/922595857415688232',
  },
];

export default () => {
  const [view, setView] = useState('HOME');

  const handleClickGitHubLink = (id: string) => {
    Linking.openURL(`https://github.com/ViroCommunity/viro/issues/${id}`);
  };

  const handleClickDiscordLink = (link: any) => {
    Linking.openURL(link);
  };

  const renderScene = () => {
    switch (view) {
      case 'Viro360Image':
        return <Viro360Image />;
      case 'Viro360Video':
        return <Viro360Video />;
      case 'Viro3DObject':
        return <Viro3DObject />;
      case 'ViroAnimatedImage':
        return <ViroAnimatedImage />;
      case 'ViroAmbientLight':
        return <ViroAmbientLight />;
      case 'ViroARImageMarker':
        return <ViroARImageMarker />;
      // case 'ViroARObjectMarker':
      //   return <ViroARObjectMarker />;
      case 'ViroARPlane':
        return <ViroARPlane />;
      case 'ViroARPlaneSelector':
        return <ViroARPlaneSelector />;
      case 'ViroBox':
        return <ViroBox />;
      case 'ViroButton':
        return <ViroButton />;
      case 'ViroController':
        return <ViroController />;
      case 'ViroDirectionalLight':
        return <ViroDirectionalLight />;
      case 'ViroFlexView':
        return <ViroFlexView />;
      case 'ViroGeometry':
        return <ViroGeometry />;
      case 'ViroLightingEnvironment':
        return <ViroLightingEnvironment />;
      case 'ViroImage':
        return <ViroImage />;
      case 'ViroMaterials':
        return <ViroMaterials />;
      case 'ViroMaterialVideo':
        return <ViroMaterialVideo />;
      case 'ViroOmniLight':
        return <ViroOmniLight />;
      case 'ViroOrbitCamera':
        return <ViroOrbitCamera />;
      case 'ViroParticleEmitter':
        return <ViroParticleEmitter />;
      case 'ViroPolygon':
        return <ViroPolygon />;
      case 'ViroPolyline':
        return <ViroPolyline />;
      case 'ViroPortal':
        return <ViroPortal />;
      case 'ViroQuad':
        return <ViroQuad />;
      case 'ViroSkyBox':
        return <ViroSkyBox />;
      case 'ViroSound':
        return <ViroSound />;
      case 'ViroSoundField':
        return <ViroSoundField />;
      case 'ViroSpatialSound':
        return <ViroSpatialSound />;
      case 'ViroSphere':
        return <ViroSphere />;
      case 'ViroSpinner':
        return <ViroSpinner />;
      case 'ViroSpotLight':
        return <ViroSpotLight />;
      case 'ViroText':
        return <ViroText />;
      case 'ViroVideo':
        return <ViroVideo />;

      // Demos
      case 'AR':
        return <AR />;
      case 'VR':
        return <VR />;

      // Discord Issues
      case 'CheethKeeth_12202021':
        return <CheethKeeth12202021 />;
      case 'VV_12202021':
        return <VV12202021 />;

      // GitHub Issues
      case '24':
        return <Issue24 />;
      case '31':
        return <Issue31 />;
      case '41':
        return <Issue41 />;
      case '58':
        return <Issue58 />;
      case '62':
        return <Issue62 />;
      default:
        return (
          <ScrollView
            style={styles.home}
            contentContainerStyle={styles.content}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Viro Test App</Text>
            </View>
            <Pressable
              onPress={() => Linking.openURL('https://github.com/NS-BOBBY-C')}
              style={styles.bobbyButton}>
              <Text style={styles.buttonText}>Built by NS-BOBBY-C</Text>
            </Pressable>
            {/* General Demos */}
            <View style={styles.header}>
              <Text style={styles.subheaderText}>Viro Tests</Text>
            </View>
            {viro_tests.map(demo => (
              <Pressable
                key={demo}
                onPress={() => setView(demo)}
                style={styles.viroTestButton}>
                <Text style={styles.buttonText}>{demo}</Text>
              </Pressable>
            ))}

            {/* General Demos */}
            <View style={styles.header}>
              <Text style={styles.subheaderText}>General Usage</Text>
            </View>
            {demos.map(demo => (
              <Pressable
                key={demo.id}
                onPress={() => setView(demo.id)}
                style={styles.button}>
                <Text style={styles.buttonText}>{demo.title}</Text>
              </Pressable>
            ))}

            {/* Issues from GitHub */}
            <View style={styles.header}>
              <Text style={styles.subheaderText}>GitHub Issues</Text>
            </View>
            {github_issues.map(issue => (
              <View key={issue} style={styles.issue}>
                <Pressable onPress={() => setView(issue)} style={styles.button}>
                  <Text style={styles.buttonText}>Issue #{issue}</Text>
                </Pressable>
                <Pressable
                  onPress={() => handleClickGitHubLink(issue)}
                  style={styles.link}>
                  <Text style={styles.buttonText}>GitHub Link</Text>
                </Pressable>
              </View>
            ))}

            {/* Discord Issues */}
            <View style={styles.header}>
              <Text style={styles.subheaderText}>Discord Issues</Text>
            </View>
            {discord_issues.map(issue => (
              <View key={issue.id} style={styles.issue}>
                <Pressable
                  onPress={() => setView(issue.id)}
                  style={styles.button}>
                  <Text style={styles.buttonText}>{issue.title}</Text>
                </Pressable>
                <Pressable
                  onPress={() => handleClickDiscordLink(issue.link)}
                  style={styles.discordLink}>
                  <Text style={styles.buttonText}>Message</Text>
                </Pressable>
              </View>
            ))}
          </ScrollView>
        );
    }
  };

  return (
    <React.Fragment>
      {renderScene()}
      {view !== 'HOME' ? (
        <Pressable onPress={() => setView('HOME')} style={styles.homeButton}>
          <Text style={styles.buttonText}>Home</Text>
        </Pressable>
      ) : null}
    </React.Fragment>
  );
};

var styles = StyleSheet.create({
  home: {
    backgroundColor: '#fff',
    flex: 1,
  },
  content: {
    padding: 20,
  },
  issue: {
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 32,
  },
  subheaderText: {
    fontSize: 32,
  },
  header: {
    marginTop: 40,
    marginBottom: 40,
  },
  githubLink: {
    marginBottom: 10,
  },
  link: {
    backgroundColor: '#007AFF',
    marginBottom: 10,
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
  },
  discordLink: {
    backgroundColor: '#5865F2',
    marginBottom: 10,
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
  },
  f1: {
    flex: 1,
  },
  bobbyButton: {
    marginBottom: 10,
    flex: 2,
    marginRight: 10,
    backgroundColor: '#6C3483',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
  },
  viroTestButton: {
    marginBottom: 10,
    flex: 2,
    marginRight: 10,
    backgroundColor: '#ff3f5f',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
  },
  homeButton: {
    position: 'absolute',
    bottom: 40,
    left: 40,
    right: 40,
    backgroundColor: '#00000088',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
  },
  button: {
    marginBottom: 10,
    flex: 2,
    marginRight: 10,
    backgroundColor: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
  },
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
