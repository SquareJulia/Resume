import React from 'react';
import {Text} from 'react-native';
import styles from '../globalStyles';
const TopLabel = ({label}: {label: string}) => (
  <Text style={[styles.text, styles.label, {padding: 10}]}>{label}</Text>
);
export default TopLabel;
