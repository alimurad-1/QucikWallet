/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Pressable, SafeAreaView, Text} from 'react-native';
import {ethers} from './src/utils/custom-ethers';
function App() {
  const provider = new ethers.JsonRpcProvider(
    'https://eth-mainnet.g.alchemy.com/v2/KJoiczv54FomqIO19WH2rtj96iYiF_zD',
  );
  const createWallet = () => {
    const mnemonic = ethers.Wallet.createRandom().mnemonic;
    const wallet = ethers.HDNodeWallet.fromMnemonic(mnemonic);
    wallet.connect(provider);
    console.log(wallet);
  };

  return (
    <SafeAreaView>
      <Pressable
        onPress={() => {
          createWallet();
        }}>
        <Text>Hello World</Text>
      </Pressable>
    </SafeAreaView>
  );
}

export default App;
