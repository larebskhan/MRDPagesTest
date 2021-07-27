const formElement = document.querySelector('form#mrdform')
//Convert the form to JSON
const getFormJSON = (form) => 
{
	const data = new FormData(form);
	return Array.from(data.keys()).reduce((result, key) => 
    {
		if (result[key]) 
        {
			result[key] = data.getAll(key)
			return result
		}
		result[key] = data.get(key);
		return result;
	}, {});
};

//Convert form to JSON
const handler = (event) => 
{
	event.preventDefault();
	const valid = formElement.reportValidity();
	if (valid) 
    {
		const result = getFormJSON(formElement);
		console.log(result);
		data = {"event": result}
		//console.log(data)
		const json_data = JSON.stringify(data, null, 5);
		const confirmationNum = result["Confirmation Number"];
        saveJSON(JSON.stringify(data, null, 5), "MRD_Request_"+confirmationNum+".json", confirmationNum);
		//saveJSON(data, "MRD_Request_"+confirmationNum+".json")
	}
}

formElement.addEventListener("submit", handler)
