function solution(n, m) {
    const answer = [];

    function fun_answer1(n, m) {
      const arr1 = [];
      const arr2 = [];

      for (let i = 1; i <= n; ++i) {
        if (n % i === 0) {
          arr1.push(i);
        }
      }

      for (let i = 1; i <= m; ++i) {
        if (m % i === 0) {
          arr2.push(i);
        }
      }

      let answer_1 = 1;
      if (arr1.length < arr2.length) {
        for (let i = arr1.length - 1; i >= 0; --i) {
          for (let j = arr2.length - 1; j >= 0; --j) {
            if (arr1[i] === arr2[j]) {
              answer_1 = arr1[i];
              break;
            }
          }
          if (answer_1 !== 1) {
            break;
          }
        }
      } else {
        for (let i = arr2.length - 1; i >= 0; --i) {
          for (let j = arr1.length - 1; j >= 0; --j) {
            if (arr2[i] === arr1[j]) {
              answer_1 = arr2[i];
              break;
            }
          }
          if (answer_1 !== 1) {
            break;
          }
        }
      }

      return answer_1;
    }

    answer.push(fun_answer1(n, m));

    let mok = fun_answer1(n, m);
    let prev_mok = 1;

    if (mok === 1) {
        answer.push(n * m);
    } else {
        while (mok !== 1) {
            n = n / mok;
            m = m / mok;

            prev_mok *= mok;
            mok = fun_answer1(n, m);
        }

        answer.push(prev_mok * n * m);
    }

    return answer;
}
