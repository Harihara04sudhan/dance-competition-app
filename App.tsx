import React from 'react';
import { StatusBar } from 'expo-status-bar';
import QueryProvider from './src/services/QueryProvider';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <QueryProvider>
      <AppNavigator />
      <StatusBar style="light" />
    </QueryProvider>
  );
}
