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

##Form Functionality Overview
| Form Section/Question/Input | Functionality/Features |
| ----------- | ----------- |
|Prerequisites/Preliminary Information | <ul><li>"Required" Field</li><li>Calendar Date</li></ul> | 

###Form Functionality Overview
1. Header information
    - Checkboxes
    - Required
    - Calendar Date
2. Requirements 
    - Required
    - Collapsible
    - Add
    - Remove targeted requirements
3. Business Reason
    - Required
4. Risks
    - Add
    - Remove
    - Tooltip
5. Servers
    - Required
    - Radio Button
    - Add
    - Remove
6. File Monitoring
    - Tooltip
    - Add
    - Remove
7. Alerting
    - Required
    - Tooltip
    - Search Scheduler
    - Radio Button
        - Disables/enables specific sections based on user input
    - Ticketing
        - Serverity drop-down(required)
        - Ticketing Condition
        - Ticket bucket drop-down
    - Distribution List
        - Add
            - Form Validation(email with specific domains)
        - Remove
        - Tooltip
8. Acceptance Criteria
    - Tooltip
    - Add
    - Remove
9. Additional Information
    - Tooltip
    - Add
    - Remove
10. Submit
    - Alerts user
    - Highlights inputs red on invalid input
    - Moves to SubmitValidation.html on success
    - Saves data to JSON
11. Confirmation Page
    - Display confirmation number
    - Button to submit new form 


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
    - a. 
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
