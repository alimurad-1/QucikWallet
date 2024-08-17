// Setting up the global getRandomValues function
import {getRandomValues} from 'react-native-quick-crypto';
global.getRandomValues = getRandomValues;

// Importing shims from ethers
export * from '@ethersproject/shims';
