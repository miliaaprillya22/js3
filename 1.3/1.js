const cekHariKerja =(day)=>{
    return new Promise ((resolve,reject)=>{
        setTimeout (()=>{
            const dataDay =['Senin','Selasa','Rabu','Kamis','Jumat']
            let cek = dataDay.find((item) => {
                return item == day
            })
            cek ? resolve(cek) : reject(new Error('Hari ini bukan hari Kerja'))
        },3000)
    })
}
 //then - catch 
//Sebuah object Promise memiliki metode/ fungsi then dan catch //
//yang masing-masing memiliki fungsi untuk mengolah hasil sukses dan gagal.
 cekHariKerja("minggu")
   .then ((cek1)=>{ // => sukses (menangkap nilai dari resolve)
        console.log(cek1)
  })
   .catch((error)=>{ // => Gagal (digunakan untuk handle dari reject)
      console.log(error.message)
  })


  //try - catch 
// Sama menguji dan mengolah hasil apakah terjadi error atau tidak 
const showHariKerja = async(res) => {
    try {
      result = await cekHariKerja(res)
      console.log(result) // => Menangakap nilai resolve jika berhasil
    } catch(error) {     // => menampilkan pesan error  
      console.log(error.message)
    }
}

showHariKerja('JUMAT');