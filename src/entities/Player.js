class Player {
  constructor(name, score = 0, active = false) {
    this.name = name;
    this.active = active;
    this.score = score;
  }

  setInactive() {
    this.active = false;
  }
}

export { Player };
