/* eslint-disable react-native/no-inline-styles */
import React from 'react';



export default () => {


  // load custom fonts


  // load content and check auth

  const navigationTheme = {
    ...DefaultTheme,
    dark: isDark,
    colors: {
      ...DefaultTheme.colors,
      border: 'rgba(0,0,0,0)',
      text: String(theme.colors.text),
      card: String(theme.colors.card),
      primary: String(theme.colors.primary),
      notification: String(theme.colors.primary),
      background: String(theme.colors.background),
    },
  };

  return (
  <TranslationProvider>

      <NavigationContainer theme={navigationTheme}>


        <Menu />

      </NavigationContainer>

        


  </TranslationProvider>
  )

};