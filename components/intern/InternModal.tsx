import React from "react";
import {  Text, TouchableOpacity } from "react-native";
import { styles } from "../Style";
import { BaseItemType } from "../BaseItem";
import { Modal } from "react-native-paper";

export type Project = { name: string; description?: string; details: string[] };
export type Intern = BaseItemType & {
  description?: string;
  details: string[];
  projects?: Project[];
};

export const InternModal = ({
  data,
  isVisible,
  hideModal,
}: {
  data: Intern;
  isVisible: boolean;
  hideModal: () => void;
}) => {
  const { description, details, projects } = data;
  return (
    <Modal visible={isVisible} onDismiss={hideModal} contentContainerStyle={{}}>
      {description && <Text>{description}</Text>}
      {details.map((detail: string) => (
        <Text>{"-" + detail}</Text>
      ))}
      {projects &&
        projects.length > 0 &&
        projects.map((project) => (
          <TouchableOpacity
            style={[styles.card, { flexDirection: "column" }]}
            activeOpacity={0.6}
          >
            <Text>{project.name}</Text>
            {project.description && <Text>{project.description}</Text>}
            {project.details &&
              project.details.map((detail) => <Text>{detail}</Text>)}
          </TouchableOpacity>
        ))}
    </Modal>
  );
};
