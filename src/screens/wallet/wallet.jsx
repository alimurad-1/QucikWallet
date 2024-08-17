import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useReducer, useState} from 'react';
import Button from '../components/button';
import Gap from '../components/gap';
import {useNavigation, useRoute} from '@react-navigation/native';

const WalletValues = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const {wallet, timeTaken} = route.params;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Gap gap={'20%'} />
        <Text style={styles.label}>Time taken in wallet creation</Text>
        <Text style={styles.value}>{timeTaken} ms</Text>

        <Gap gap={'10%'} />
        <Text style={styles.label}>Wallet Address</Text>
        <Text style={styles.value}>{wallet.address}</Text>
        <Gap gap={'10%'} />
        <Text style={styles.label}>Recovery Phrase</Text>
        <Text style={styles.value}>{wallet.mnemonic.phrase}</Text>
        <Gap gap={'10%'} />
        <Button
          text={'Go Back'}
          handleOnPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default WalletValues;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  label: {
    // textAlign: 'center',
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  value: {
    // textAlign: 'center',
    marginBottom: 10,
    fontSize: 16,
    color: 'blue',
  },
});
