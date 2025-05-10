import React from 'react';
import { View, StyleSheet } from 'react-native';
import TopBar from './TopBar';
import { useNavigation } from '@react-navigation/native';

export default function ScreenLayout({ children }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TopBar
        onSettingsPress={() => navigation.navigate('Settings')}
        onStorePress={() => navigation.navigate('Store')}
        onSearchPress={() => navigation.navigate('StoreSearch')}
      />
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});
