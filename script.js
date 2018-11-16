arr=['hello','bye','tushar'];
cnt=0;
n=3
p=5
str=arr[cnt];
word1=[];
var qwerty='';
for(var element in str) 
        {
            qw=`<t id=${element}>`+str[element]+'</t>'
            word1.push(qw);
        } 
        document.getElementById('test').innerHTML=word1.join('');
document.getElementById('t1').onkeyup=function(){abc()};
if(p==0)
{
    console.log('DONE')
}

var count=0; // Count in Array of Letters
merac=0

function changeGreen(count)
{
document.getElementById(count).style.color='green';
merac++
console.log(merac)
}

function changeRed(count)
{
    document.getElementById(count).style.color='red';
}
l2=0;

function check(){
    if(merac==word1.length)
    {
        cnt++;
        str=arr[cnt];
        count=0;
        merac=0
        l2=0
        word1=[]
    for(var element in str) 
        {
            qw=`<t id=${element}>`+str[element]+'</t>'
            word1.push(qw);
        }   
        document.getElementById('test').innerHTML=word1.join('');
        document.getElementById('t1').value=''
    }
}

function abc(){
    word=document.getElementById('t1').value;
    l2++;
    qwerty=word[word.length-1];
    l1=word.length;
    if(l1==count+1)
    {    
        if(str[count]===qwerty)
        {
                count++;
                changeGreen(count-1);
        }
        else
        {
            count++;
            changeRed(count-1);
        }
    }
    else
    {
        document.getElementById(count-1).style.color='black';
        count--;
    }
    check();
}

