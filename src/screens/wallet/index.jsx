import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {ethers} from '../../utils/custom-ethers';

import {useNavigation} from '@react-navigation/native';

import Button from '../components/button';
import RecoveryPhraseInput from '../components/phraseInput';
import Gap from '../components/gap';

const WalletCreationPage = () => {
  const provider = new ethers.JsonRpcProvider(process.env.JSON_RPC_PROVIDER);
  const navigation = useNavigation();

  const [recoveryPhrase, setRecoveryPhrase] = useState('');
  const [error, setError] = useState({
    status: false,
    message: '',
  });

  const createWallet = () => {
    try {
      setError({
        status: false,
        message: '',
      });
      const startTime = performance.now();
      const mnemonic = ethers.Wallet.createRandom().mnemonic;
      const wallet = ethers.HDNodeWallet.fromMnemonic(mnemonic);
      wallet.connect(provider);
      const endTime = performance.now();
      const runningTimeMs = endTime - startTime;

      navigation.navigate('wallet-values', {
        wallet: wallet,
        timeTaken: runningTimeMs,
      });
    } catch (error) {
      setError({
        status: true,
        message: error.message,
      });
    }
  };

  const importWallet = () => {
    try {
      setError({
        status: false,
        message: '',
      });
      const startTime = performance.now();
      const wallet = ethers.HDNodeWallet.fromPhrase(recoveryPhrase);
      wallet.connect(provider);

      const endTime = performance.now();
      const runningTimeMs = endTime - startTime;

      navigation.navigate('wallet-values', {
        wallet: wallet,
        timeTaken: runningTimeMs,
      });
    } catch (error) {
      setError({
        status: true,
        message: error.message,
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button
          text={'Create a New Wallet'}
          handleOnPress={() => {
            createWallet();
          }}
        />
        <Gap gap={'10%'} />
        <Text style={styles.label}>OR</Text>
        <Gap gap={'10%'} />
        <RecoveryPhraseInput
          recoveryPhrase={recoveryPhrase}
          setRecoveryPhrase={setRecoveryPhrase}
        />
        <Gap gap={'5%'} />
        <Button
          text={'Import an existing one'}
          handleOnPress={() => {
            importWallet();
          }}
        />
        <Gap gap={'20%'} />
        {error.status && (
          <Text
            style={[
              styles.label,
              {
                color: 'red',
              },
            ]}>
            {error.message}
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default WalletCreationPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
