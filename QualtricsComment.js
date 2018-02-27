// Code borrowed from the other sources, and combined by Eric N. Smith

// These two functions can go in footer
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

// These should be on javascript of each page with comment
Qualtrics.SurveyEngine.addOnReady(function()
{
    // Get the id of the current question (to move to comments)
    currentQuestionID = this.getQuestionInfo().QuestionID 

    // Move Button where page buttons go
    $('Buttons').insert($('commentBoxES').descendants()[0]);  

    // Move Wording to CommentBox
    jQuery('#' + currentQuestionID + ' .QuestionBody').appendTo(jQuery("#commentWording")); 

    // Put the submit button inside the comment box
    jQuery('#SubmitButtonES').appendTo(jQuery("#commentWording")); 

    // Make a placeholder for any text areas
    jQuery('#' + currentQuestionID + ' .TextEntryBox').attr("placeholder", "Tell us more..."); 
  
  // Remove padding so people can see questions
  jQuery("#commentBoxES").css("padding-top","0px");
  
  });