// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = new Object();
    firstUser.name = "Monica";
    firstUser.gender = "Female";
    firstUser.age = 17;
    firstUser.email = "monica@dingdong.com";
    firstUser.favoriteColor = ["Yellow", "Pink", "White", "Purple"];
    firstUser.isHavePet = true;
    firstUser.education = new Map();
        firstUser.education.set("sdName", ["SD 01", "Jakarta", 2016]);
        firstUser.education.set("smpName", ["SMP 02", "Jakarta", 2019]);
        firstUser.education.set("smaName", ["SMA 03", "Tangerang", null]);
    firstUser.favoriteRestaurant = new Set();
        firstUser.favoriteRestaurant.add("Bento");
        firstUser.favoriteRestaurant.add("Sushi");
        firstUser.favoriteRestaurant.add("Pancake");
        firstUser.favoriteRestaurant.add("Eggy");
        firstUser.favoriteRestaurant.add("Tempura");
        firstUser.favoriteRestaurant.add("Bento");
        firstUser.favoriteRestaurant.add("Eggy");
        firstUser.favoriteRestaurant.add("Padang");
        firstUser.favoriteRestaurant.add("Tteok");
        firstUser.favoriteRestaurant.add("Sushi");
        firstUser.favoriteRestaurant.add("Sushi");
        

const secondUser = new Object();
secondUser.name = "Wendy";
    secondUser.gender = "Male";
    secondUser.age = 23;
    secondUser.email = "wendy@dingdong.com";
    secondUser.favoriteColor = ["Blue", "Black", "Grey"];
    secondUser.isHavePet = false;
    secondUser.education = new Map();
        secondUser.education.set("sdName", ["SD 02", "Bogor", 2010]);
        secondUser.education.set("sdName", ["SMP 03", "Bogor", 2013]);
        secondUser.education.set("smpName", ["SMA 01", "Surabaya", 2016]);
        secondUser.education.set("smaName", ["Universitas Maju", "Tangerang", null]);
    secondUser.favoriteRestaurant = new Set();
        secondUser.favoriteRestaurant.add("Tempura");
        secondUser.favoriteRestaurant.add("Bento");
        secondUser.favoriteRestaurant.add("Sushi");
        secondUser.favoriteRestaurant.add("Pancake");
        secondUser.favoriteRestaurant.add("Padang");
        secondUser.favoriteRestaurant.add("Katsu");
        secondUser.favoriteRestaurant.add("Geprek");
        secondUser.favoriteRestaurant.add("Pancake");
        secondUser.favoriteRestaurant.add("Eggy");

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];

users.push(firstUser);
users.push(secondUser);


// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};