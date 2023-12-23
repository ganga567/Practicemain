function percentage(){
    var percentage=79.2
    if (percentage >=80 && percentage <=100){
        for (var n=1;n<=5;n++){
        document.write("A GRADE <br>")
    }
}
else if (percentage >=61 && percentage <80){
    for (var n=1;n<=3;n++){
    document.write("B GRADE <br>")
}

}
else if (percentage >=35 && percentage <60){
    for (var n=1;n<=2;n++){
    document.write("C GRADE <br>")

}
}
else if (percentage <35){
    document.write("CONHRAGULATIONS YOU ARE FAILED <br>")
}
}



       
