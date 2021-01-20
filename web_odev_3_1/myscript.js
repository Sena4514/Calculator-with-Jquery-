function ekle(sayi) {
    $(".textview").val($(".textview").val() + sayi);
}
function esittir() {
    $(".textview").val(eval($(".textview").val()));
}
function temizle() {
    $(".textview").val('');
}
function geriAl() {
    deger = $(".textview").val();
    $(".textview").val(deger.substring(0, deger.length - 1));
}