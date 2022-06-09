function solution(record) {
  const answer = [];
  const users = {};
  const commands = {
    Enter: (name) => `${name}님이 들어왔습니다.`,
    Leave: (name) => `${name}님이 나갔습니다.`,
  };

  record.forEach((data) => {
    const [cmd, uid, nickname] = data.split(" ");
    if (cmd === "Enter" || cmd === "Change") {
      users[uid] = nickname;
    }
    if (cmd === "Enter" || cmd === "Leave") {
      answer.push([uid, cmd]);
    }
  });

  return answer.map(([uid, cmd]) => commands[cmd](users[uid]));
}
