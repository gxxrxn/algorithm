function solution(fees, records) {
  const [min, minFee, base, baseFee] = fees;
  let data = {};

  records.forEach((record) => {
    const [time, car, inout] = record.split(" ");

    if (!(car in data)) {
      data[car] = [];
    }

    if (inout === "IN") {
      data[car].push([time]);
    } else {
      data[car][data[car].length - 1].push(time);
    }
  });

  let answer = [];

  Object.keys(data)
    .sort()
    .forEach((car) => {
      let money = minFee;
      const time = data[car].reduce(
        (acc, cur) => acc + (h2m(cur[1] ? cur[1] : "23:59") - h2m(cur[0])),
        0
      );
      if (min < time) {
        money += Math.ceil((time - min) / base) * baseFee;
      }
      answer.push(money);
    });

  return answer;
}

const h2m = (time) => {
  const [hour, min] = time.split(":");
  return hour * 60 + min * 1;
};
