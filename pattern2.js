count=5
for(i=1;i<=4;i++){
    str=""
    for(j=count;j>=1;j--){
        str+=" "
    }
    count--
    for(k=1;k<=i;k++){
        str+="*"+" "
}
    console.log(str);
}