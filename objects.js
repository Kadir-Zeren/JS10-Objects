//* ============================================
//*                 (OBJECTS)
//* =============================================

//? Diziler sirali bellek bolgeleridir.Bu yuzden dizilere
//? indeksleme ile erisebiliriz. Ancak daha karmasik (unstructured)
//? verilerimiz icin  Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapisi kullanilir.
//? Herhangi bir veriyi erismek icin property (key) adi kullanilir.

console.log("*** Objects ***")

//? Array'lerde ilişkisel veriler
const ogrİsim = ["ahmet", "ismet", "saffet"]
const ogrSoyisim = ["yılmaz", "can", "baki"]
const ogrAdres = ["kadıköy", "şebinkarahisar", "seferihisar"]

console.log(`${ogrİsim[0]} - ${ogrSoyisim[0]} - ${ogrAdres[0]} `)

//! 3 farkli yontem ile Object olusturulabilir
//* ---------------------------------------------------------
//* 1- Object literal (En cok tercih edilen yontem)
//* ---------------------------------------------------------

const kisi = {
  isim: "Ahmet", //ilk yazılan key :'den sonrası value
  soyİsim: "Yılmaz",
  kimlikNo: "123123341112",
  maas: 70000,
  ehliyet: true,
  diller: ["english", "arabic", "urartuca"],
  notlar: { mat101: "AA", tur101: "BB", ece101: "AA" },
  dogumTarihi: 1990,
  yasHesapla: function () {
    return new Date().getFullYear() - this.dogumTarihi
  },
}
console.log(kisi)
//! this keywordu iiçerisinde bulundğumuz objeyi refere eder.
//! Global alanda yazılan this ise haliyle global objeyi refere eder.
//! window tarayacının herşeyini barından temel bir objedir.
console.log(this) //? global alanda (Window nesnesi gösterir.)

//*  ---------- OKUMA  ----------------
//? A-) . notasyonu ile erişim
console.log(kisi.isim)
console.log(kisi.maas)
console.log(kisi.diller[2])
console.log(kisi.notlar.ece101) //? AA

console.log(kisi.yasHesapla())
// console.log(new Date().getDay())

//? B-) Square bracket ile erişim
console.log(kisi["kimlikNo"])
console.log(kisi.kimlikNo)
console.log(kisi["notlar"]["tur101"]) //? AA

// const secici = prompt(
//   "kisinin hangi bilgisini ogrenmek istersiniz?isim,soyİsim,kimlikNo,maas,dogum, yasHesapla ??"
// )

// console.log(kisi[secici]) //! square bracket yönteminde key bir degisken olabilir.
// // console.log(kisi.kimlikNo)
// // console.log(kisi.dogum)
// console.log(kisi.secici) //! . notasyonunda key bir degisken olamaz.