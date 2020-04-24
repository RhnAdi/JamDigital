window.setTimeout ("waktu()");

function waktu() {
    var waktu = new Date();
    setTimeout("waktu()", 1000);
    document.getElementById("jam").innerHTML = waktu.getHours()+":"+waktu.getMinutes()+":"+waktu.getSeconds();
}