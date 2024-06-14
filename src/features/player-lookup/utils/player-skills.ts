import { PlayerSkill } from "../types/player-skill.model";
const customOrder = [
  "Attack",
  "Hitpoints",
  "Mining",
  "Strength",
  "Agility",
  "Smithing",
  "Defence",
  "Herblore",
  "Fishing",
  "Ranged",
  "Thieving",
  "Cooking",
  "Prayer",
  "Crafting",
  "Firemaking",
  "Magic",
  "Fletching",
  "Woodcutting",
  "Runecraft",
  "Slayer",
  "Farming",
  "Construction",
  "Hunter",
  "Overall",
];

export function sortSkills(playerSkillData: PlayerSkill[]) {
  return playerSkillData.sort((a, b) => {
    return customOrder.indexOf(a.name) - customOrder.indexOf(b.name);
  });
}

export function sortAndAssignIcons(playerSkillData: PlayerSkill[]) {
  return playerSkillData
    .map((skill) => ({
      ...skill,
      icon: `/images/skills/${skill.name.toLowerCase()}.svg`, // Convert name to lowercase
    }))
    .sort((a, b) => customOrder.indexOf(a.name) - customOrder.indexOf(b.name));
}
