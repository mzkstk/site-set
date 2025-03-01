const boxdate = document.getElementById("day").value;
const targetDate = new Date(boxdate);

function calculateRemainingDays() {
  const today = new Date();
  const timeDifference = targetDate.getTime() - today.getTime();

  if (timeDifference > 0) {
    const remainingDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    document.getElementById("remainingDays").textContent = remainingDays + "日";
  } else {
    document.getElementById("remainingDays").textContent = 0;
  }
}

// ページ読み込み時に残り日数を計算
calculateRemainingDays();

// 1秒ごとに残り日数を更新
setInterval(calculateRemainingDays, 1000);
