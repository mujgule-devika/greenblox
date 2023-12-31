//array that logs the click chronologically
const buttonClickArray = [];
//variable to track the interval id for resetting
let intervalID;

const changeColor = (id) => {
  buttonClickArray.push(id);

  const clickedBlockId = document.getElementById(id);
  clickedBlockId.style.backgroundColor = "#52AA5E";

  if (buttonClickArray.length >= 6) {
    reverseColor();
  }


}

const reverseColor = () => {

  intervalID = setInterval(() => {
    if (buttonClickArray.length == 0) {
      clearInterval(intervalID);
      return;
    } else {
      const clickedBlockId = document.getElementById(buttonClickArray.pop());
      clickedBlockId.style.backgroundColor = "#F6F7EB";
    }
  }, 800);

} 