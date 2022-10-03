//8.Callbacks
function oddOreven(angka,callback){
    const result = (angka % 2 == 0) ? 'genap' : 'ganjil';
    callback(angka,result);
}
oddOreven(48,(angka,result) => {
    console.log(angka + 'adalah' + result);
});