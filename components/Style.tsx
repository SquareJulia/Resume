import React from "react";
import { ColorValue, StyleSheet } from "react-native";
const colors: ColorValue[] = [
  "rgb(164, 113, 246)",
  "rgb(133, 219, 197)",
  "rgb(242, 95, 91)",
  "rgb(244, 213, 72)",
];
export const colorFor: (id: number) => ColorValue = (id) =>
  colors[id % colors.length];
export const styles = StyleSheet.create({
  outer: {
    backgroundColor: "rgb(19, 16, 21)",
    padding: 15,
    flex: 1,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
    marginTop: 15,
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-start",
  },
  item: {
    flex: 1,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: "1%",
    // alignSelf: "flex-start",
    textAlign: "center",
  },
  selectedItem: {
    opacity: 0.5,
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  itemLabel: {
    fontSize: 14,
    fontWeight: "500",
    alignSelf: "center",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "left",
    marginBottom: 10,
    fontSize: 30,
  },
  text: {
    color: "rgb(211, 210, 214)",
  },
  sectionText: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "300",
  },
  card: {
    margin: 10,
    borderRadius: 18,
    backgroundColor: "rgb(30,31,37)",
    padding: 16,
    flexDirection: "row",
  },
  cardImage: {
    flex: 1,
    borderRadius: 16,
    aspectRatio:1
  },
  cardExtra: {
    marginLeft: 15,
    flex: 5,
    justifyContent: 'center'
  },
  cardExtraSmall: {
    marginTop: 10,
    color: "rgb(118, 117, 124)",
  },
  viewWithBar: {
    marginTop: 8,
    padding: 4,
  },
  detail:{
    padding:12
  }
});
