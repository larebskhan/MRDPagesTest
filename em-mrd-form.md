--- 
title: Monitoring Requiremens Document Form
permalink: em-mrd-form.html
sidebar: generic
tags: [enterprise-monitoring, ICT, ITBS]
product: MRD
---

# MRD Form
###Important Information!
[1] L: Lower Case
    &nbsp;&nbsp;&nbsp;&nbsp; U: Upper Case
    &nbsp;&nbsp;&nbsp;&nbsp; N: No case
    &nbsp;&nbsp;&nbsp;&nbsp; Ex. LUL = Lower Case, Upper Case, Lower Case
*Bolded values are not to be written verbatim: Change value depending on previous naming conventions
*Please see MRD Form files for more detailed commentary

###MRD Form Overview
The Monitoring Requirements Document Form was created in order to produce and process MRDS more easily. The form ensures both clear communication between clients and the data monitoring team. It ensures all expectations are met.

Users can access the form at ...... On submission, the form data is saved in JSON file format and injected into Splunk to be accessed by the monitoring team. Each form has a confirmation number so users can find the status of their monitoring request.

The GitHub repository for the form files is ....

###Required Preliminary Knowledge:
- Basic HTML (Form Structure / elements)
- Basic JavaScript (Create functions to manipulate form elements)
- Basic CSS (Styling)
- Basic familiarity with jQuery (JavaScript library)
- Basic familiarity with Bootstrap (Webpage framework of HTML, JS, and CSS)

###File List
| File Name | File Purpose / Description |
| ----------- | ----------- |
| SubmitValidation.html | Confirmation page that is accessed once form is submitted. <br><br> Includes a confirmation number, some additional information, and a button to fill out another form. |
| confirmation.js | A simple JavaScript function that genertes a confirmation number when each form is loaded using the built in Math.floor() and Math.random() functions. |
| confirmationSubmit.js | Function that grabs the confirmation number that was generated in confirmation.js and outputs it to the confrimation page for the user to view. |
| dataHandling.js | Convert the form data to a JSON file when submitted using two functions. <br><br> The function *getFormJSON* creates a json object including all fields in the form as key-value pairs. <br><br> The function *handler* handles the form submission event, prevents default form behaviour, and checks validity. |
| duplicate.js | Uses jQuery to duplicate the contents in the first requirement, empty the inputs so that the new requirement does not have data from the first one, and change id values and name attributes. <br> <br>  Every time a new section is added this function needs to be updated for that section, so that elements do not have the same id and name attributes after a new requirements have been added.|
| index.html | Creates form fields and input boxes on page with formatting. <br><br> The *head* section includes form metadata, the title, and imports necesary bootstrap and css files as well as javascript files and scripts. <br><br> The *body* section creates all form fields and input boxes with proper formatting, it is the frontend code in html. The code appears in the order of the page from top to bottom. <br><br>Instuctions on how to create form fields with certain attributes can be found in the *Adding a New Input Section under Requirements* section below. |
| interactionCode.js | Includes functions that manipulate form elements in index.html and SubmitValidation.html based on user interaction. <br><br> Descriptions for each function in interactionCode.js can be found in the *interactionCode.js Function Descriptions* section below. |
| style.css |  Contains styles for most elements in index.html and SubmitValidation.html. Style classes of form element attributes. These attributes include color, size, position, font, borders, etc. <br><br> To give an html element a class of attributes use class="className" within the html element <br><br> *Note: Some styling has also been done using internal CSS in the index.html file.* |

###Form Functionality Overview
| Form Section/Question/Input | Functionality/Features |
| ----------- | ----------- |
|Prerequisites/Preliminary Information | <ul><li>"Required" Field</li><li>Calendar Date</li></ul> | 
| Requirements | <ul><li>"Required" Field</li><li>Collapsible</li><li>Add</li><li>Remove</li></ul> |
| Buisness Reason | <ul><li>"Required" Field</li></ul> |
| Risks | <ul><li>Add</li><li>Remove</li><li>Tool Tip</li></ul> |
| Servers/URL | <ul><li>"Required" Field</li><li>Radio Button (Disable Future Inputs)</li><li>Add</li><li>Remove</li></ul> |
| File Monioting | <ul><li>Add</li><li>Remove</li><li>Tool Tip</li></ul> |
| Alerting | Ticketing <br><ul><li>"Required" Field</li><li>Radio Button (Disable Future Inputs)</li><li>Tool Tip</li></ul> Distribution List <ul><li>"Required" Field</li><li>Tool Tip</li><li>Add</li><li>Remove</li><li>Form Validation</li></ul> |
| Acceptance Criteria | <ul><li>Add</li><li>Remove</li><li>Tool Tip</li></ul> |
| Additional Information | <ul><li>Add</li><li>Remove</li><li>Tool Tip</li></ul> |
| Submit | <ul><li>Alerts User</li><li>Highlight Inavlid Inputs</li><li>Change to SubmitValidation.js on success</li><li>Saves data to JSON</li></ul> |
| Confirmation Page | <ul><li>Display Confirmation Number </li><li>Option to Submit New Form</li></ul> |


