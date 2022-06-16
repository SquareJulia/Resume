import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./Style";
import { Skills } from "./Skills";
export type Skill = { title: string; percentage: number };
type BasicInfo = {
  skillLabel: string;
  skills: Skill[];
  awardsLabel: string;
  awards: string[];
};
export const Basic = ({ data }: { data: BasicInfo }) => {
  const { skillLabel, skills, awardsLabel, awards } = data;
  return (
    <ScrollView>
      <Skills skillLabel={skillLabel} skills={skills} />

      <Text style={[styles.text, styles.sectionText]}>{awardsLabel}</Text>
      <View style={styles.cardsContainer}>
        {awards.length > 0 &&
          awards.map((award,index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.5}
              style={[styles.card, { marginHorizontal: 4 }]}
            >
              <Text style={[styles.text, styles.itemLabel]}>{award}</Text>
            </TouchableOpacity>
          ))}
      </View>
    </ScrollView>
  );
};
