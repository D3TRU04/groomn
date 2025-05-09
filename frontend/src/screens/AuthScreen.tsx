import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const AuthScreen = ({ navigation }: any) => {
  // Placeholder handlers for sign in
  const handleGoogleSignIn = () => {
    // TODO: Implement Google sign in
    navigation.replace('Main');
  };
  const handleAppleSignIn = () => {
    // TODO: Implement Apple sign in
    navigation.replace('Main');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create your account</Text>
      <TouchableOpacity style={styles.socialButton} onPress={handleGoogleSignIn}>
        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' }} style={styles.icon} />
        <Text style={styles.socialText}>Sign in with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton} onPress={handleAppleSignIn}>
        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' }} style={styles.icon} />
        <Text style={styles.socialText}>Sign in with Apple</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 40,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 10,
    marginBottom: 20,
    width: 260,
    justifyContent: 'center',
  },
  icon: {
    width: 28,
    height: 28,
    marginRight: 16,
  },
  socialText: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
});

export default AuthScreen; 