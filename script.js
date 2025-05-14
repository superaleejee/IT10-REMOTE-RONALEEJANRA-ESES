document.addEventListener('DOMContentLoaded', () => {
    let count1 = parseInt(localStorage.getItem('count1')) || 0;
    let count2 = parseInt(localStorage.getItem('count2')) || 0;
    let totalCount = parseInt(localStorage.getItem('totalCount')) || 0;

    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const count1Display = document.getElementById('count1');
    const count2Display = document.getElementById('count2');
    const totalCountDisplay = document.getElementById('totalCount');

    // Initialize display with stored values
    count1Display.textContent = count1;
    count2Display.textContent = count2;
    totalCountDisplay.textContent = 'Total Count: ' + totalCount;

    btn1.addEventListener('click', () => {
        count1++;
        totalCount++;
        count1Display.textContent = count1;
        totalCountDisplay.textContent = 'Total Count: ' + totalCount;
        // Save to localStorage
        localStorage.setItem('count1', count1);
        localStorage.setItem('totalCount', totalCount);
    });

    btn2.addEventListener('click', () => {
        count2++;
        totalCount++;
        count2Display.textContent = count2;
        totalCountDisplay.textContent = 'Total Count: ' + totalCount;
        // Save to localStorage
        localStorage.setItem('count2', count2);
        localStorage.setItem('totalCount', totalCount);
    });
});
