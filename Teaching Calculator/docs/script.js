function calculateExperience() {
    const nameInput = document.getElementById("nameInput");
    const name = nameInput.value.trim().toLowerCase();
    const result = document.getElementById("result");
    const progressBar = document.getElementById("progressBar");

    if (!name) {
        result.textContent = "Please enter your name.";
        result.style.color = "red";
        return;
    }

    result.style.color = "";

    const predefined = {
        "saurabh pathak": 98,
        "saurabh": 98,
        "prince": 90,
        "praveen tiwari": 89,
        "praveen": 89,
        "amit": 78,
        "subhanshu": 65,
        "gaurav": 99,
        "avan gupta": 75,
        "avan": 75,
        "ajit parihar": 82,
        "ajit": 80,
        "zaki ahmed": 82,
        "zaki": 82,
        "abhisek mani": 95,
        "naziya": 65,
    };

    let percentage;
    if (predefined[name]) {

        percentage = predefined[name];
    } else {

        const relatedName = Object.keys(predefined).find((key) => name.includes(key.split(" ")[0]));
        if (relatedName) {

            const basePercentage = predefined[relatedName];
            percentage = Math.floor(Math.random() * 11) + (basePercentage - 5); // ±5 range
        } else if (sessionStorage.getItem(name)) {
            percentage = parseInt(sessionStorage.getItem(name), 10);
        } else {
            percentage = Math.floor(Math.random() * 51) + 50; // Random percentage between 50 and 100
            sessionStorage.setItem(name, percentage); // Store the random percentage
        }
    }

    let currentPercentage = 0;
    progressBar.style.width = "0%";
    progressBar.textContent = "0%";

    const interval = setInterval(() => {
        if (currentPercentage >= percentage) {
            clearInterval(interval);
        } else {
            currentPercentage++;
            progressBar.style.width = `${currentPercentage}%`;
            progressBar.textContent = `${currentPercentage}%`;
        }
    }, 20);

    result.textContent = `Hi ${name.charAt(0).toUpperCase() + name.slice(1)}, your teaching experience is ${percentage}%.`;
}