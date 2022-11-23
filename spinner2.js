const spinners = ["|", "/", "-", "\\", "|"];
const spinner = function (spinners) {
  let timer = 0;
  for (let spin of spinners) {
    setTimeout(() => process.stdout.write("\r" + spin + "   ") , timer);
    timer += 100;
  }
};

spinner(spinners);