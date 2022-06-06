function solution(new_id) {
  const id = new_id
    .toLowerCase()
    .replace(/[^\w-.]/g, "")
    .replace(/\.+/g, ".")
    .replace(/^\.|\.$/, "")
    .padEnd(1, "a")
    .slice(0, 15)
    .replace(/\.$/, "");

  return id.padEnd(3, id[id.length - 1]);
}
