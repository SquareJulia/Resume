import React from "react";
import { Text } from "react-native";
import { styles } from "../../assets/styles/Style";
export const TopLabel = ({ label }: { label: string }) => (
  <Text style={[styles.text, styles.label, { padding: 10 }]}>{label}</Text>
);
