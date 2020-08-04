const TASK_VALUE = 0.05
const VOUCHER_ARKADEMY5 = 0.5
const VOUCHER_DITRAKTIRDEMY = 0.6
const Min_belanja = 25000


function ArkFood(harga,voucher,jarak,pajak){
    harga = harga < Min_belanja ? 0 : harga
    voucher == "ARKADEMY5"  ? voucher = harga - (harga- VOUCHER_ARKADEMY5 * harga): voucher == "DITRAKTIRDMY" ? voucher = harga - (harga - VOUCHER_DITRAKTIRDEMY * harga) || false : harga
    BiayaAntar = jarak > 2 ? 5000+(3000*(jarak-2)): jarak
    pajak = pajak ? TASK_VALUE * harga : 0
    subtotal = voucher+BiayaAntar+pajak 
    
    console.log("-----------ARKFOOD----------")
    console.log("Harga :",harga)
    console.log("Voucher :",voucher)
    console.log("Pajak :", pajak)
    console.log("Biaya antar :" +BiayaAntar)
    console.log("----------------------------")
    console.log("Subtotal :", subtotal)
}
ArkFood(75000,"ARKADEMY5",5,true)