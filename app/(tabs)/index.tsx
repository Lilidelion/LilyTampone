import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function StockScreen() {
  const indexes = [
    'SET', 'S&P', 'NASDAQ',
    'Dow Jones', 'Shanghai', 'Nikkei',
    'Hang Song', 'TSEC', 'EURO'
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.setContainer}>
        <Text style={styles.indexTitle}>SET</Text>
        <Text style={styles.indexValue}>9,999.99</Text>
        <Text style={styles.indexChange}>+115.23 (0.56%)</Text>
      </View>

      <View style={styles.buttonContainer}>
        {indexes.map((item, index) => (
          <TouchableOpacity key={index} style={styles.button}>
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffc0cb', // hồng
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40
  },
  setContainer: {
    backgroundColor: '#ffff00', // vàng
    width: '90%',
    alignItems: 'center',
    paddingVertical: 30,
    marginBottom: 30,
    borderRadius: 10
  },
  indexTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  indexValue: {
    fontSize: 48,
    fontWeight: 'bold'
  },
  indexChange: {
    fontSize: 20,
    marginTop: 30
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#d3d3d3',
    paddingVertical: 12,
    paddingHorizontal: 20,
    margin: 8,
    borderRadius: 10,
    width: 100,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold'
  }
});