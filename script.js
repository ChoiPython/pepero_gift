const introCard = document.querySelector(".intro-card");
const giftStage = document.querySelector("#gift-stage");
const messageCard = document.querySelector("#message-card");
const nameInput = document.querySelector("#friend-name");
const recipientName = document.querySelector("#recipient-name");
const messageName = document.querySelector("#message-name");
const stageCaption = document.querySelector("#stage-caption");
const failureCount = document.querySelector("#failure-count");
const randomGiftImage = document.querySelector("#random-gift-image");
const giftImages = ["데이트권.png", "마이멜로디_뺴빼로.png", "몬치치.png", "시사_빼빼로.png"];
let failedAttempts = 0;

function showGiftStage() {
  const name = nameInput.value.trim() || "친구";
  recipientName.textContent = name;
  messageName.textContent = name;
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
    stageCaption.textContent = "앗, 열기에 실패했어요! 다시 눌러봐!";
    stageCaption.classList.add("failure");
    failureCount.textContent = `실패 횟수: ${failedAttempts}회`;
    return;
  }

  const selectedGift = giftImages[Math.floor(Math.random() * giftImages.length)];
  randomGiftImage.src = encodeURI(selectedGift);
  randomGiftImage.alt = `${selectedGift.replace(".png", "")} 선물`;
  giftStage.classList.add("is-hidden");
  messageCard.classList.remove("is-hidden");
});
document.querySelector("#again-button").addEventListener("click", showGiftStage);
nameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") showGiftStage();
});
