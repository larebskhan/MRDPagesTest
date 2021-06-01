function alertingInput(choice, id)
{
    var idNum = id.match(/\d+/);
    var addedInput = 'addedemailInput_'+idNum;
    var addButton = 'addEmail_'+idNum;
    var removeButton = 'remEmail_'+idNum;
    var input = 'emailInput_'+idNum;
    var ticket = 'ticket_'+idNum;
    if(choice == 'ticket')
    {
        document.getElementById(ticket).disabled = false;
        document.getElementById(addedInput).innerHTML = '';
        document.getElementById(addButton).disabled = true;
        document.getElementById(removeButton).disabled = true;
        document.getElementById(input).getElementsByClassName('form-control')[0].disabled = true;
    }
    else if(choice == 'email')
    {
        document.getElementById(addButton).disabled = false;
        document.getElementById(removeButton).disabled = false;
        document.getElementById(input).getElementsByClassName('form-control')[0].disabled = false;
        document.getElementById(ticket).disabled = true;
    }
    else if(choice == 'both')
    {
        document.getElementById(ticket).disabled = false;
        document.getElementById(addButton).disabled = false;
        document.getElementById(removeButton).disabled = false;
        document.getElementById(input).getElementsByClassName('form-control')[0].disabled = false;
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

function serverWarning(){
    var str = document.getElementById('server').value;
    if(str.includes("a03") || (str.includes("a70"))){
        document.getElementById('serverWarning').className = "";
        document.getElementById('serverWarningText').innerHTML = "";
    }
    else{
        document.getElementById('serverWarning').className = "has-warning";
        document.getElementById('serverWarningText').innerHTML = "Warning! ServerID does not start with a03 or a70!";
    }
}

function addInputBox(id, name)
{
    idNum = id.match(/\d+/);
    //alert(idNum);
    //alert(name)
    var newBox = document.createElement('div');
    if(name == 'serverInput')
    {
        newBox.innerHTML = "<a data-toggle='tooltip' title='Please enter all ServerIDs'> <input type='text' class='form-control' oninput='serverWarning()' id='server"+idNum+"' placeholder='Server ID' name='Server ID'></input> <span class='help-block' id='serverWarningText'> </span> </a>"
    }
    else if(name == 'riskInput')
    {
        newBox.innerHTML = "<input type='text' class='form-control' id='risks"+idNum+"' placeholder='Project Risk' name='Risk(s)'> <span class='help-block'>";
    }
    else if(name == 'accInput')
    {
        newBox.innerHTML = "<input type='text' class='form-control' id='acceptanceCrit"+idNum+"' placeholder='Acceptance Criteria' name='Acceptance Criteria' required> <span class='help-block'>";
    }
    else if(name == 'emailInput')
    {
        newBox.innerHTML = "<input type='email' class='form-control' id='email"+idNum+"' placeholder='Distributor' name='Distributor' required> <span class='help-block'>";
    }
    else if(name == 'fileInput')
    {
        newBox.innerHTML = "<input type='text' class='form-control' id='files"+idNum+"' placeholder='Complete File Path' name='File Path' required> <span class='help-block'>";
    }
    else if(name == 'addInput')
    {
        newBox.innerHTML = "<input type='text' class='form-control' id='addInfo"+idNum+"' placeholder='Additional Information' name='Additional Information'> <span class='help-block'>";
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
