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
}
function alertingInput(choice, otherChoice)
{
    document.getElementById(choice).disabled = false;
    document.getElementById(otherChoice).disabled = true;
    if(choice == "ticket")
    {
            
        document.getElementById(otherChoice+"Add").disabled = true;
        document.getElementById(otherChoice+"Remove").disabled = true;
    }
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

function resetNone(id, place)
{
    document.getElementById(id).disabled = false;
    document.getElementById(id).value = '';
    document.getElementById(id).placeholder = place;
}

/*var serverCount = 1
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
}*/

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

function removeAll(section) 
{
    var divID = 'add'+section;
    document.getElementById(divID).innerHTML = '';
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

/*var i = 0;
var original = document.getElementById('req');

function duplicate() {
    alert(original.innerHTML);
    var clone = original.cloneNode(true); // "deep" clone
    clone.id = "duplicater" + ++i;
    // or clone.id = ""; if the divs don't need an ID
    original.parentNode.appendChild(clone);
}*/

var i = 1;
function requirementAdd()
{
    var newBox = document.createElement('div');
    divID = "req"+i;
    newBox.id = divID;
    //alert(newBox.id);
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
/*function duplicateRequirement()
{
    var newBox = document.createElement('div');
    divID = "req"+i;
    currentDivID = "req"+(i-1);
    //alert(currentDivID);
    newBox.id = divID;
    newBox.innerHTML = document.getElementById(currentDivID).innerHTML;
    document.getElementById("newReq").appendChild(newBox);
    i++;
}*/
/*
    i++
    //var original = document.getElementById('req');
    var newBox = document.createElement('div');
    newBox.setAttribute('id', "req"+i);
    //alert(newBox.id);
    newBox.innerHTML = document.getElementById("req"+(i-1)).innerHTML;
    document.getElementById("newReq").appendChild(newBox);
*/