export function ConverterToRus (value){
    let text = value;
    let eng=['q','w','e','r','t','y','u','i','o','p','[',']','a','s','d','f','g','h','j','k','l',';','\'','z','x','c','v','b','n','m',',','.','/'];
    let rus=['й','ц','у','к','е','н','г','ш','щ','з','х','ъ','ф','ы','в','а','п','р','о','л','д','ж','э','я','ч','с','м','и','т','ь','б','ю','.'];
    let UpperEngtoRus = ["{","}",":",'"',"<",">","?","~","@","#","$","^","&","|"];
    let UpperRusToEng = ["Х","Ъ","Ж","Э","Б","Ю",",","Ё",'"',"№",";",":","?","/"]
    //                    Х   Ъ   Ж   Э   Б   Ю   ,
    //var re = new RegExp(str2, "gi");
    for (let i=0;i<text.length;i++){
        for (let j=0;j<eng.length;j++){

            if(text[i]==='['){
                text=text.replace("[",'х');
            }

            if (text[i]==='.'){
                text=text.replace(".",'ю');
            }
           
            if (text[i]==='^'){
                text=text.replace("^",':');
                break;
            }
            
            if (text[i]==='$'){
                text=text.replace("$",';');
                break;
            }
            
            if (text[i]==='&'){
                text=text.replace("&",'?');
                break;
            }
            
            if (text[i]==='?'){
                text=text.replace("?",',');
                break;
            }

            if (text[i]==='|'){
                text=text.replace("|",'/');
                break;
            }

            if(text[i]===eng[j]){
                text=text.replace(new RegExp( text[i], "g" ), rus[j]);
            }

            if (text[i]===UpperEngtoRus[j]){
                text=text.replace(new RegExp( text[i], "g" ),UpperRusToEng[j]);
            }

            if (text[i]===eng[j].toUpperCase() && text[i]!==';' && text[i]!=="'" && text[i]!=='[' && text[i]!==']' && text[i]!==','){
                text=text.replace(new RegExp( text[i], "g" ),rus[j].toUpperCase());
            }

        }
    }
    return text;
}
export function ConverterToEng (value){
    let text = value;
    let eng=['q','w','e','r','t','y','u','i','o','p','[',']','a','s','d','f','g','h','j','k','l',';','\'','z','x','c','v','b','n','m',',','.','/'];
    let rus=['й','ц','у','к','е','н','г','ш','щ','з','х','ъ','ф','ы','в','а','п','р','о','л','д','ж','э','я','ч','с','м','и','т','ь','б','ю','.'];
    let UpperEngtoRus = ["{","}",":",'"',"<",">","?","~","@","#","$","^","&","|"];
    let UpperRusToEng = ["Х","Ъ","Ж","Э","Б","Ю",",","Ё",'"',"№",";",":","?","/"]
    //                    Х   Ъ   Ж   Э   Б   Ю   ,
    //var re = new RegExp(str2, "gi");
    for (let i=0;i<text.length;i++){
        for (let j=0;j<eng.length;j++){

            if(text[i]==='х'){
                text=text.replace("х",'[');
            }

            //проблема с клавишами ж э ё б ю и после них
            
            if (text[i]==='?'){
                text=text.replace("?",'&');
                break;
            }
            

            if (text[i]==='/'){
                text=text.replace("/",'|');
                break;
            }

            if (text[i]==='Ж'){
                text=text.replace("Ж",':');
                break;
            }

            if (text[i]==='Э'){
                text=text.replace("Э",'"');
                break;
            }

            if (text[i]==='ё'){
                text=text.replace("ё",'`');
                break;
            }

            if (text[i]==='б'){
                text=text.replace("б",',');
                break;
            }

            if (text[i]==='ю'){
                text=text.replace("ю",'.');
                break;
            }

            if (text[i]==='.'){
                text=text.replace(".",'/');
                break;
            }

            if (text[i]===','){
                text=text.replace(",",'?');
                break;
            }

            if(text[i]===rus[j]){
                text=text.replace(new RegExp( text[i], "g" ), eng[j]);
            }

            if (text[i]===UpperRusToEng[j]){
                text=text.replace(new RegExp( text[i], "g" ),UpperEngtoRus[j]);
            }
            //ЗДЕСЬ ВОЗМОДНО ТОЖЕ
            if (text[i]===rus[j].toUpperCase() && text[i]!=='ж' && text[i]!=="'" && text[i]!=='[' && text[i]!==']' && text[i]!==','){
                text=text.replace(new RegExp( text[i], "g" ),eng[j].toUpperCase());
            }

        }
    }
    return text;
}