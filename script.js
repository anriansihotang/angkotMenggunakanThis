// * Membuat Object Angkot
function Angkot(sopir,trayek,penumpang,kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang){
        if(this.penumpang.length == 0){
            this.penumpang.push(namaPenumpang);
            return this.penumpang;
        }else{
            for(var i = 0 ;i <this.penumpang.length;i++){
                if(this.penumpang[i] == undefined){
                    this.penumpang[i] = namaPenumpang;
                    return this.penumpang;
                }else if(this.penumpang[i] == namaPenumpang){
                    alert(namaPenumpang + ' sudah ada di dalam angkot!');
                    return this.penumpang;
                }else if(i == this.penumpang.length - 1){
                    this.penumpang.push(namaPenumpang);
                    return this.penumpang;
                }
            }
        }
    }

    this.penumpangTurun = function(namaPenumpang,bayar){
        if(this.penumpang.length === 0){
            alert('angkot masih kosong');
            return false;
        }

        for(var i = 0; i < this.penumpang.length;i++){
            if(this.penumpang[i] == namaPenumpang){
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }else if(i == this.penumpang.length - 1){
                alert(namaPenumpang + ' tidak ada di dalam angkot')
                return this.penumpang;
            }
        }
    }
}

var angkot1 = new Angkot('anrian',['curug','pos 2'],[],0);

