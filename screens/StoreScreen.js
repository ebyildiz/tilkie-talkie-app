import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import ScreenLayout from '../components/ScreenLayout';

const highlights = [
  { id: '1', category: 'Adventure', brand: 'Brand A', price: '$19.99', image: 'https://picsum.photos/300/200?random=1' },
  { id: '2', category: 'Music', brand: 'Brand B', price: '$14.99', image: 'https://picsum.photos/300/200?random=2' },
  { id: '3', category: 'Space', brand: 'Brand C', price: '$24.99', image: 'https://picsum.photos/300/200?random=3' },
];

const categories = [
  { id: '1', name: 'Adventure' },
  { id: '2', name: 'Music' },
  { id: '3', name: 'Bedtime Stories' },
  { id: '4', name: 'Space' },
];

const newArrivals = [
  { id: '1', category: 'Travel', brand: 'Brand D', price: '$9.99', image: 'https://picsum.photos/300/200?random=4' },
  { id: '2', category: 'Lifestyle', brand: 'Brand E', price: '$12.99', image: 'https://picsum.photos/300/200?random=5' },
  { id: '3', category: 'Tech', brand: 'Brand F', price: '$15.99', image: 'https://picsum.photos/300/200?random=6' },
];

const freeContent = [
  { id: '1', category: 'Wellness', brand: 'Brand G', price: 'Free', image: 'https://picsum.photos/300/200?random=7' },
  { id: '2', category: 'Education', brand: 'Brand H', price: 'Free', image: 'https://picsum.photos/300/200?random=8' },
];

const specialOffers = [
  { id: '1', category: 'Sports', brand: 'Brand I', price: '$5.99', image: 'https://picsum.photos/300/200?random=9' },
  { id: '2', category: 'Fitness', brand: 'Brand J', price: '$7.99', image: 'https://picsum.photos/300/200?random=10' },
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
                <Text style={styles.highlightCategory}>{item.category}</Text>
                <Text style={styles.highlightBrand}>{item.brand}</Text>
                <Text style={styles.highlightPrice}>{item.price}</Text>
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
          <FlatList
            data={newArrivals}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.smallItem}>
                <Image source={{ uri: item.image }} style={styles.smallImage} />
                <Text style={styles.smallCategory}>{item.category}</Text>
                <Text style={styles.smallBrand}>{item.brand}</Text>
                <Text style={styles.smallPrice}>{item.price}</Text>
              </View>
            )}
          />
        </View>

        {/* Free Content Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Free Content</Text>
          <FlatList
            data={freeContent}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.smallItem}>
                <Image source={{ uri: item.image }} style={styles.smallImage} />
                <Text style={styles.smallCategory}>{item.category}</Text>
                <Text style={styles.smallBrand}>{item.brand}</Text>
                <Text style={styles.smallPrice}>{item.price}</Text>
              </View>
            )}
          />
        </View>

        {/* Special Offers Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Special Offers</Text>
          <FlatList
            data={specialOffers}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.smallItem}>
                <Image source={{ uri: item.image }} style={styles.smallImage} />
                <Text style={styles.smallCategory}>{item.category}</Text>
                <Text style={styles.smallBrand}>{item.brand}</Text>
                <Text style={styles.smallPrice}>{item.price}</Text>
              </View>
            )}
          />
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
  highlightCategory: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: '600',
  },
  highlightBrand: {
    fontSize: 14,
    color: '#555',
  },
  highlightPrice: {
    fontSize: 14,
    fontWeight: 'bold',
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
  smallItem: {
    marginRight: 10,
  },
  smallImage: {
    width: 120,
    height: 160,
    borderRadius: 8,
  },
  smallCategory: {
    marginTop: 3,
    fontSize: 12,
    fontWeight: '600',
  },
  smallBrand: {
    fontSize: 12,
    color: '#555',
  },
  smallPrice: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});