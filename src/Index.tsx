import React from 'react';
import { Text } from 'react-native'
import Home from './screens/home';
import { appState } from './hooks'
import Loading from './screens/loading';


export default () => {
  const {
    loading
  } = appState()

  console.log(loading)

  return (

    loading ? (
      <Loading />
    ) : (
      <>
        <Home />
      </>
    )

  )
}

