const setSceneBackground = (context, color) => {
  context.fillStyle = color;
  context.fillRect(0, 0, context.width, context.height);
};

export { setSceneBackground };
