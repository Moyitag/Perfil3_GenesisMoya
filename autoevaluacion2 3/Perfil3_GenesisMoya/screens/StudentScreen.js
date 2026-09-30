import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import StudentCard from '../components/StudentCard';
import { student } from '../data/student';

export default function StudentScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Datos del estudiante</Text>
      <StudentCard
        nombre={student.nombre}
        carnet={student.carnet}
        seccion={student.seccion}
        grupo={student.grupo}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Personajes')}>
        <Text style={styles.buttonText}>Ir a la pantalla 2</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#e8f5f3', alignItems: 'center', padding: 24, justifyContent: 'center' },
  title: { fontSize: 26, fontWeight: 'bold', color: '#0f766e', marginBottom: 20 },
  button: { marginTop: 28, backgroundColor: '#0f766e', paddingVertical: 14, paddingHorizontal: 32, borderRadius: 30 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
