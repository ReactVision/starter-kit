import React, {useState} from 'react';
import {
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Viro360Image from './screens/viro_tests/Viro360Image';
import Viro360Video from './screens/viro_tests/Viro360Video';

import AR from './screens/demos/AR';
import VR from './screens/demos/VR';

import Issue24 from './screens/github_issues/Issue24';
import Issue31 from './screens/github_issues/Issue31';
import Issue41 from './screens/github_issues/Issue41';
import Issue58 from './screens/github_issues/Issue58';
import Issue62 from './screens/github_issues/Issue62';

import CheethKeeth12202021 from './screens/discord_issues/CheethKeeth_12202021';
import VV12202021 from './screens/discord_issues/VV_12202021';

const viro_tests = ['Viro360Image', 'Viro360Video'];

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

  switch (view) {
    case 'Viro360Image':
      return <Viro360Image />;
    case 'Viro360Video':
      return <Viro360Video />;

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
        <ScrollView style={styles.home} contentContainerStyle={styles.content}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Viro Starter Kit</Text>
          </View>

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
