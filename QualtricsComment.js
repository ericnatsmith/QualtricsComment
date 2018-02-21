// Code borrowed from the other sources, and combined by Eric N. Smith

function showComment() /* Show the comment box when comment button is pressed */
    {
      var x = document.getElementById("responsebox"); 
      x.style.display = 'block';
    }

function hideComment() /* Hide the comment box when comment is done or closed*/
    {
      var x = document.getElementById("responsebox");
      x.style.display = 'none';
    }

$("NextButton").style.cssText = "display:inline;";

// This function gets the checkbox data selected
//function getSelectedChbox(document.getElementById("commentform")) {

var selchbox;

function getSelectedChbox(myform) {
 // JavaScript & jQuery Course - http://coursesweb.net/javascript/
  selchbox = [];        // array that will store the value of selected checkboxes

  // gets all the input tags in frm, and their number
  var inpfields = myform.getElementsByTagName('input');
  var nr_inpfields = inpfields.length;

  // traverse the inpfields elements, and adds the value of selected (checked) checkbox in selchbox
  for(var i=0; i<nr_inpfields; i++) {
    if(inpfields[i].type == 'checkbox' && inpfields[i].checked == true) selchbox.push(inpfields[i].value);
  }
  // return selchbox;
}

function saveCommentData() {
        // everything in here will run when you click the next button
        // note that it has access to javascript variables from the enclosing function
        // however, if you declare something in here with "var" then it will be a LOCAL variable

        // the following alert will appear when you click the next button. For me, it appears twice;
        // I'm not sure why.

        // Save the checkbox values
        //var responseCheckBox = document.getElementById(currentQuestionID + '~1~result')
        //var currentResponse = responseTextField.value
        //alert("Result: " + currentResponse + "\nwill be available to future questions as: \n$" + "{e://Field/" + resultEmbeddedName + "}")

        Qualtrics.SurveyEngine.setEmbeddedData(resultEmbeddedName, selchbox)

        // and now run the event that the normal next button is supposed to do
        //Qualtrics.SurveyEngine.navClick(event, 'NextButton')
}


Qualtrics.SurveyEngine.addOnload(function()
{
  // This function actually saves the data to qualtrics
  /*Place your JavaScript here to run when the page loads*/
    // https://stackoverflow.com/questions/22851340/in-qualtrics-surveys-how-can-you-save-the-response-to-an-item-into-embedded-dat
    // everything here runs when the page is loaded. So, we can get the Question ID here,
    // but we can't get the response value until later.
  // testingData = this.getQuestionInfo();
    currentQuestionID = this.getQuestionInfo().QuestionID
    //var resultEmbeddedName = currentQuestionID + "_result"  //e.g. QID6_result 
    resultEmbeddedName = "comment_" + currentQuestionID   //e.g. result_6
  //resultEmbeddedName = "comment_" + 'Q3'   //e.g. result_6
  });

Qualtrics.SurveyEngine.addOnReady(function()
{
  /*Place your JavaScript here to run when the page is fully displayed*/
   //document.getElementById('moveMe').appendChild(
    //document.getElementById('Buttons')
 // );
  //$("NextButton").style.cssText = "display:inline;";
  $("NextButton").setAttribute("style", "display:inline;");
  $('Buttons').insert($('moveMe').descendants()[0]);
  jQuery('#QID476 .QuestionBody').appendTo(jQuery("#mychat"));
  jQuery('#SubmitButtonES').appendTo(jQuery("#mychat"));
  jQuery('#QID476 .TextEntryBox').attr("placeholder", "Tell us more...");



  

});

Qualtrics.SurveyEngine.addOnUnload(function()
{
  /*Place your JavaScript here to run when the page is unloaded*/

});