const adviceId = document.getElementById ("advice-id");
const adviceText = document.getElementById ("advice-text");
const adviceBtn = document.getElementById ("advice-btn");

const fetchData = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    const {slip} = data;
    adviceId.innerHTML = slip.id;
    adviceText.innerHTML = slip.advice;
};

fetchData();
adviceBtn.addEventListener("click", fetchData);