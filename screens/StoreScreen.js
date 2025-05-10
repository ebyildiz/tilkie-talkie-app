import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ScreenLayout from '../components/ScreenLayout';

const dummyStoreItems = [
  { id: '1', name: 'Animal Songs Pack' },
  { id: '2', name: 'Bedtime Stories' },
  { id: '3', name: 'Interactive ABCs' },
  { id: '4', name: 'Space Adventure' },
];

export default function StoreScreen() {
  return (
    <ScreenLayout>
      <View style={styles.container}>
        <Text style={styles.title}>Store</Text>
        <FlatList
          data={dummyStoreItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item.name}</Text>
            </View>
          )}
        />
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  },
  item: {
    padding: 16,
    backgroundColor: '#f3f3f3',
    borderRadius: 10,
    marginBottom: 12,
  },
});
