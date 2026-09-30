import React from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import ItemCard from '../components/ItemCard';
import useFetchData from '../hooks/useFetchData';

const API_URL = 'https://rickandmortyapi.com/api/character';

export default function ApiScreen() {
  const { data, loading, error, reload } = useFetchData(API_URL);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0f766e" />
        <Text style={styles.msg}>Cargando personajes...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{error}</Text>
        <TouchableOpacity style={styles.button} onPress={reload}>
          <Text style={styles.buttonText}>Reintentar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={{ padding: 16 }}
      data={data}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <ItemCard
          name={item.name}
          image={item.image}
          status={item.status}
          species={item.species}
          origin={item.origin?.name}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: { flex: 1, backgroundColor: '#e8f5f3' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#e8f5f3' },
  msg: { marginTop: 12, color: '#555' },
  error: { color: '#c0392b', fontSize: 16, marginBottom: 16 },
  button: { backgroundColor: '#0f766e', paddingVertical: 10, paddingHorizontal: 24, borderRadius: 24 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
