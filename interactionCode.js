//disable ticketing if email is secelected and vice versa, if both is selected, neither should be disabled
function alertingInput(choice, id)
{
    var idNum = id.match(/\d+/);
    if(choice == 'ticket')
    {
        document.getElementById('emailInput_'+idNum).getElementsByClassName('form-control')[0].disabled = true;
        document.getElementById('email').value = '';
        document.getElementById('addedemailInput_'+idNum).innerHTML = '';
        document.getElementById('addedemailRemButton_'+idNum).innerHTML = '';
        document.getElementById('addEmail_'+idNum).disabled = true;
        document.getElementById('ticket_'+idNum).disabled = false;
        document.getElementById('ticketCircum_'+idNum).disabled = false;
        document.getElementById('ticketBucket_'+idNum).disabled = false;
    }
    else if(choice == 'email')
    {
        document.getElementById('ticket_'+idNum).disabled = true;
        document.getElementById('ticket_'+idNum).value = '';
        document.getElementById('ticketCircum_'+idNum).disabled = true;
        document.getElementById('ticketCircum_'+idNum).value = '';
        document.getElementById('ticketBucket_'+idNum).disabled = true;
        document.getElementById('ticketBucket_'+idNum).value = '';
        document.getElementById('emailInput_'+idNum).getElementsByClassName('form-control')[0].disabled = false;
        document.getElementById('addEmail_'+idNum).disabled = false;
    }
    else if(choice == 'both')
    {
        document.getElementById('ticket_'+idNum).disabled = false;
        document.getElementById('ticketCircum_'+idNum).disabled = false;
        document.getElementById('ticketBucket_'+idNum).disabled = false;
        document.getElementById('emailInput_'+idNum).getElementsByClassName('form-control')[0].disabled = false;
        document.getElementById('addEmail_'+idNum).disabled = false;
    }
}

function saveJSON(text, filename)
{
    //create anchor element
    var a = document.createElement('a');
    //donwload file locally --> THIS NEEDS TO DOWNLOAD TO SERVER
    a.setAttribute('href', 'data:text/plain;charset=utf-8,'+encodeURIComponent(text));
    //change donwload filename
    a.setAttribute('download', filename);
    a.click();
    window.location.href = "SubmitValidation.html";
}

//give a warning if the server names do not start with a03 or a70
function serverWarning(id){
    color = document.getElementById(id).style.borderColor;
    //alert(id);
    var str = document.getElementById(id).value;
    //alert(str)
    if(str.startsWith("a03") || (str.startsWith("a70")))
    {
        //document.getElementById('serverWarning').className = "";
        document.getElementById('serverWarningText').innerHTML = "";
        //document.getElementById(id).style.borderColor = color;


    }
    else
    {
        //document.getElementById('serverWarning').className = "has-warning";
        //document.getElementById(id).style.borderColor = "orange";
        document.getElementById('serverWarningText').innerHTML = "<i class='fa fa-exclamation-circle' aria-hidden='true'></i><em style='font-size: 12px;'> Server ID does not start with a03 or a70!<em>";
    }
    /*while(forEach(document.getElementById('addServer_1').onclick==true)){
        idNum = id.match(/\d+/);
        var str2 = document.getElementById('server'+idNum).value;
        if(str2.startsWith("a03") || (str2.startsWith("a70"))){
            document.getElementById('serverWarning'+idNum).className = "";
            document.getElementById('serverWarningText'+idNum).innerHTML = "";
        }
        else{
            document.getElementById('serverWarning'+idNum).className = "has-warning";
            document.getElementById('serverWarningText'+idNum).innerHTML = "Warning! ServerID does not start with a03 or a70!";
            //$("#serverWarningText").css("color", "orange");
        }
    }*/
   
    
}

//function that makes sure the project end date cannot be a date in the past
function minDate() 
{
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 
    today = yyyy+'-'+mm+'-'+dd;
    document.getElementById("projectEndDate").setAttribute("min", today);
}

