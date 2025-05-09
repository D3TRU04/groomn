import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://placehold.co/300x300?text=Welcome+Image' }}
        style={styles.image}
      />
      <Text style={styles.title}>Welcome to Groomn</Text>
      <Text style={styles.subtitle}>Rate your haircuts, track your style journey, and get inspired!</Text>
      <TouchableOpacity
        style={styles.getStartedButton}
        onPress={() => navigation.navigate('Survey')}
      >
        <Text style={styles.getStartedText}>Get Started</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signInButton}
        onPress={() => navigation.navigate('Auth')}
      >
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 24,
  },
  image: {
    width: 240,
    height: 240,
    marginBottom: 32,
    borderRadius: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 32,
    textAlign: 'center',
  },
  getStartedButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 16,
  },
  getStartedText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signInButton: {
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  signInText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen; 