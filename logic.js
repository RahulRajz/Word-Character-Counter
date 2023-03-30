let textbox = document.getElementById('textbox');
textbox.addEventListener('input', function(){
    // For Character count
    let text = this.value;
    let char = text.length;
    document.getElementById("char").innerHTML = char;
    // For Word Count
    text = text.trim();
    let word = text.split(" ");
    let cleanList = word.filter(function(elm){
        return elm!=" ";
    });
    let finalcount = word.length;
    document.getElementById('word').innerHTML = finalcount;
});