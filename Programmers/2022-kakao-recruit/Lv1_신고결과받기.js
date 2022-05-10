function solution(id_list, report, k) {
  let reportData = id_list.reduce(
    (acc, cur) => ({ ...acc, [cur]: new Set() }),
    {}
  );
  let answer = id_list.reduce((acc, cur) => ({ ...acc, [cur]: 0 }), {});

  report.forEach((data) => {
    const [reporter, reportee] = data.split(" ");
    reportData[reportee].add(reporter);
  });

  Object.keys(reportData).forEach((reportee) => {
    if (reportData[reportee].size >= k) {
      reportData[reportee].forEach((reporter) => (data[reporter] += 1));
    }
  });

  return Object.values(answer);
}
