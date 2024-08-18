import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

const RecoveryPhraseInput = ({recoveryPhrase, setRecoveryPhrase}) => {
  const handleInputChange = text => {
    setRecoveryPhrase(text);
  };

  return (
    <TextInput
      style={styles.input}
      placeholder="Enter your 12 or 24-word recovery phrase"
      placeholderTextColor={'black'}
      value={recoveryPhrase}
      onChangeText={handleInputChange}
      multiline={true}
      autoCorrect={false}
      autoCapitalize="none"
      secureTextEntry={true} // Use this if you want to hide the text for security
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '90%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    height: 100, // Adjust height based on how many lines you expect
    textAlignVertical: 'top', // Ensure text starts at the top
    color: 'black',
  },
});

export default RecoveryPhraseInput;
