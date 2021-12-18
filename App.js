import React, {useState} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import AR from './screens/demos/AR';
import ARIssue24 from './screens/issues/ARIssue24';
import ARIssue31 from './screens/issues/ARIssue31';
import ARIssue58 from './screens/issues/ARIssue58';
import VR from './screens/demos/VR';

const demos = [
  {title: 'AR Demo', id: 'AR'},
  {title: 'VR Demo', id: 'VR'},
];

const issues = [
  {title: 'AR Issue #24', id: '24'},
  {title: 'AR Issue #31', id: '31'},
  {title: 'AR Issue #58', id: '58'},
];

export default () => {
  const [view, setView] = useState('HOME');

  switch (view) {
    case 'AR':
      return <AR />;
    case '24':
      return <ARIssue24 />;
    case '31':
      return <ARIssue31 />;
    case '58':
      return <ARIssue58 />;
    case 'VR':
      return <VR />;
    default:
      return (
        <ScrollView style={styles.home} contentContainerStyle={styles.content}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Viro Starter Kit</Text>
          </View>
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
          {issues.map(issue => (
            <Pressable
              key={issue.id}
              onPress={() => setView(issue.id)}
              style={styles.button}>
              <Text style={styles.buttonText}>{issue.title}</Text>
            </Pressable>
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
  f1: {
    flex: 1,
  },
  button: {
    marginBottom: 10,
    width: '100%',
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
