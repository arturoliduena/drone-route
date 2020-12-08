
const DL = {
  N: "O",
  E: "N",
  S: "E",
  O: "S"
};
const DR = {
  N: "E",
  E: "S",
  S: "O",
  O: "N"
}

const moveDrone = (position) => {
  const direction = position[2]
  switch (direction) {
    case "N":
      position[1] = Number(position[1]) + 1;
      return position;
    case "E":
      position[0] = Number(position[0]) + 1;
      return position;
    case "S":
      position[1] = Number(position[1]) - 1;
      return position;
    case "O":
      position[0] = Number(position[0]) - 1;
      return position;
    default:
      return position;
  }
}

const getOutput = (startPoint, steps) => {
  let startPosition = startPoint.split('');
  const movements = steps.split('');
  const output = movements.reduce((position, move) => {
    const nextPosition = [...position];
    switch (move) {
      case "L":
        nextPosition[2] = DL[nextPosition[2]];
        return nextPosition;
      case "R":
        nextPosition[2] = DR[nextPosition[2]]
        return nextPosition;
      case "M":
        return moveDrone(nextPosition);
      default:
        return nextPosition;
    }
  }, startPosition);
  return output
};

const drones = (input) => {
  const rules = input.split(' ');
  const area = rules.shift().split('');
  let startPoint = null;
  const result = rules.reduce((outputs, current) => {
    if (startPoint) {
      const output = getOutput(startPoint, current);
      startPoint = null;
      return [ ...outputs, output]
    } else {
      startPoint = current;
      return [ ...outputs ];
    };
  }, [])
  return result
};

const test = drones('55 33E L 33E MMRMMRMRRM 12N LMLMLMLMMLMLMLMLMM');
console.log({ test })
/*Output: 
3 3 N 
5 1 E 
1 4 N
*/