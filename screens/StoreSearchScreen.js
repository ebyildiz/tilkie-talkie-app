import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ScreenLayout from '../components/ScreenLayout';
import { useNavigation } from '@react-navigation/native';


const allItems = [
  'Animal Songs Pack',
  'Bedtime Stories',
  'Interactive ABCs',
  'Space Adventure',
  'Counting with Fox',
  'Pirate Rhymes',
];

export default function StoreSearchScreen() {
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState('');

    const filteredItems = allItems.filter((item) =>
    item.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <ScreenLayout>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Search the store..."
          value={searchText}
          onChangeText={setSearchText}
        />
        <FlatList
          data={filteredItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Text style={styles.result}>{item}</Text>
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
  input: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  result: {
    padding: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  backButton: {
    marginBottom: 30,
  },
  backText: {
    fontSize: 18,
    color: '#007aff',
  }
});
