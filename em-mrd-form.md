--- 
title: Monitoring Requiremens Document Form
permalink: em-mrd-form.html
sidebar: generic
tags: [enterprise-monitoring, ICT, ITBS]
product: MRD
---

# MRD Form
*Please see MRD Form files for more detailed commentary
The Monitroing Requirements Document Form was created in order to produce and process MRDS more easily. The form ensures both clear communication between clients and the data monitoring team. It ensures all expectations are met.

Users can access the form at ...... On submission, the form data is saved in  JSON file format and inkected into Splunk to be accessed by the monitoring team. Each form has a confirmation number so users can find the status of their monitroing request.

The github repository for the form files is ....

##Required Preliminary Knowledge:
- Basic HTML (Form Structure / elements)
- Basic JavaScript(Create functions to manipulate form elements)
- Basic CSS (Styling)
- Basic familiarity with jQuery(JavaScript library)
- Basic familiarity with Bootstrap (Webpage framework of HTML, JS, and CSS)

##File List
| File Name | File Purpose / Description |
| ----------- | ----------- |
| SubmitValidation.html | Confirmation page that is accessed once form is submitted |
| confirmation.js | Function to generte a confirmation number for each form |
| confirmationSubmit.js | Function to generate a confirmation number for each form |
| confirmationSubmit.js | Script that is run in SubmitValidation to show the confimration # |
| dataHandling.js | Convert the form data to a JSON file when submitted |
| duplicate.js | Functions to duplicate input boxes when any add button is clicked|
| index.html | Creates form fields and input boxes on page with formatting|
| interactionCode.js | Functions for form elements in index.html |
| style.css |  Style classes of form elements: color, size, position, font, borders, etc|

###interactionCode.js Function Descriptions

    - alertingInput(choice,id)
  This function is called when the radio buttons for ticket, email, or 'both' are selected in the alerting section of the form (index.html). If ticket is selected, the email input elements will be disabled. If email is selected, the ticket input elements will be disabled. If 'both' is selected, all elements will b enabled.

    - URLServerInput(choice,id)
...
    - saveJSON(text, filename)
Downloads files locally
    - serverWarning(id)
...
    - removeReq(id,name)
...
    - minDate()
...
    - addInputBox(id, name)
...
    - validatetextboxes
...
    - characterCount