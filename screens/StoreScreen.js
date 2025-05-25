import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import ScreenLayout from '../components/ScreenLayout';

const highlights = [
  { id: '1', title: 'Editor’s Pick 1', image: 'https://picsum.photos/300/200?random=1' },
  { id: '2', title: 'Editor’s Pick 2', image: 'https://picsum.photos/300/200?random=2' },
  { id: '3', title: 'Editor’s Pick 3', image: 'https://picsum.photos/300/200?random=3' },
];

const categories = [
  { id: '1', name: 'Adventure' },
  { id: '2', name: 'Music' },
  { id: '3', name: 'Bedtime Stories' },
  { id: '4', name: 'Space' },
];

const newArrivals = [
  { id: '1', name: 'New Content 1' },
  { id: '2', name: 'New Content 2' },
  { id: '3', name: 'New Content 3' },
];

const freeContent = [
  { id: '1', name: 'Free Content 1' },
  { id: '2', name: 'Free Content 2' },
];

const specialOffers = [
  { id: '1', name: 'Special Offer 1' },
  { id: '2', name: 'Special Offer 2' },
];

export default function StoreScreen() {
  return (
    <ScreenLayout>
      <ScrollView style={styles.container}>
        {/* Highlights Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Editor’s Picks</Text>
          <FlatList
            data={highlights}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.highlightItem}>
                <Image source={{ uri: item.image }} style={styles.highlightImage} />
                <Text style={styles.highlightText}>{item.title}</Text>
              </View>
            )}
          />
        </View>

        {/* Categories Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Explore by Themes</Text>
          <FlatList
            data={categories}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.categoryItem}>
                <Text style={styles.categoryText}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* New Arrivals Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>New Arrivals</Text>
          {newArrivals.map((item) => (
            <View key={item.id} style={styles.listItem}>
              <Text>{item.name}</Text>
            </View>
          ))}
        </View>

        {/* Free Content Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Free Content</Text>
          {freeContent.map((item) => (
            <View key={item.id} style={styles.listItem}>
              <Text>{item.name}</Text>
            </View>
          ))}
        </View>

        {/* Special Offers Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Special Offers</Text>
          {specialOffers.map((item) => (
            <View key={item.id} style={styles.listItem}>
              <Text>{item.name}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  highlightItem: {
    marginRight: 10,
  },
  highlightImage: {
    width: 200,
    height: 250,
    borderRadius: 8,
  },
  highlightText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: '600',
  },
  categoryItem: {
    padding: 10,
    backgroundColor: '#f3f3f3',
    borderRadius: 8,
    marginRight: 10,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '600',
  },
  listItem: {
    padding: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 10,
  },
});