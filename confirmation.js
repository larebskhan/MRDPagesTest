$(document).ready(function(){
    var number = 1 + Math.floor(Math.random() * 999999999);
    document.getElementById('confirNum').innerHTML = number;
    //Add num tp JSON object: https://stackoverflow.com/questions/736590/add-new-attribute-element-to-json-object-using-javascript
    //$.extend(result, {"ConfirmationNumber":number});
    });