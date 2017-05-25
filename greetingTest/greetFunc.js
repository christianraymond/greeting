
function greets(name, language){
   if(language === 'english'){
       return " Hello " + name;
   }

   if(language === 'french'){
       return " Salut " + name
   }

   if(language === 'xhosa'){
       return " Molo " + name
   }
}

// var languages = ' Hello, Salut, Molo';
// var splitedLang = languages.split(',')
// var storedLang = [];

// function greets(name, language){

//     for(var x = 0 ; x < splitedLang.length; x++){
//         storedLang.push(splitedLang[x]);
//
//         if(storedLang[x].includes('H')){
//            return(storedLang[x] + ' ' + name);
//         };
//
//         if(storedLang[x].includes('S')){
//             return(storedLang[x] + ' ' + name)
//         };
//
//         if(storedLang[x].includes('M')){
//             return(storedLang[x] + ' ' + name)
//         };
//     }
// };
