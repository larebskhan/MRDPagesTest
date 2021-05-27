$(document).ready(function(){
    var index = 1;
    var serverIndex = 1;
    var assumptionIndex = 1;
    var riskIndex = 1;
    var accIndex = 1;
    var fileIndex = 1;
    var emailIndex = 1;
    var currIndex = 1;

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
        
        //Change add/remove button Ids
        //Ex. ID Button Requirement Add Server #2: addServer_1
        //Server Button
        $('#req_'+ index)
            .find('#remServer_1')
            .attr('id', 'remServer_'+index);
        $('#req_'+ index)
            .find('#addServer_1')
            .attr('id', 'addServer_'+index);
        $('#req_'+ index)
            .find('#serverInput_1_1')
            .attr('id', 'serverInput_'+index+'_'+serverIndex);
        
        //Assumption Button
        $('#req_'+ index)
            .find('#remAssumption_1')
            .attr('id', 'remAssumption_'+index);
        $('#req_'+ index)
            .find('#addAssumption_1')
            .attr('id', 'addAssumption_'+index);
        $('#req_'+ index)
            .find('#assumptionInput_1_1')
            .attr('id', 'assumptionInput_'+index+'_'+assumptionIndex);
        
        //Risk Button
        $('#req_'+ index)
            .find('#remRisk_1')
            .attr('id', 'remRisk_'+index);
        $('#req_'+ index)
            .find('#addRisk_1')
            .attr('id', 'addRisk_'+index);
        $('#req_'+ index)
            .find('#riskInput_1_1')
            .attr('id', 'riskInput_'+index+'_'+riskIndex);
        
        //Acceptance Criteria
        $('#req_'+ index)
            .find('#remAcc_1')
            .attr('id', 'remAcc_'+index);
        $('#req_'+ index)
            .find('#addAcc_1')
            .attr('id', 'addAcc_'+index);
        $('#req_'+ index)
            .find('#accInput_1_1')
            .attr('id', 'accInput_'+index+'_'+accIndex);
        
        //File Monitoring
        $('#req_'+ index)
            .find('#remFile_1')
            .attr('id', 'remFile_'+index);
        $('#req_'+ index)
            .find('#addFile_1')
            .attr('id', 'addFile_'+index);
        $('#req_'+ index)
            .find('#fileInput_1_1')
            .attr('id', 'fileInput_'+index+'_'+fileIndex);
        
        //Alerting: Email
        $('#req_'+ index)
            .find('#remEmail_1')
            .attr('id', 'remEmail_'+index);
        $('#req_'+ index)
            .find('#addEmail_1')
            .attr('id', 'addEmail_'+index);
        $('#req_'+ index)
            .find('#emailInput_1_1')
            .attr('id', 'emailInput_'+index+'_'+emailIndex);
    });
    $('#remReq').click(function(){
        if(index > 1)
        {
            $('#req_'+index)
                .remove();
            index--;
        }
    });

    $('[id^="addServer_"]').click(function() {
        serverIndex++;
        currIndex = $(this).attr('id').split('_').pop();
        $('#serverInput_1_1')
            .clone()
            .attr('id', 'serverInput_'+currIndex+'_'+serverIndex)
            .insertAfter('#serverInput_'+currIndex+'_'+(serverIndex-1));
    });
    $('[id^="remServer_"]').click(function(){
        if(serverIndex > 1)
        {
            currIndex = $(this).attr('id').split('_').pop();
            $('#serverInput_'+currIndex+'_'+serverIndex)
                .remove();
            serverIndex--;
        }
    });

    $('[id^="addAssumption_"]').click(function(){
        assumptionIndex++;
        currIndex = $(this).attr('id').split('_').pop();
        $('#assumptionInput_1_1')
            .clone()
            .attr('id', 'assumptionInput_'+currIndex+'_'+assumptionIndex)
            .insertAfter('#assumptionInput_'+currIndex+'_'+(assumptionIndex-1));
    });
    $('[id^="remAssumption_"]').click(function(){
        if(assumptionIndex > 1)
        {
            currIndex = $(this).attr('id').split('_').pop();
            $('#assumptionInput_'+currIndex+'_'+assumptionIndex)
                .remove();
            assumptionIndex--;
        }
    });

    $('[id^="addRisk_"]').click(function(){
        currIndex = $(this).attr('id').split('_').pop();
        riskIndex++;
        $('#riskInput_1_1')
            .clone()
            .attr('id', 'riskInput_'+currIndex+'_'+riskIndex)
            .insertAfter('#riskInput_'+currIndex+'_'+(riskIndex-1));
    });
    $('[id^="remRisk_"]').click(function(){
        if(riskIndex > 1)
        {
            currIndex = $(this).attr('id').split('_').pop();
            $('#riskInput_'+currIndex+'_'+riskIndex)
                .remove();
            riskIndex--;
        } 
    });

    $('[id^="addAcc_"]').click(function(){
        accIndex++;
        currIndex = $(this).attr('id').split('_').pop();
        $('#accInput_1_1')
            .clone()
            .attr('id', 'accInput_'+currIndex+'_'+accIndex)
            .insertAfter('#accInput_'+currIndex+'_'+(accIndex-1));
    });
    $('[id^="remAcc_"]').click(function(){
        if(accIndex > 1)
        {
            currIndex = $(this).attr('id').split('_').pop();
            $('#accInput_'+currIndex+'_'+accIndex)
                .remove();
            accIndex--;
        }
    });

    $('[id^="addEmail_"]').click(function(){
        emailIndex++;
        currIndex = $(this).attr('id').split('_').pop();
        $('#emailInput_1_1')
            .clone()
            .attr('id', 'emailInput_'+currIndex+'_'+emailIndex)
            .insertAfter('#emailInput_'+currIndex+'_'+(emailIndex-1));
    });
    $('[id^="remEmail_"]').click(function(){
        if(emailIndex > 1)
        {
            currIndex = $(this).attr('id').split('_').pop();
            $('#emailInput_'+currIndex+'_'+emailIndex)
                .remove();
            emailIndex--;
        }
    });

    $('[id^="addFile_"]').click(function(){
        fileIndex++;
        currIndex = $(this).attr('id').split('_').pop();
        $('#fileInput_1_1')
            .clone()
            .attr('id', 'fileInput_'+currIndex+'_'+fileIndex)
            .insertAfter('#fileInput_'+currIndex+'_'+(fileIndex-1));
    });
    $('[id^="remFile_"]').click(function(){
        if(fileIndex > 1)
        {
            currIndex = $(this).attr('id').split('_').pop();
            $('#fileInput_'+currIndex+'_'+fileIndex)
                .remove();
            fileIndex--;
        }
    });
   
});