###Input Types
| Input Type | Section Used In |
| ----------- | ----------- |
| Text | <ul><li>Preliminary Information/Prequisites</li><li>Business Reason</li><li>Risks</li><li>Servers/URL</li><li>File Monitoring</li><li>Alerting</li><li>Acceptance Criteria</li><li>Additional Information</li></ul> |
| Checkbox | <ul><li>Preliminary Information/Prequisites</li></ul> | 
| Calendar | <ul><li>Preliminary Information/Prequisites</li></ul> |
| Checkbox | <ul><li>Servers/URL</li><li>Alerting</li></ul> | 
| Drop Down | <ul><li>Alerting</li></ul> | 


###Adding a New Input Section under Requirements
1. Add the section
    index.html
    1. Add a new list element in the unordered list element in requirements section
    1. Add inputs/labels/tool tips/any other additional information needed for the new section inside of the list element
        1. For input names, name them as: 
            - *_**Section Identifier** + “ 1_* <br> [1] UN

    duplicate.js
    1. If checkboxes were used:
        1. Under the section commented with “Keep Requirement 1 Radio Buttons Checked”, create a variable and initialize it with the checked value of the input.
            - var *variableName = $("input[name='**inputName**']:checked").attr('id');*
        1. Set the value of the radio button in requirement 1 to that variable.
            - *$('#req_1').find('#'+**variableName**).prop('checked', true);*
    1. If any inputs/buttons were disabled using interaction.js:
        1. Under the section commented with “Enable Buttons/Inputs after Duplication”, enable the inputs. 
            - *$('#req_'+ index).find('#**inputId**') prop('disabled', false)*
    1. Change input id and name values. For names, change the value under the section commented with “” and for id values, create a commented section for the specific section and change the id value there. For id, ensure that the value is changed after the section commented with “Clone Requirement and Change IDs Collapse Functionality section”.
        1. Id Change: 
            - *$('#req_'+index).find('#**idValue**').attr('id','#**idValueString**_'+index);*
        1. Name Change: 
            - *$('#req_'+ index).find("[name='**Input Name** 1']").attr('name', '**Input Name** '+index)*
    1. Under the section commented with “Clear Input Values After Cloned”, clear the value of the new input (after creation of new requirement). 
        - *$('#req_'+ index).find('#**idValue**').val('');*
    <br>
