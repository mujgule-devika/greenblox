//array that logs the click chronologically
const buttonClickArray = [];

const changeColor = (id) => {
  buttonClickArray.push(id);

  const clickedBlockId = document.getElementById(id);
  clickedBlockId.style.backgroundColor = "#52AA5E";

  if (buttonClickArray.length >= 6) {
    console.log(`inside while`);
    reverseColor();
  }
}

const reverseColor = () => {

  setInterval(() => {
    if (buttonClickArray.length == 0) {
      clearInterval();
    } else {
      const clickedBlockId = document.getElementById(buttonClickArray.pop());
      clickedBlockId.style.backgroundColor = "#F6F7EB";
    }
  }, 1000);

}