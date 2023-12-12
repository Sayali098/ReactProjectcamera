var arr=[1,2,3,4,5,6];
var arr1=[[1,2],[3,4],[5,6],[7]];



function array1(){

    var arr=[1,2,3,4,5,6];
    var arr1=[];
    for(i=0;i<arr.length;i++) 
 {
     arr1[i]=arr[i+1];
 } 
 return arr1;

}



console.log(array1());