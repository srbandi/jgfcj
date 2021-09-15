var names=[];
function submit(){
     nameshtml=[];
    for(var i=1; i<=4; i++){
        var n=document.getElementById("name_of_the_student_"+i).value;
        names.push(n);
    }
    for ( var j=0; j<names.length; j++){
      nameshtml.push("<h4> name- "+names[j]+"</h4>");
    }
    document.getElementById("display_name_with_commas").innerHTML=nameshtml;
    var revmovecomma=nameshtml.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=revmovecomma;
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
    names.sort();
    for ( var j=0; j<names.length; j++){
        nameshtml.push("<h4> name- "+names[j]+"</h4>");
      }  
      var r=nameshtml.join(" ")
      document.getElementById("display_name_without_commas").innerHTML=r;
}