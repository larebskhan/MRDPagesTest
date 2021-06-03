function alertingInput(choice, id)
{
    var idNum = id.match(/\d+/);
    /*var addedInput = 'addedemailInput_'+idNum;
    var addButton = 'addEmail_'+idNum;
    var removeButton = 'remEmail_'+idNum;
    var input = 'emailInput_'+idNum;
    var ticket = 'ticket_'+idNum;*/
    if(choice == 'ticket')
    {
        document.getElementById('emailInput_'+idNum).getElementsByClassName('form-control')[0].disabled = true;
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
        document.getElementById('ticketCircum_'+idNum).disabled = true;
        document.getElementById('ticketBucket_'+idNum).disabled = true;
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
function serverWarning(id){
    var str = document.getElementById('server').value;
    if(str.startsWith("a03") || (str.startsWith("a70"))){
        document.getElementById('serverWarning').className = "";
        document.getElementById('serverWarningText').innerHTML = "";
    }
    else{
        document.getElementById('serverWarning').className = "has-warning";
        document.getElementById('serverWarningText').innerHTML = "Warning! ServerID does not start with a03 or a70!";
        //$("#serverWarningText").css("color", "orange");
    }
    while(forEach(document.getElementById('addServer_1').onclick==true)){
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
    }
   
    
}

function validatetextboxes()
    {
    var txtval = $("#ticketTeam_1").val();
      //Check if value is empty or not
    if (txtval == "") {
           //if empty then assign the border
          $("#ticketTeam_1").css("border", "1px solid red");
      }
      else
     {
         $("#ticketTeam_1").css("border", "1px solid #ccc");
     }
     var txtval2 = $("#mainObjective").val();
     if (txtval2 == "") {
        //if empty then assign the border
       $("#mainObjective").css("border", "1px solid red");
    }
    else
    {
      $("#mainObjective").css("border", "1px solid #ccc");
    } 
    var txtval3 = $("#userID").val();
     if (txtval3 == "") {
        //if empty then assign the border
       $("#userID").css("border", "1px solid red");
    }
    else
    {
      $("#userID").css("border", "1px solid #ccc");
    } 
    var txtval4 = $("#projectTitle").val();
     if (txtval4 == "") {
        //if empty then assign the border
       $("#projectTitle").css("border", "1px solid red");
    }
    else
    {
      $("#projectTitle").css("border", "1px solid #ccc");
    } 
    var txtval5 = $("#projectNumber").val();
     if (txtval5 == "") {
        //if empty then assign the border
       $("#projectNumber").css("border", "1px solid red");
    }
    else
    {
      $("#projectNumber").css("border", "1px solid #ccc");
    } 
    var txtval6 = $("#projectEndDate").val();
     if (txtval6 == "") {
        //if empty then assign the border
       $("#projectEndDate").css("border", "1px solid red");
    }
    else
    {
      $("#projectEndDate").css("border", "1px solid #ccc");
    } 


    var txtval7 = $("#requirements").val();
     if (txtval7 == "") {
        //if empty then assign the border
       $("#requirements").css("border", "1px solid red");
    }
    else
    {
      $("#requirements").css("border", "1px solid #ccc");
    } 
    var txtval8 = $("#reason").val();
     if (txtval8 == "") {
        //if empty then assign the border
       $("#reason").css("border", "1px solid red");
    }
    else
    {
      $("#reason").css("border", "1px solid #ccc");
    } 
    /*
    var txtval9 = $("#searchSched_1").val();
     if (txtval9 == "") {
        //if empty then assign the border
       $("#searchSched_1").css("border", "1px solid red");
    }
    else
    {
      $("#searchSched_1").css("border", "1px solid #ccc");
    } 
    */
    var txtval10 = $("#server").val();
     if (txtval10 == "") {
        //if empty then assign the border
       $("#server").css("border", "1px solid red");
    }
    else
    {
      $("#server").css("border", "1px solid #ccc");
    } 
    var txtval11 = $("#acceptanceCrit").val();
     if (txtval11 == "") {
        //if empty then assign the border
       $("#acceptanceCrit").css("border", "1px solid red");
    }
    else
    {
      $("#acceptanceCrit").css("border", "1px solid #ccc");
    } 
    var txtval12 = $("#ticket_1").val();
    //does not work
     if (txtval12 == "-- Select Severity --") {
        //if empty then assign the border
       $("#ticket_1").css("border", "1px solid red");
    }
    else
    {
      $("#ticket_1").css("border", "1px solid #ccc");
    } 
    var txtval13 = $("#email").val();
     if (txtval13 == "") {
        //if empty then assign the border
       $("#email").css("border", "1px solid red");
    }
    else
    {
      $("#email").css("border", "1px solid #ccc");
    } 
}



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
function addInputBox(id, name)
{
    idNum = id.match(/\d+/);
    //alert(idNum);
    //alert(name)
    var newBox = document.createElement('div');
    var newRemBox = document.createElement('div');
    if(name == 'serverInput')
    {
        newBox.innerHTML = "<div class = '' id='serverWarning"+idNum+"' <a data-toggle='tooltip' title='Please enter all ServerIDs'> <input type='text' class='form-control' oninput='serverWarning(this.id)' id='server"+idNum+"' placeholder='Server ID' name='Server ID "+idNum+"'></input> <span class='help-block' id='serverWarningText"+idNum+"'> </span> </a> </div>"
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
        newBox.innerHTML = "<input type='text' class='form-control' id='acceptanceCrit"+idNum+"_"+accNum+"' placeholder='Acceptance Criteria' name='Acceptance Criteria "+idNum+"' required> <span class='help-block'>";
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
        fileNum++;
        document.getElementById('addedfileRemButton_'+idNum).appendChild(newRemBox);
        newRemBox.onclick = function() 
        {
            //alert('hello');
            newBox.innerHTML = '';
            newRemBox.innerHTML = '';
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

/*var i = 1;
function requirementAdd()
{
    var newBox = document.createElement('div');
    divID = "req"+i;
    newBox.id = divID;
    newBox.innerHTML = document.getElementById('req0').innerHTML;
    document.getElementById("newReq").appendChild(newBox);
    i++;
}

function requirementRemove()
{
    divID = "req"+(i-1);
    //alert(divID);
    var oldBox = document.getElementById(divID);
    if(i > 1)
    {
        oldBox.remove();
        i--;
    }
}

function addRequirement()
{
    var newBox = document.createElement('div');
    divID = "req"+i;
    newBox.id = divID;
    newBox.innerHTML = "hello";
    document.getElementById("newReq").appendChild(newBox);
    i++;
}
function resetNone(id, place)
{
    document.getElementById(id).disabled = false;
    document.getElementById(id).value = '';
    document.getElementById(id).placeholder = place;
}

var serverCount = 1
function addServer() 
{
    serverCount+=1
    var idBox = 'requirements'+serverCount;
	var newServer = document.createElement('div');
    newServer.innerHTML = "<input type='text' pattern='[a-z0-9]{3}' class='form-control' id=idBox placeholder='Server ID' name='Server ID' required>";
    document.getElementById("addServer").appendChild(newServer);
}

function removeServer() 
{
    var idBox = 'requirements'+serverCount;
    var oldServer = document.getElementById('idBox');
    oldServer.remove();
    serverCount-=1;
}
function duplicateRequirement()
{
    var newBox = document.createElement('div');
    divID = "req"+i;
    currentDivID = "req"+(i-1);
    //alert(currentDivID);
    newBox.id = divID;
    newBox.innerHTML = document.getElementById(currentDivID).innerHTML;
    document.getElementById("newReq").appendChild(newBox);
    i++;
}

var i = 0;
var original = document.getElementById('req');

function duplicate() {
    alert(original.innerHTML);
    var clone = original.cloneNode(true); // "deep" clone
    clone.id = "duplicater" + ++i;
    // or clone.id = ""; if the divs don't need an ID
    original.parentNode.appendChild(clone);
}

    i++
    //var original = document.getElementById('req');
    var newBox = document.createElement('div');
    newBox.setAttribute('id', "req"+i);
    //alert(newBox.id);
    newBox.innerHTML = document.getElementById("req"+(i-1)).innerHTML;
    document.getElementById("newReq").appendChild(newBox);

function addBox(id) 
{
    var newBox = document.createElement('div');
    if(id == "addServer")
    {
        newBox.innerHTML = "<input type='text' pattern='[a-z0-9]{13}' class='form-control' id=idBoxServer placeholder='Server ID' name='Server ID' required>";
    }
    else if(id == "addFile")
    {
        newBox.innerHTML = "<input type='text' class='form-control' id=idBoxFile placeholder='Complete File Path' name='File Path' required>";
    }
    else if(id == "addAssumption")
    {
        newBox.innerHTML = "<input type='text' class='form-control' id=idBoxAssumption placeholder='Project Assumption' name='Assumption(s)' required>";
    }
    else if(id == "addRisk")
    {
        newBox.innerHTML = "<input type='text' class='form-control' id=idBoxRisk placeholder='Project Risk' name='Risk(s)' required>";
    }
    else if(id == "addCriteria")
    {
        newBox.innerHTML = "<input type='text' class='form-control' id=idBoxCriteria placeholder='Acceptance Criteria' name='Acceptance Criteria' required>";
    }
    else if(id == "addTicket")
    {
        newBox.innerHTML = "<input type='text' pattern='[a-z0-9]{13}' class='form-control' id=idBoxTicket placeholder='Ticket Number' name='Ticket Number(s)' required>";
    }
    else if(id == "addDist")
    {
        newBox.innerHTML = "<input type='text' class='form-control' id=idBoxDist placeholder='Distributor' name='Distributor' required>";
    }
    document.getElementById(id).appendChild(newBox);

}

function removeBox(id) 
{
    if(id == "addServer")
    {
        var oldBox = document.getElementById('idBoxServer');
    }
    else if(id == "addFile")
    {
        var oldBox = document.getElementById('idBoxFile');
    }
    else if(id == "addAssumption")
    {
        var oldBox = document.getElementById('idBoxAssumption');
    }
    else if(id == "addRisk")
    {
        var oldBox = document.getElementById('idBoxRisk');
    }
    else if(id == "addCriteria")
    {
        var oldBox = document.getElementById('idBoxCriteria');
    }
    else if(id == "addTicket")
    {
        var oldBox = document.getElementById('idBoxTicket');
    }
    else if(id == "addDist")
    {
        var oldBox = document.getElementById('idBoxDist');
    }
    oldBox.remove();
}

function yesNoInput(id, choice, place)
{
    var addId = id + "Add";
    var removeId = id + "Remove";
    if(choice == 'yes')
    {
        document.getElementById(id).disabled = false;
        document.getElementById(id).value = '';
        document.getElementById(id).placeholder = place;
        document.getElementById(addId).disabled = false;
        document.getElementById(removeId).disabled = false;
    }
    else if(choice == "no")
    {
        document.getElementById(id).disabled = true;
        document.getElementById(id).value = '';
        document.getElementById(addId).disabled = true;
        document.getElementById(removeId).disabled = true;
    }
}

function removeAll(section) 
{
    var divID = 'add'+section;
    document.getElementById(divID).innerHTML = '';
}

function disableInput(id, place)
{
    let newId = "none_"+id;
    var addId = id + "Add";
    var removeId = id + "Remove";
    if(document.getElementById(newId).checked == true)
    {
        document.getElementById(id).disabled = true;
        document.getElementById(id).value = '';
        if(id == "assumptions" || id == "risks")
        {
            document.getElementById(addId).disabled = true;
            document.getElementById(removeId).disabled = true;
        } 
    }
    else
    {
        document.getElementById(id).disabled = false;
        document.getElementById(id).value = '';
        document.getElementById(id).placeholder = place;
        if(id == "assumptions" || id == "risks")
        {
            document.getElementById(addId).disabled = false;
            document.getElementById(removeId).disabled = false;
        } 
    }
}*/
