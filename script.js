

function main() {
  var adGroupName = "Massage Therapists";
  var exactMatchKeywords = [
    "online booking for massage therapists",
    "massage therapy business software",
    "massage booking software",
    "massage appointment scheduling software",
    "massage booking service",
    "massage therapy practice management software",
    "online appointment scheduling for massage therapists",
    "massage scheduling software",
    "massage billing software",
    "massage appointment booking system",
    "massage appointment scheduling",
    "massage appointment app",
    "massage book app",
    "best massage booking software"
  ];

  var email = "youremail@example.com";
 
  var adGroupIterator = AdsApp.adGroups().withCondition("Name = '" + adGroupName + "'").get();
 
  if (adGroupIterator.hasNext()) {
    var adGroup = adGroupIterator.next();
    var searchTermIterator = adGroup.searchTerms().get();

    while (searchTermIterator.hasNext()) {
      var searchTerm = searchTermIterator.next().getText();
     
      if (exactMatchKeywords.indexOf(searchTerm) === -1) {
        adGroup.createNegativeKeyword(searchTerm);
        Logger.log("Added negative keyword: " + searchTerm);
       
        // Send email notification
        MailApp.sendEmail(email, "New Negative Keyword Added",
                          "A new negative keyword has been added: " + searchTerm);
      }
    }
  }
}


