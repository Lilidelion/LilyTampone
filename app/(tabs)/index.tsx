import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

type Medicine = {
  id: string;
  name: string;
  dosage: string;
};

export default function Page() {
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [name, setName] = useState('');
  const [dosage, setDosage] = useState('');

  const addMedicine = () => {
    if (!name.trim() || !dosage.trim()) return;

    const newMedicine: Medicine = {
      id: Date.now().toString(),
      name,
      dosage,
    };
    setMedicines([...medicines, newMedicine]);
    setName('');
    setDosage('');
  };

  const deleteMedicine = (id: string) => {
    setMedicines(medicines.filter(med => med.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quản Lý Thuốc</Text>

      <TextInput
        style={styles.input}
        placeholder="Tên thuốc"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Liều dùng"
        value={dosage}
        onChangeText={setDosage}
      />

      <Button title="Thêm thuốc" onPress={addMedicine} />

      <FlatList
        data={medicines}
        keyExtractor={(item) => item.id}
        style={{ marginTop: 20 }}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDosage}>Liều dùng: {item.dosage}</Text>
            </View>
            <TouchableOpacity onPress={() => deleteMedicine(item.id)}>
              <Text style={styles.deleteBtn}>🗑️</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: {
    borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 6,
  },
  item: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    backgroundColor: '#f0f0f0', padding: 10, marginBottom: 10, borderRadius: 6,
  },
  itemName: { fontSize: 16, fontWeight: 'bold' },
  itemDosage: { fontSize: 14, color: '#666' },
  deleteBtn: { fontSize: 20, color: 'red' },
});
