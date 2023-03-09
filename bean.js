const bean = 0.5;

const createCan = function () {
  const can = {
    width: 7.5,
    height: 12.5,
  };

  return can;
};

const can = createCan();

function canVolume(canA) {
  let volume = Math.PI * (canA.width / 2) ** 2 * canA.height;
  return volume;
}

canVolume(can);

console.log;
