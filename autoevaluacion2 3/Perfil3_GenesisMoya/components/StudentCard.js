import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Row = ({ label, value }) => (
  <View style={styles.row}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

export default function StudentCard({ nombre, carnet, seccion, grupo }) {
  return (
    <View style={styles.card}>
      <Row label="Nombre" value={nombre} />
      <Row label="Carnet" value={carnet} />
      <Row label="Sección" value={seccion} />
      <Row label="Grupo" value={grupo} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },
  row: { marginBottom: 14 },
  label: { fontSize: 13, color: '#7a7a7a', textTransform: 'uppercase', letterSpacing: 1 },
  value: { fontSize: 20, fontWeight: '600', color: '#222', marginTop: 2 },
});
