const counts = document.querySelectorAll('.count');
const speed = 97;

counts.forEach((counter) => {
    function upData() {
        const target = Number(counter.getAttribute('data-target'));
        const count = Number(counter.innerText);
        let inc = target / speed;

        inc = inc < 1 ? 1 : inc;

        if (count < target) {
            counter.innerHTML = Math.ceil(count + inc);
            setTimeout(upData, 20); 
        } else {
            counter.innerHTML = target;
        }
    }
    upData();
});
