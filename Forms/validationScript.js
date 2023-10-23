  // JavaScript code for form validation
	

     

      // Regular expression pattern for alphanumeric input
      let regex = /^[a-zA-z]/;
      
       // Retrieve the input field value
document.getElementById('myForm').addEventListener('submit', function(event) {
  let input = document.getElementById('inputField').value;
  // Check if the input value matches the pattern
  if(!regex.test(input)){
    // Invalid input: display error message
    alert("Invalid input.")
    // Prevent form from submitting
    event.preventDefault();
  } else {
    // Valid input: display confirmation and submit the form
    alert("Input submitted!")
  }  
});