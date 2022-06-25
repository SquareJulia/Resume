import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../globalStyles';
import {colorFor} from '../globalStyles';
export type BaseItemType = {
  //   icon: ImageSourcePropType;
  //   title: string;
  from: string;
  to: string;
  where: string;
  what: string;
};

const BaseItem = ({
  data,
  id,
  showDetail,
  activeOpacity,
}: {
  data: BaseItemType;
  id: number;
  showDetail?: (arg: BaseItemType) => void;
  activeOpacity?: number;
}) => {
  //TODO: showDetail
  const {from, to, where, what} = data;
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={showDetail ? () => showDetail(data) : () => {}}
      activeOpacity={activeOpacity ? activeOpacity : 0.2}>
      <View style={[styles.cardImage, {backgroundColor: colorFor(id)}]} />
      <View style={styles.cardExtra}>
        <Text style={[styles.text]}>{what}</Text>
        <Text style={[styles.text, styles.cardExtraSmall]}>
          {`${from}-${to} @ ${where}`}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default BaseItem;
