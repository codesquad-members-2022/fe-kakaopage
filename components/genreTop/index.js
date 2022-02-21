import { createBox } from "../box/index.js";
import { createWorkSmall } from "../workSmall/index.js";

const smallWork = createWorkSmall({
  str1: "⭐",
  str2: "10.0",
  title: "유리의 성",
  views: 42.9,
  status: "up",
});

export function createGenreTop({ title }) {
  return createBox({ title, contents: smallWork.repeat(5) });
}
