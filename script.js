document.addEventListener('DOMContentLoaded', () => {
    let count1 = parseInt(localStorage.getItem('count1')) || 0;
    let count2 = parseInt(localStorage.getItem('count2')) || 0;

    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const count1Display = document.getElementById('count1');
    const count2Display = document.getElementById('count2');
    const totalCountDisplay = document.getElementById('totalCount');

    let totalCount = count1 + count2;

    count1Display.textContent = count1;
    count2Display.textContent = count2;
    totalCountDisplay.textContent = 'Total Count: ' + totalCount;

    btn1.addEventListener('click', () => {
        count1++;
        localStorage.setItem('count1', count1);
        count1Display.textContent = count1;

        totalCount = count1 + count2;
        totalCountDisplay.textContent = 'Total Count: ' + totalCount;
    });

    btn2.addEventListener('click', () => {
        count2++;
        localStorage.setItem('count2', count2);
        count2Display.textContent = count2;

        totalCount = count1 + count2;
        totalCountDisplay.textContent = 'Total Count: ' + totalCount;
    });
});
