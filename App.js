import React from 'react';
import { AppStateProvider, ThemeProvider, TranslationProvider } from './src/hooks'
import Index from './src/Index';



export default function Main() {

  return (
    <AppStateProvider>
      <ThemeProvider>
        <TranslationProvider>
          <Index />
        </TranslationProvider>
      </ThemeProvider>
    </AppStateProvider>
  )
}


module.exports = Main
