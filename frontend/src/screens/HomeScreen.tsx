import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Groomn</Text>
          <Text style={styles.subtitle}>Discover Your Style</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Trending Haircuts</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Outfits</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Nearby Stylists</Text>
        </View>
      </ScrollView>
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
  subtitle: {
    fontSize: 18,
    color: '#fff',
    opacity: 0.8,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
  },
});

export default HomeScreen; 