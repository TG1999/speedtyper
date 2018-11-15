arr=['hello','bye','tushar'];
str='hello';
word1=[];
for(var element in str)
{
word1.push(str[element])
}
var qwerty='';
document.getElementById('test').innerHTML=word1.join('');
document.getElementById('t1').onkeyup=function(){abc()};
var count=0;

function changeGreen(count)
{
word1[count]='<t style="color:green">'+word1[count]+'</t>'
document.getElementById('test').innerHTML=word1.join('');
}
function changered(count)
{
word1[count]='<t style="color:red">'+word1[count]+'</t>'
document.getElementById('test').innerHTML=word1.join('');
}
l2=0;
function abc(){
word=document.getElementById('t1').value;
l2++;
qwerty=word[word.length-1];
l1=word.length;
if(l1==count+1){    
if(str[count]===qwerty){
    console.log(word1[count]);
        count++;
        changeGreen(count-1);
        console.log('green');    
    }
    else{
        count++;
        changered(count-1);
        console.log('red');
    }
}
else{
    count--;
}
console.log(l1);
console.log(count);
}

