const introCard = document.querySelector(".intro-card");
const giftStage = document.querySelector("#gift-stage");
const messageCard = document.querySelector("#message-card");
const nameInput = document.querySelector("#friend-name");
const recipientName = document.querySelector("#recipient-name");
const stageCaption = document.querySelector("#stage-caption");
const failureCount = document.querySelector("#failure-count");
const randomGiftImage = document.querySelector("#random-gift-image");
let failedAttempts = 0;

function showGiftStage() {
  const name = nameInput.value.trim() || "친구";
  recipientName.textContent = name;
  introCard.classList.add("is-hidden");
  messageCard.classList.add("is-hidden");
  giftStage.classList.remove("is-hidden");
  stageCaption.textContent = "상자를 누르면 마음이 도착해요";
  stageCaption.classList.remove("failure");
  failedAttempts = 0;
  failureCount.textContent = "실패 횟수: 0회";
}

document.querySelector("#start-button").addEventListener("click", showGiftStage);
document.querySelector("#gift-box").addEventListener("click", () => {
  if (Math.random() >= 0.2) {
    failedAttempts += 1;
    const giftBox = document.querySelector("#gift-box");
    giftBox.classList.remove("failure-burst");
    void giftBox.offsetWidth;
    giftBox.classList.add("failure-burst");
    stageCaption.textContent = "앗, 열기에 실패했어요! 다시 눌러봐!";
    stageCaption.classList.add("failure");
    failureCount.textContent = `실패 횟수: ${failedAttempts}회`;
    window.setTimeout(() => giftBox.classList.remove("failure-burst"), 700);
    return;
  }

  const selectedGift = "데이트권.png";
  randomGiftImage.src = encodeURI(selectedGift);
  randomGiftImage.alt = "데이트 1회권 선물";
  giftStage.classList.add("is-hidden");
  messageCard.classList.remove("is-hidden");
});
nameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") showGiftStage();
});
