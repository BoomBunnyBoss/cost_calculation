function calcprice() {
    land  = document.getElementById('land').value;
    switch (land) {
    case "agricultural":
            price = 1000;
            break
       case "dwelling":
            price = 1500;
            break   
        case "historica":
            price = 2000;
            break   
       default:
            price = 1000;
            break
    }
    shirina  = document.getElementById('shirina').value;
    dlina  = document.getElementById('dlina').value;
    if(shirina == ""){
        alert("Вы не указали ширину");
        }
        else if(dlina == ""){
        alert("Вы не указали длину");
        }
         else if(dlina == ""){
        alert("Вы не указали длину");
        
    } 
    else {
        ploschad = parseFloat (shirina)* parseFloat (dlina);
        document.getElementById('ploschad').innerHTML = "Площадь равна: "+ ploschad +" кв. м.";
    stoimost = ploschad*price;
    document.getElementById('stoimost').innerHTML = "Стоимость равна: "+ stoimost +" грн.";
    }
}