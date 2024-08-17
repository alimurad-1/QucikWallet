import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Timer = ({start, stop}) => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (start && !isRunning) {
      startTimer();
    } else if (stop && isRunning) {
      stopTimer();
    }
  }, [start, stop]);

  const startTimer = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const formatTime = time => {
    const milliseconds = `0${(time % 1000) / 10}`.slice(-2);
    const seconds = `0${Math.floor(time / 1000) % 60}`.slice(-2);
    const minutes = `0${Math.floor(time / 60000) % 60}`.slice(-2);
    const hours = `0${Math.floor(time / 3600000)}`.slice(-2);
    console.log(`${hours}:${minutes}:${seconds}.${milliseconds}`);
    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
  };

  return <Text style={styles.timerText}>{formatTime(seconds)}</Text>;
};

const styles = StyleSheet.create({
  timerText: {
    fontSize: 48,
    fontWeight: 'bold',
  },
});

export default Timer;