1. Create an "add" button
    index.html
    1. Underneath the original input box add a div element with an id: <br> *“added” + **Section Identifier** + “Input_1”* <br> [1] LLU
    1. At the bottom of the list element add a button with an id: <br> *“add” + **Section Identifier** + “_1”* <br> [1] LUN
    1. Add an onclick event to the add button that calls on the function “addInputBox” and sends the button id and a name as parameters. <br> “addInputBox(this.id, name)” <br> *The name should be the same as the id of the div in part a, except without “added” and “_1”.
        -  _**Section Identifier** + “Input”_
    [1] LU

    interactionCode.js
    1. Find the “addInputBox()” function and add another else-if clause with the <br> _condition: name == **section identifier** (value passed in part c)_
    1. Outside of the function, add a global variable for the section and initialize it to 1.
    1. Inside the else-if clause, set “newBox.innerHTML” to the input element used to create the original input box in part a.
        1. Set the id of this new input to: 
            - *“**Original Input Id**” + idNum + “_” + **Section Global Variable***
        1. Set the name of this new input to: 
            - *“**Original Input Name** ” + idNum*
    1. Increment the global variable created in part e
    
    duplicate.js
    1. Change the id of the cloned version of the div created in part a 
        - *$('#req_'+ index).find('#**divID**).attr('id', '**divIDString**_'+index);*
    1. Change the id of the cloned version of the of the button created in part b 
        - $('#req_'+ index).find('#**buttonID**').attr('id', '**buttonIDString**_'+index);
    <br>
1. Create "remove" button
    index.html
    1. Create a button inside of the list element for the section and create a button. Set the id:
        - ***Section Identifier** + “Rem”* <br> [1] LU
    1. Add a div element with an id:
        -  *“added” + **Section Identifier** + “RemButton_1”* <br> [1] LLUU

    interactionCode.js
    1. Inside of the else-if clause for the section in the “addInputBox” function set “newRemBox.innerHTML” to button element created the original input box in part a. Set the id of this new button to: 
        - *“**Original Button Id**” + idNum + “_” + **Section Global Variable***
    1. After the global variable increment, add:
        - *document.getElementById('**divIDString**_' + idNum).appendChild(newRemBox);
        newRemBox.onclick = function() 
        {
            newBox.innerHTML = '';
            newRemBox.innerHTML = '';
        };*

    duplicate.js
    1. In the section where the previous ids for this section were changed add: 
        - $('#req_'+ index).find('#**divID**’).attr('id', '**divIDString**_'+index);

###Detailed Functionality Instructions
**Key: <span style="color:red">File name</span>-<span style="color:blue">Reference to specific attribute</span>-<span style="color:green">Function Name</span>*
1. Add new element within a requirement(ex. Server, Additional Information, etc.)
    - a. Create a list element within the unordered list inside div with the id *<span style="color:blue">collapsible_1</span>* in the *<span style="color:red">index.html</span>* file.
    - b. Add *<span style="color:blue">"label"</span>* tag for the new element with the name of the new element
    - c. Add and style user inputs using Bootstrap and CSS
2. Add/Duplicate an Additional Input Box
    - a. In *<span style="color:red">index.html</span>*:
        - i. Create a button element. Set the ID of this button to *<span style="color:blue">"add" + sectionName + "_1".</span>*
        - ii. Add an onclick event to button that calls the *<span style="color:green">addInputBox</span>* function
        - iii. Pass *<span style="color:green">this.id</span>* and a string containing a name that corresponds to the element. 
        - iv. Create "div" element. Set the id to *<span style="color:blue">"added" + name + "input".</span>* Note the name should be the same string as the one passed in the *<span style="color:green">addInputBox</span>* function in the step above.
    - b. In *<span style="color:red">interactionCode.js</span>*
        - i. Add global variable for new element
        - ii. Add another else-if clause in *<span style="color:green">addInputBox</span>*
        - iii. Set newBox.innerHTML to the input box being duplicated
3. Remove Specific Input Boxes
    - a. In *<span style="color:red">index.html</span>*
      - i. look under the comments to find what section of the form you want to remove
      - ii. find the line starting with the <input tag and delete it to delete the input box
      - iii. delete the line containing the <label tag for that specific box to delete the label text
4. Add Requirement
    - a. 
5. Remove Speicific Requirement
    - a. 
6. Create Collapsible
    - a. Create header for collapsible: INSTRUCTIONS
    - b. Create body for collapsible: INSTRUCTIONS
    - c. To add a new collapsible within the list element: INSTRUCTIONS
7. Submission Review Alert
    - a. 
8. Outline Invalid Inputs
    - a.
9. Confirmation Number Generations+Display
    - a.
10. Date Restriction
    - a.
11. Radio Button Options
    - a.
12. Drop-Down options
    - a. 
13. Email Form Validation
    - a.
14. Add Tooltips
    - a. 
15. JSON file save
    - a.
16. Button to new Form
    - a.
17. Disable Inputs
    - a. 

###interactionCode.js Function Descriptions

    - alertingInput(choice,id)
  This function is called when the radio buttons for ticket, email, or 'both' are selected in the alerting section of the form (index.html). If ticket is selected, the email input elements will be disabled. If email is selected, the ticket input elements will be disabled. If 'both' is selected, all elements will b enabled.

    - URLServerInput(choice,id)
...

    - saveJSON(text, filename)
Downloads files locally

    - serverWarning(id)
A warning pops up if a user inputs a server name that does not start with a03 or a70.

    - removeReq(id,name)
Allows user to remove requirements using an X button. The first requirement cannot be removed.

    - minDate()
Restricts the user from inputting Project End Dates that occurred in the past.

    - addInputBox(id, name)
Adds a new input box whenever an add button is clicked for a field. 

    -validatetextboxes()
If a user clicks submit and any text boxes that are required are not filled out, that text box will then have red border around it to indicate it has not been completed. 

    - characterCount
Once user begins typing in the text area for additional information, a character counter of 350 characters appears at the bottom of the textarea and reaches 0 once user has reached the character limit.  
