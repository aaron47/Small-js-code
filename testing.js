let dragons = {
  dragon1: {
    number: 1,
    name: "Cloud Dragon"
  },
  dragon2: {
    number: 2,
    name: "Infernal Dragon"
  },
  dragon3: {
    number: 3,
    name: "Ocean Dragon"
  },
  dragon4: {
    number: 4,
    name: "Mountain Dragon"
  }
};

function cycleThroughDrakes(id, prop, value) {
  for(let i = 0; i < dragons.length; i++) {
    Math.floor(Math.random() * dragons[id][prop] + 1);
  }
  return "The " + dragons[id][prop] + " has been slain";
}
cycleThroughDrakes();

