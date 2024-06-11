var number = function (busStops) {
  let a1 = 0,
    a2 = 0;
  for (let i = 0; i < busStops.length; i++) {
    a1 += busStops[i][0];
    a2 += busStops[i][1];
  }
  return a1 - a2;
};
