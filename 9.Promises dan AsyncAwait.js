//9.Promises dan Async/Await
var floppy = require ('floppy');
floppy.load ('disk1',function (data1){
    floppy.prompt('masukan disk 2',function(){
        floppy.load('disk2',function (data2){
            floppy.prompt('masukan disk 3',function(){
                floppy.load('disk 3',function (data3){
                    floppy.prompt('masukan disk 4',function(){
                        floppy.load('disk4',function(data4){

                        });
                    });
                });
            });
        });
    });
});
