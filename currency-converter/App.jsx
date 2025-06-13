import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Platform, Alert } from 'react-native';

export default function App() {
  const [usd, setUsd] = useState('1,00');
  const [brl, setBrl] = useState('5,54');
  const TAXA = 5.54;

  const converter = () => {
    const valor = parseFloat(usd.replace(',', '.'));
    if (!isNaN(valor)) {
      const resultado = (valor * TAXA).toFixed(2).replace('.', ',');
      setBrl(resultado);
    } else {
      Alert.alert(
        "Atenção",
        "Por favor, insira um valor.",
        [
          { text: "OK", onPress: () => setUsd('1,00') }
        ]
      );
      setBrl('0,00');
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <Text style={styles.title}><Text style={styles.titleBold}>Dollar</Text><Text style={styles.titleLight}>To</Text><Text style={styles.titleBold}>Real</Text></Text>
          <View style={styles.card}>
            <Text style={styles.label}>USD</Text>
            <TextInput
              style={styles.input}
              value={usd}
              onChangeText={setUsd}
              keyboardType="numeric"
              placeholder="0,00"
              placeholderTextColor="#4A4459"
            />
            <Text style={styles.label}>BRL</Text>
            <Text style={styles.result}>{brl}</Text>
            <View style={styles.divider} />
          </View>
          <TouchableOpacity style={styles.button} onPress={converter}>
            <Text style={styles.buttonText}>Converter</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DED8E1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 32,
    textAlign: 'center',
  },
  titleBold: {
    fontWeight: 'bold',
    color: '#4A4459',
    fontFamily: 'Roboto',
  },
  titleLight: {
    color: '#4A4459',
    fontWeight: 'normal',
    fontFamily: 'Roboto',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#6750A4',
    padding: 28,
    width: 300,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 8,
    marginBottom: 4,
    fontFamily: 'Roboto',
  },
  input: {
    width: '100%',
    height: 40,
    paddingHorizontal: 12,
    fontSize: 18,
    marginBottom: 12,
    textAlign: 'center',
    color: '#333',
    backgroundColor: '#E7E0EC',
    borderRadius: 8,
    fontFamily: 'Roboto',
  },
  result: {
    fontSize: 22,
    color: '#7c3aed',
    fontWeight: 'bold',
    marginBottom: 8,
    fontFamily: 'Roboto',
  },
  divider: {
    width: '90%',
    height: 2,
    backgroundColor: '#c4b5fd',
    marginVertical: 10,
    marginTop: -5,
  },
  button: {
    backgroundColor: '#4A4459',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 32,
    width: 300,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'Roboto',
  },
});