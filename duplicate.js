$(document).ready(function(){
    var index = 1;
    var serverIndex = 1;
    var assumptionIndex = 1;
    var riskIndex = 1;
    var accIndex = 1;
    var fileIndex = 1;
    var emailIndex = 1;

    $('#addReq').click(function(){
        index++;
        $('#req_1')
            .clone()
            .attr('id', 'req_'+ index)
            .insertAfter("#req_"+(index-1));
        $('#req_'+ index)
            .find('#toggle_1')
            .attr('href', '#collapse_'+index);
        $('#req_'+ index)
            .find('#collapse_1')
            .attr('id', 'collapse_'+index);
        $('#req_'+ index)
            .find('#toggle_1')
            .text('Requirement '+index);

        $('#req_'+ index)
            .find('#remServer_1')
            .attr('id', 'remServer_'+serverIndex);
        $('#req_'+ index)
            .find('#addServer_1')
            .attr('id', 'remServer_'+serverIndex);

        $('#req_'+ index)
            .find('#remAssumption_1')
            .attr('id', 'remServer_'+serverIndex);
        $('#req_'+ index)
            .find('#remAssumption_1')
            .attr('id', 'remServer_'+serverIndex);
    });
    
    $('#remReq').click(function(){
        if(index > 1)
        {
            $('#req_'+index)
                .remove()
            index--;
        }
    });

    $('#addServer_1').click(function(){
        serverIndex++;
        $('#serverInput_1')
            .clone()
            .attr('id', 'serverInput_'+ serverIndex)
            .insertAfter('#serverInput_1');
    });
    $('#remServer_1').click(function(){
        if(serverIndex > 1)
        {
            $('#serverInput_'+serverIndex)
                .remove()
            serverIndex--;
        }
    });

    $('#addAssumption_1').click(function(){
        assumptionIndex++;
        $('#assumptionInput_1')
            .clone()
            .attr('id', 'assumptionInput_'+ assumptionIndex)
            .insertAfter('#assumptionInput_1');
    });
    $('#remAssumption_1').click(function(){
        if(assumptionIndex > 1)
        {
            $('#assumptionInput_'+assumptionIndex)
                .remove()
            assumptionIndex--;
        }
    });

    $('#addRisk_1').click(function(){
        riskIndex++;
        $('#riskInput_1')
            .clone()
            .attr('id', 'riskInput_'+ riskIndex)
            .insertAfter('#riskInput_1');
    });
    $('#remRisk_1').click(function(){
        if(riskIndex > 1)
        {
            $('#riskInput_'+riskIndex)
                .remove()
            riskIndex--;
        } 
    });

    $('#addAcc_1').click(function(){
        accIndex++;
        $('#accInput_1')
            .clone()
            .attr('id', 'accInput_'+ accIndex)
            .insertAfter('#accInput_1');
    });
    $('#remAcc_1').click(function(){
        if(accIndex > 1)
        {
            $('#accInput_'+accIndex)
                .remove()
            accIndex--;
        }
    });

    $('#addFile_1').click(function(){
        fileIndex++;
        $('#fileInput_1')
            .clone()
            .attr('id', 'fileInput_'+ fileIndex)
            .insertAfter('#fileInput_1');
    });
    $('#remFile_1').click(function(){
        if(fileIndex > 1)
        {
            $('#fileInput_'+fileIndex)
                .remove()
            fileIndex--;
        }
    });

    $('#addEmail_1').click(function(){
        emailIndex++;
        $('#emailInput_1')
            .clone()
            .attr('id', 'emailInput_'+ emailIndex)
            .insertAfter('#emailInput_1');
    });
    $('#remEmail_1').click(function(){
        if(emailIndex > 1)
        {
            $('#emailInput_'+emailIndex)
                .remove()
            emailIndex--;
        }
    });

   
   });