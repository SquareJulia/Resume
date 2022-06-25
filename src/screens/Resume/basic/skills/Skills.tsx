import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ProgressBar} from 'react-native-paper';
import styles from 'src/globalStyles';
import {Skill} from './ISkill';
import {colorFor} from 'src/globalStyles';
const Skills = ({
  skills,
  skillLabel,
}: {
  skills: Skill[];
  skillLabel: string;
}) => {
  return (
    <TouchableOpacity style={[styles.card]} activeOpacity={1}>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Text style={[styles.text, styles.sectionText]}>{skillLabel}</Text>
        <View>
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <View style={[styles.viewWithBar]} key={skill.title}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flexWrap: 'nowrap',
                    marginVertical: 10,
                  }}>
                  <Text style={[styles.text]}>{skill.title}</Text>
                  <Text style={[styles.text]}>{`${skill.percentage}%`}</Text>
                </View>

                <ProgressBar
                  color={colorFor(index) as string}
                  progress={(skill.percentage * 1.0) / 100}
                  //   indeterminate={true}
                  style={{height: 7, borderRadius: 4}}
                />
              </View>
            ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default Skills;
