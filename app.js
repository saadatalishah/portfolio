
console.log(getinfo);
var info={
    name:'Saadat Ali',
    father:'S.Muhammed Ali',
    Cnic: '0022-333222-3',
    religion:'Islam'
}
var x=info.name;
var x1=info.father;
var x2=info.Cnic;
var x3=info.religion;
var getinfo=document.getElementById('info').innerHTML =x;
var getinfo2=document.getElementById('info1').innerHTML=x1;
var getinfo3=document.getElementById('info2').innerHTML=x2;
var getinfo4=document.getElementById('info3').innerHTML=x3;
var para='I want to pursue a career that will enable me to apply my knowledge in a competitive environment. I am eager to work in a challenging and stimulating workplace where there are continuous opportunities for learning and personal development.'
var paragrap=document.getElementById('para').innerHTML=para;

var skills={
    language:"programiing languages (c,c# javascript)",
    program1:"Ms Word",
    program2:"Ms Excel "
}
var li=document.getElementById('l1').innerHTML=skills.language;
var li=document.getElementById('l2').innerHTML=skills.program1;
var li=document.getElementById('l3').innerHTML=skills.program2;
var skill={
    learner:"Fast learner",
    speaker:"Fluent in english",
    time:"Time manager"
}
var le=document.getElementById('l4').innerHTML=skill.learner;
var sp=document.getElementById('l5').innerHTML=skill.speaker;
var tim=document.getElementById('l6').innerHTML=skill.time;

var tabel={
     sch : "The Crescent Academy ",
     grd:"A-1(82%)",
     year:"2012",
     college:"Guslhan College",
     grd2:"B(65%)",
     year2:"2015",
     uni:"Karachi University",
     grd3:"ongoing",
     year3:"2016",
     
}
var sc=document.getElementById('sch').innerHTML=tabel.sch;
var gr=document.getElementById('grd').innerHTML=tabel.grd;
var ye=document.getElementById('year').innerHTML=tabel.year;
var col=document.getElementById('College').innerHTML=tabel.college;
var gr2=document.getElementById('grd2').innerHTML=tabel.grd2;
var ye2=document.getElementById('year2').innerHTML=tabel.year2;
var uni=document.getElementById('uni').innerHTML=tabel.uni;
var gr3=document.getElementById('grd3').innerHTML=tabel.grd3;
var ye3=document.getElementById('year3').innerHTML=tabel.year3;