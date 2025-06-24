const targetDate = new Date('2025-01-01T00:00:00Z');

function calculateTimeLeft() {
  const currentDate = new Date();
  const timeLeft = targetDate - currentDate;
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('countdown').innerHTML = 
    `${days}d ${hours}h ${minutes}m ${seconds}s`;

    setTimeout(calculateTimeLeft, 1000);
}

calculateTimeLeft(); 