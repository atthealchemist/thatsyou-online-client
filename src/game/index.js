import { setSceneBackground } from "./drawing";
const createScene = () => {
  const canvas = document.getElementById("stage");
  return canvas.getContext("2d");
};

const draw = (context) => {
  // const canvas = document.getElementById("stage");
  // let context = canvas.getContext("2d");

  setSceneBackground("orange");

  context.strokeStyle = "blue";
  context.strokeRect(5, 5, 50, 50);
  context.lineWidth = 5;
  context.strokeRect(135, 5, 50, 50);
};

const main = () => {
  console.log("Started game!");
  let scene = createScene();

  draw(scene);
};

export { main };