var riskNum = 1;
var serverNum = 1;
var fileNum = 1;
var emailNum = 1;
var accNum = 1;
var addNum = 1;
//add new input boxes when the add buttons are clicked
function addInputBox(id, name)
{
    idNum = id.match(/\d+/);
    //alert(idNum);
    //alert(name)
    var newBox = document.createElement('div');
    var newRemBox = document.createElement('div');
    var logBox = document.createElement('div');

    if(name == 'serverInput')
    {
        newBox.innerHTML = "<div class = '' id='serverWarning"+idNum+"' <a data-toggle='tooltip' title='Please enter all ServerIDs'> <input type='text' class='form-control' oninput='serverWarning(this.id)' id='server"+idNum+"' placeholder='Server ID' name='Server ID "+idNum+"' required></input> <span class='help-block' id='serverWarningText"+idNum+"'> </span> </a> </div>"
        newRemBox.innerHTML = "<button type='button' id='serverRem"+idNum+"_"+serverNum+"' class='btn btn-default'>x</button> <span class='help-block'></span>";
        serverNum++;
        document.getElementById('addedserverRemButton_'+idNum).appendChild(newRemBox);
        newRemBox.onclick = function() 
        {
            //alert('hello');
            newBox.innerHTML = '';
            newRemBox.innerHTML = '';
        };
    }
    else if(name == 'riskInput')
    {
        newBox.innerHTML = "<input type='text' class='form-control' id='risks"+idNum+"_"+riskNum+"' placeholder='Ex. Contractual Obligation, Financial Risk, Customer Impact' name='Risk "+idNum+"'> <span class='help-block'>";
        newRemBox.innerHTML = "<button type='button' id='risksRem"+idNum+"_"+riskNum+"' class='btn btn-default'>x</button> <span class='help-block'></span>"
        riskNum++;
        document.getElementById('addedriskRemButton_'+idNum).appendChild(newRemBox);
        newRemBox.onclick = function() 
        {
            //alert('hello');
            newBox.innerHTML = '';
            newRemBox.innerHTML = '';
        };
    }
    else if(name == 'accInput')
    {
        newBox.innerHTML = "<input type='text' class='form-control' id='acceptanceCrit"+idNum+"_"+accNum+"' placeholder='Ex: When _____, I expect _____' name='Acceptance Criteria "+idNum+"' required> <span class='help-block'>";
        newRemBox.innerHTML = "<button type='button' id='accRem"+idNum+"_"+accNum+"' class='btn btn-default'>x</button> <span class='help-block'></span>"
        accNum++;
        document.getElementById('addedaccRemButton_'+idNum).appendChild(newRemBox);
        newRemBox.onclick = function() 
        {
            //alert('hello');
            newBox.innerHTML = '';
            newRemBox.innerHTML = '';
        };
    }
    else if(name == 'emailInput')
    {
        newBox.innerHTML = "<input type='email' class='form-control' id='email"+idNum+"_"+emailNum+"' placeholder='Distribution List' name='Distribution List "+idNum+"' required> <span class='help-block'>";
        newRemBox.innerHTML = "<button type='button' id='emailRem"+idNum+"_"+emailNum+"' class='btn btn-default'>x</button> <span class='help-block'></span>"
        emailNum++;
        document.getElementById('addedemailRemButton_'+idNum).appendChild(newRemBox);
        newRemBox.onclick = function() 
        {
            //alert('hello');
            newBox.innerHTML = '';
            newRemBox.innerHTML = '';
        };
    }
    else if(name == 'fileInput')
    {
        newBox.innerHTML = "<input type='text' class='form-control' id='files"+idNum+"_"+fileNum+"' placeholder='Ex. D:\\Program Files\\MyApplication\\Logs\\' name='File Path "+idNum+"'> <span class='help-block'>";
        newRemBox.innerHTML = "<button type='button' id='fileRem"+idNum+"_"+fileNum+"' class='btn btn-default'>x</button> <span class='help-block'></span>";
        logBox.innerHTML = "<input type='text' class='form-control' id='logRotation"+idNum+"_"+fileNum+"' placeholder='Ex. By date, by size' name='Log Rotation "+idNum+"'> <span class='help-block'></span>"
        fileNum++;
        document.getElementById('addedfileRemButton_'+idNum).appendChild(newRemBox);
        document.getElementById('addedlogInput_'+idNum).appendChild(logBox);
        newRemBox.onclick = function() 
        {
            newBox.innerHTML = '';
            newRemBox.innerHTML = '';
            logBox.innerHTML = '';

        };

    }
    else if(name == 'addInput')
    {
        newBox.innerHTML = "<input type='text' class='form-control' id='addInfo"+idNum+"_"+addNum+"' placeholder='Additional Information' name='Additional Information "+idNum+"'> <span class='help-block'>";
        newRemBox.innerHTML = "<button type='button' id='addRem"+idNum+"_"+addNum+"' class='btn btn-default'>x</button> <span class='help-block'></span>";
        addNum++;
        document.getElementById('addedaddRemButton_'+idNum).appendChild(newRemBox);
        newRemBox.onclick = function() 
        {
            //alert('hello');
            newBox.innerHTML = '';
            newRemBox.innerHTML = '';
        };
    }
    idInput = name+'_'+idNum;
    document.getElementById('added'+name+'_'+idNum).appendChild(newBox);
    /*var newBox = document.createElement('div');
    newBox.innerHTML = "<input type='text' class='form-control' id=idBoxCriteria placeholder='Acceptance Criteria' name='Acceptance Criteria' required>";
    alert('accInput_'+idNum);
    document.getElementById('accInput_'+idNum).appendChild(newBox);

    alert(id.match(/\d+/));*/
}
//remove new input boxes when the remove buttons are clicked
function removeInputBox(id, name)
{
    idNum = id.match(/\d+/);
    idInput = name+'_'+idNum;
    if(name == 'serverInput')
    {
        var oldBox = document.getElementById('server'+idNum);
    }
    else if(name == 'riskInput')
    {
        var oldBox = document.getElementById('risks'+idNum);
    }
    else if(name == 'accInput')
    {
        var oldBox = document.getElementById('acceptanceCrit'+idNum);
    }
    else if(name == 'emailInput')
    {
        var oldBox = document.getElementById('email'+idNum);
    }
    else if(name == 'fileInput')
    {
        var oldBox = document.getElementById('files'+idNum);
    }
    else if(name == 'addInput')
    {
        var oldBox = document.getElementById('addInfo'+idNum);
    }
    //alert(oldBox.id);
    oldBox.remove(oldBox);
}
function removeInput(id, name)
{
    alert(id);
}

