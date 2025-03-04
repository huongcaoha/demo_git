let number = prompt("Mời nhập từ 0 - 999 để phiên âm ra tiếng việt :");
number = parseInt(number);
let hundreds = 0 ;
let dozens = 0 ;
let unit = 0 ;
if(number >= 100){
    hundreds = parseInt(number / 100) ;
    number = number % 100 ;
    if(number >= 10){
        dozens = parseInt(number / 10 );
        unit = number % 10 ;
    }else {
        unit = number ;
    }

}else if( number < 100 && number >= 10) {
    dozens = parseInt(number / 10 );
    unit = number % 10 ;
}else {
    unit = number ;
}
 let result = "" ;
 switch(hundreds){
    case 1 : {
        result += "một trăm" ;
        break ;
    }
    case 2 : {
        result += "hai trăm" ;
        break ;
    }
    case 3 : {
        result += "ba trăm" ;
        break ;
    }
    case 4 : {
        result += "bốn trăm" ;
        break ;
    }
    case 5 : {
        result += "năm trăm" ;
        break ;
    }
    case 6 : {
        result += "sáu trăm" ;
        break ;
    }
    case 7 : {
        result += "bảy trăm" ;
        break ;
    }
    case 8 : {
        result += "tám trăm" ;
        break ;
    }
    case 9 : {
        result += "chín trăm" ;
        break ;
    }
 };

 switch(dozens){
    case 0 : {
        if(hundreds !== 0 && unit !== 0){
            result += " linh"
        }
        break ;
    }
    case 1 : {
        result += " mười" ;
        break ;
    }
    case 2 : {
        result += " hai mươi" ;
        break ;
    }
    case 3 : {
        result += " ba mươi" ;
        break ;
    }
    case 4 : {
        result += " bốn mươi" ;
        break ;
    }
    case 5 : {
        result += " năm mươi" ;
        break ;
    }
    case 6 : {
        result += " sáu mươi" ;
        break ;
    }
    case 7 : {
        result += " bảy mươi" ;
        break ;
    }
    case 8 : {
        result += " tám mươi" ;
        break ;
    }
    case 9 : {
        result += " chín mươi" ;
        break ;
    }
 }

 switch(unit){
    case 0 : {
        if(hundreds === 0 && dozens === 0){
            result += "không" ;
        }
        break; 
    }
    case 1 : {
        result += "một" ;
        break ;
    }
    case 2 : {
        result += "hai" ;
        break ;
    }
    case 3 : {
        result += "ba" ;
        break ;
    }
    case 4 : {
        result += "bốn" ;
        break ;
    }
    case 5 : {
        result += "năm" ;
        break ;
    }
    case 6 : {
        result += "sáu" ;
        break ;
    }
    case 7 : {
        result += "bảy" ;
        break ;
    }
    case 8 : {
        result += "tám" ;
        break ;
    }
    case 9 : {
        result += "chín" ;
        break ;
    }
 }
 alert(result + "[" + hundreds + dozens + unit + "]");
 
