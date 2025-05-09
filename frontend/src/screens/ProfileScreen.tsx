import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const DUMMY_USER = {
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://via.placeholder.com/150',
  preferences: {
    style: ['streetwear', 'minimalist'],
    haircut: ['fade', 'undercut'],
  },
};

const ProfileScreen = () => {
  const renderPreferenceChip = (preference: string) => (
    <View key={preference} style={styles.chip}>
      <Text style={styles.chipText}>{preference}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Profile</Text>
        </View>
        <View style={styles.profileSection}>
          <Image
            source={{ uri: DUMMY_USER.avatar }}
            style={styles.avatar}
          />
          <Text style={styles.name}>{DUMMY_USER.name}</Text>
          <Text style={styles.email}>{DUMMY_USER.email}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Style Preferences</Text>
          <View style={styles.preferencesContainer}>
            {DUMMY_USER.preferences.style.map(renderPreferenceChip)}
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Haircut Preferences</Text>
          <View style={styles.preferencesContainer}>
            {DUMMY_USER.preferences.haircut.map(renderPreferenceChip)}
          </View>
        </View>
        <View style={styles.section}>
          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="settings-outline" size={24} color="#333" />
            <Text style={styles.menuText}>Settings</Text>
            <Ionicons name="chevron-forward" size={24} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="help-circle-outline" size={24} color="#333" />
            <Text style={styles.menuText}>Help & Support</Text>
            <Ionicons name="chevron-forward" size={24} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="log-out-outline" size={24} color="#FF3B30" />
            <Text style={[styles.menuText, { color: '#FF3B30' }]}>Log Out</Text>
          </TouchableOpacity>
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
  profileSection: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#666',
  },
  section: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
  },
  preferencesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  chip: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  chipText: {
    fontSize: 14,
    color: '#333',
    textTransform: 'capitalize',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 15,
  },
});

export default ProfileScreen; 