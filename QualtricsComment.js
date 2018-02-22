// Code borrowed from the other sources, and combined by Eric N. Smith

function showComment() /* Show the comment box when comment button is pressed */
    {
      var x = document.getElementById("responseBox"); 
      x.style.display = 'block';
    }

function hideComment() /* Hide the comment box when comment is done or closed*/
    {
      var x = document.getElementById("responseBox");
      x.style.display = 'none';
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
  $('Buttons').insert($('commentBoxES').descendants()[0]);  // Move 
  jQuery('#' + currentQuestionID + ' .QuestionBody').appendTo(jQuery("#commentWording"));
  jQuery('#SubmitButtonES').appendTo(jQuery("#commentWording"));
  jQuery('#' + currentQuestionID + ' .TextEntryBox').attr("placeholder", "Tell us more...");

});

Qualtrics.SurveyEngine.addOnUnload(function()
{
  /*Place your JavaScript here to run when the page is unloaded*/

});