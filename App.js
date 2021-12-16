import React, {useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import AR from './screens/AR';
import VR from './screens/VR';

export default () => {
  const [view, setView] = useState('HOME');

  switch (view) {
    case 'AR':
      return <AR />;
    case 'VR':
      return <VR />;
    default:
      return (
        <View style={styles.home}>
          <Button title="AR" onPress={() => setView('AR')} />
          <Button title="VR" onPress={() => setView('VR')} />
        </View>
      );
  }
};

var styles = StyleSheet.create({
  home: {
    backgroundColor: '#fff',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
