import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import MainScreen from './screens/MainScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MainScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8D1BA"
  },
});

export default App;