function riskDisable(id)
{
    var idNum = id.match(/\d+/);
    var addedInput = 'addedriskInput_'+idNum;
    var addButton = 'addRisk_'+idNum;
    var removeButton = 'remRisk_'+idNum;
    var input = 'riskInput_'+idNum;
    if(document.getElementById(id).checked)
    {
        document.getElementById(addedInput).innerHTML = '';
        document.getElementById(addButton).disabled = true;
        document.getElementById(removeButton).disabled = true;
        document.getElementById(input).getElementsByClassName('form-control')[0].disabled = true;
    }
    else
    {
        document.getElementById(addButton).disabled = false;
        document.getElementById(removeButton).disabled = false;
        document.getElementById(input).getElementsByClassName('form-control')[0].disabled = false;

    }
}

function fileInput(choice, id)
{
    var idNum = id.match(/\d+/);
    var addedInput = 'addedfileInput_'+idNum;
    var addButton = 'addFile_'+idNum;
    var removeButton = 'remFile_'+idNum;
    var input = 'fileInput_'+idNum;
    if(choice == 'yes')
    {
        document.getElementById(addButton).disabled = false;
        document.getElementById(removeButton).disabled = false;
        document.getElementById(input).getElementsByClassName('form-control')[0].disabled = false;
    }
    else if(choice == 'no')
    {
        document.getElementById(addedInput).innerHTML = '';
        document.getElementById(addButton).disabled = true;
        document.getElementById(removeButton).disabled = true;
        document.getElementById(input).getElementsByClassName('form-control')[0].disabled = true;

    }
}

function validatetextboxes()
{
    document.getElementById('validate').innerHTML = '<style> input:invalid{ border-color: rgb(245, 0, 37);}select:invalid {border-color: rgb(245, 0, 37);}</style>';
}
