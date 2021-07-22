import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

interface CustomIputProps {
  inputLabel: string;
  input: string;
  setInput: () => void;
  inputStyles?: object;
}

const CustomInput = ({
  inputLabel,
  input,
  setInput,
  inputStyles,
}: CustomIputProps) => {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{inputLabel}</Text>
      <TextInput
        style={styles.input}
        placeholder={inputLabel}
        value={input}
        onChangeText={setInput}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  row: {
    margin: 10,
  },
  label: {
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: 'white',
    padding: 5,
    marginVertical: 5,
    height: 40,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 5,
  },
});
