import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function TopBar({ onSettingsPress, onStorePress, onSearchPress }) {
  return (
    <SafeAreaView>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={onStorePress}>
          <Text style={styles.icon}>🛍️</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onSearchPress}>
          <Text style={styles.icon}>🔍</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onSettingsPress}>
          <Text style={styles.icon}>⚙️</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    paddingVertical: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  icon: {
    fontSize: 24,
    marginLeft: 12
  },
});
