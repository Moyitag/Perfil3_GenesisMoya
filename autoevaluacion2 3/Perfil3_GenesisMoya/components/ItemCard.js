import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const STATUS_COLORS = { Alive: '#2ecc71', Dead: '#e74c3c', unknown: '#95a5a6' };

export default function ItemCard({ name, image, status, species, origin }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>{name}</Text>
        <View style={styles.statusRow}>
          <View style={[styles.dot, { backgroundColor: STATUS_COLORS[status] || '#95a5a6' }]} />
          <Text style={styles.text}>{status} - {species}</Text>
        </View>
        <Text style={styles.small} numberOfLines={1}>Origen: {origin}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 14,
    marginBottom: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  image: { width: 100, height: 100 },
  info: { flex: 1, padding: 12, justifyContent: 'center' },
  name: { fontSize: 18, fontWeight: 'bold', color: '#222' },
  statusRow: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  dot: { width: 10, height: 10, borderRadius: 5, marginRight: 6 },
  text: { fontSize: 14, color: '#444' },
  small: { fontSize: 12, color: '#777', marginTop: 4 },
});
