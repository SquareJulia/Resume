import * as types from "../../constants/ActionsType";
import { Skill } from "src/screens/Resume/basic/skills/ISkill";
const addItem = (skill: Skill) => {
  return {
    type: types.ADD_ITEM,
    skill: skill,
  };
};

export {addItem};