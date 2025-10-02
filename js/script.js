document.addEventListener('DOMContentLoaded', function() {
    const dDayElement = document.getElementById('d-day');
    if (dDayElement) {
        const deadline = new Date('2025-11-06T23:59:59');

        function updateCountdown() {
            const now = new Date();
            const timeRemaining = deadline - now;

            if (timeRemaining <= 0) {
                dDayElement.innerHTML = "마감되었습니다";
                return;
            }

            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            dDayElement.innerHTML = `${days}일 ${hours}시간 ${minutes}분 ${seconds}초 남음`;
        }

        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
});
