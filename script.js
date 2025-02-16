document.addEventListener('DOMContentLoaded', function () {
    // Счётчик кликов
    let clickCount = 0;
    const clickButton = document.getElementById('clickButton');
    const clickDisplay = document.getElementById('clickCount');
    const message = document.getElementById('message');

    clickButton.addEventListener('click', function () {
        clickCount++;
        clickDisplay.textContent = clickCount;

        if (clickCount >= 15) {
            clickButton.disabled = true;
            message.textContent = "Вы достигли максимального количества кликов!";
        }
    });

    // Таймер с обратным отсчётом
    let countdown = 10;
    const countdownDisplay = document.getElementById('countdownTimer');
    const resetCountdown = document.getElementById('resetCountdown');
    let countdownInterval;

    function startCountdown() {
        countdownInterval = setInterval(function () {
            countdown--;
            countdownDisplay.textContent = countdown;

            if (countdown <= 0) {
                clearInterval(countdownInterval);
                countdownDisplay.textContent = "Время вышло!";
            }
        }, 1000);
    }

    resetCountdown.addEventListener('click', function () {
        clearInterval(countdownInterval);
        countdown = 10;
        countdownDisplay.textContent = countdown;
        startCountdown();
    });

    startCountdown();

    // Таймер с кнопками
    let runningTime = 0;
    let runningInterval;
    const runningDisplay = document.getElementById('runningTimer');
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    const resetButton = document.getElementById('resetButton');

    startButton.addEventListener('click', function () {
        if (!runningInterval) {
            runningInterval = setInterval(function () {
                runningTime++;
                runningDisplay.textContent = runningTime;
            }, 1000);
        }
    });

    stopButton.addEventListener('click', function () {
        clearInterval(runningInterval);
        runningInterval = null;
    });

    resetButton.addEventListener('click', function () {
        clearInterval(runningInterval);
        runningInterval = null;
        runningTime = 0;
        runningDisplay.textContent = runningTime;
    });
});
