import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');
const numColumns = 2;
const tileSize = width / numColumns;

const DUMMY_DATA = [
  { id: '1', type: 'haircut', title: 'Modern Fade' },
  { id: '2', type: 'outfit', title: 'Street Style' },
  { id: '3', type: 'haircut', title: 'Classic Pompadour' },
  { id: '4', type: 'outfit', title: 'Business Casual' },
];

const ExploreScreen = () => {
  const renderItem = ({ item }: { item: typeof DUMMY_DATA[0] }) => (
    <View style={styles.tile}>
      <View style={styles.tileContent}>
        <Text style={styles.tileTitle}>{item.title}</Text>
        <Text style={styles.tileType}>{item.type}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Explore</Text>
      </View>
      <FlatList
        data={DUMMY_DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={numColumns}
        contentContainerStyle={styles.grid}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#007AFF',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  grid: {
    padding: 5,
  },
  tile: {
    width: tileSize - 10,
    height: tileSize - 10,
    margin: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    overflow: 'hidden',
  },
  tileContent: {
    flex: 1,
    padding: 15,
    justifyContent: 'flex-end',
  },
  tileTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  tileType: {
    fontSize: 12,
    color: '#666',
    textTransform: 'capitalize',
  },
});

export default ExploreScreen; 