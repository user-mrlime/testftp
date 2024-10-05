// selection div 
let ti = document.getElementById("ti");
let nu = document.getElementById("nu");
let lineCanvas = document.getElementById("line");
let ctx = lineCanvas.getContext("2d");
// ----------------
let datas = JSON.parse(localStorage.getItem("datas")) || {};
// functions div
function clear(){
    localStorage.setItem('datas','{}')
    location.reload() // load again .. 
}
function add() {
    let title = ti.value.trim(); 
    let number = parseInt(nu.value);
    if (title && !isNaN(number) && number >= 0 /*&&*/) {
        datas[title] = (datas[title] || 0) + number; 
        localStorage.setItem("datas", JSON.stringify(datas));
        ti.value = '';
        nu.value = '';
        location.reload(); // load again -- 
        createChart();
    } else {
        alert("Error : title and number its founded error !");
    }
}
// create chart Function 
function createChart() {
    let labels = Object.keys(datas);// 'titles'
    let data = Object.values(datas);// 'data_points'
    ctx.clearRect(0, 0, lineCanvas.width, lineCanvas.height);
    new Chart(ctx, {
        type: 'mixed',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'lines    ',
                    data: data,
                    backgroundColor: '#ffffabaa',
                    borderColor: '#b6b600',
                    borderWidth: 1,
                    fill: true,
                    type: 'line',
                },
                {
                    label: 'progress',
                    data: data,
                    backgroundColor: '#ffffab',
                    borderColor: '#b6b600',
                    borderWidth: 3,
                    type: 'bar',
                 },               
            ]
        },
    });
    
}


// -- load chart style -- 
document.addEventListener('DOMContentLoaded', () => {
    createChart();
});
