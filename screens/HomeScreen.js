import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Animated,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import ScreenLayout from '../components/ScreenLayout';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.35;
const SPACING = 16;

//mockdata for new releases
const newReleases = [
  { id: 'r1', image: 'https://picsum.photos/800/1200?random=1' },
  { id: 'r2', image: 'https://picsum.photos/800/1200?random=2' },
  { id: 'r3', image: 'https://picsum.photos/800/1200?random=3' },
];

//mockdata for promotions
const promotions = [
  { id: 'r1', image: 'https://picsum.photos/800/1200?random=4' },
  { id: 'r2', image: 'https://picsum.photos/800/1200?random=5' },
  { id: 'r3', image: 'https://picsum.photos/800/1200?random=6' },
];
// Sample mock data for items
const categories = [
  {
    id: '1',
    title: 'Onerilenler',
    stories: [
      { id: '1-1', title: 'AI Revolution' },
      { id: '1-2', title: 'Quantum Leap' },
      { id: '1-3', title: 'React Native Update' },
    ],
  },
  {
    id: '2',
    title: 'Bedava Icerik',
    stories: [
      { id: '2-1', title: 'Alps Adventure' },
      { id: '2-2', title: 'Tokyo Lights' },
      { id: '2-3', title: 'Sahara Safari' },
    ],
  },
];

const NewReleasesRow = ({ releases }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  // Autoplay every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % releases.length;
        flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval); // clean up
  }, []);

  const onScroll = (event) => {
    const index = Math.round(
      event.nativeEvent.contentOffset.x / width
    );
    setCurrentIndex(index);
  };

  return (
    <View style={styles.newReleasesContainer}>
      <Text style={styles.categoryTitle}>Yeni Cikanlar</Text>
      <FlatList
        ref={flatListRef}
        data={releases}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        onScroll={onScroll}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.image }}
            style={styles.newReleaseImage}
            resizeMode="cover"
          />
        )}
        scrollEventThrottle={16}
      />
      <View style={styles.dotsContainer}>
        {releases.map((_, idx) => (
          <View
            key={idx}
            style={[
              styles.dot,
              currentIndex === idx && styles.activeDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};


const PromotionsRow = ({ promotions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  // Autoplay every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % releases.length;
        flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval); // clean up
  }, []);

  const onScroll = (event) => {
    const index = Math.round(
      event.nativeEvent.contentOffset.x / width
    );
    setCurrentIndex(index);
  };

  return (
    <View style={styles.newReleasesContainer}>
      <Text style={styles.categoryTitle}>Yeni Cikanlar</Text>
      <FlatList
        ref={flatListRef}
        data={releases}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        onScroll={onScroll}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.image }}
            style={styles.newReleaseImage}
            resizeMode="cover"
          />
        )}
        scrollEventThrottle={16}
      />
      <View style={styles.dotsContainer}>
        {releases.map((_, idx) => (
          <View
            key={idx}
            style={[
              styles.dot,
              currentIndex === idx && styles.activeDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};


const AnimatedStoryItem = ({ item, index, scrollX }) => {
  const inputRange = [
    (index - 1) * ITEM_WIDTH,
    index * ITEM_WIDTH,
    (index + 1) * ITEM_WIDTH,
  ];

  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0.75, 1, 0.75],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={[
        styles.storyItem,
        {
          transform: [{ scale }],
        },
      ]}
    >
      <Text style={styles.storyTitle}>{item.title}</Text>
    </Animated.View>
  );
};

const CategoryRow = ({ category }) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.categorySection}>
      <Text style={styles.categoryTitle}>{category.title}</Text>
      <Animated.FlatList
        horizontal
        data={category.stories}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_WIDTH + SPACING}
        decelerationRate="fast"
        contentContainerStyle={{ paddingHorizontal: (width - ITEM_WIDTH) / 2 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        
        renderItem={({ item, index }) => (
          <AnimatedStoryItem item={item} index={index} scrollX={scrollX} />
        )}
      />
    </View>
    
  );
};

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <ScreenLayout>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CategoryRow category={item} />}
        contentContainerStyle={{ paddingVertical: 20 }}
        ListHeaderComponent={
          <>
          <NewReleasesRow releases={newReleases} />
          </>
          
        }
        ListFooterComponent={
          <View style={styles.footerContainer}>
            <Text style={styles.categoryTitle}> Kendi Icerigini Uret! </Text>
            <ImageBackground
              source={require('../assets/microphone.png')} 
              style={styles.imageBackground}
              resizeMode="cover"
            >
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Studio')}
              >
                <Text style={styles.buttonText}>Go to Studio</Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        }
      />
    </ScreenLayout>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Change this to your desired color
  },
  categorySection: {
    marginBottom: 30,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: SPACING,
    marginBottom: 10,
  },
  storyItem: {
    width: ITEM_WIDTH,
    height: 200,
    marginRight: SPACING,
    backgroundColor: '#ccc',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyTitle: {
    fontSize: 18,
    fontWeight: '600',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: SPACING,
    marginBottom: 10,
    color: 'orange'
  },
  newReleasesContainer: {
    marginBottom: 30,
  },
  newReleaseImage: {
    width: width,
    height: height * 0.40,
    borderRadius: 10,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 4,
    backgroundColor: '#aaa',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#333',
    width: 6,
    height: 6,
    borderRadius: 4,
  },
  footerContainer: {
    marginTop: 20,
    height: 200,
    width: '100%',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  

});
