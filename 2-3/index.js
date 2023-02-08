const fs = require("fs");
const { generateText } = require("./generateText");

const main = async () => {
  try {
    const users = [];
    const nameText = await fs.promises.readFile("./names.txt", "utf8");
    const numbersText = await fs.promises.readFile("./numbers.txt", "utf8");
    nameText.split("\r\n").forEach((user) => {
      let split = user.split("-");
      users.push({ id: +split[0], name: split[1], numbers: [] });
    });
    numbersText.split("\r\n").forEach((number) => {
      let split = number.split("-");
      let usersFind = users.findIndex((user) => user.id == split[0]);
      if (usersFind > -1) users[usersFind].numbers.push(split[1]);
    });

    await fs.promises.writeFile("./result.txt", generateText(users));
    console.log("Done!");
  } catch (error) {
    console.log(error);
  }
}
main();

