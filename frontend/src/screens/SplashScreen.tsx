import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = ({ navigation }: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Welcome');
    }, 1500);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://placehold.co/120x120?text=Logo' }}
        style={styles.logo}
      />
      <Text style={styles.appName}>Groomn</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
    borderRadius: 24,
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007AFF',
  },
});

export default SplashScreen; 