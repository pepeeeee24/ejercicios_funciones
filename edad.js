function clasificacion(edad){
    if(edad<13){
        return "niño";
    }
    if(13<edad && edad< 18){
return "adolescente";

    }else if (19<edad && edad<64){
        return"adulto";
    }
else if(edad>54){
    return "viejo";
}
}
console.log("12-->"+ clasificacion(12)); 