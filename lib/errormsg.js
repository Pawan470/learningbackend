exports.Blog = {
    title: "title is required",
    description: "desciption is required",  
    createdByID: "createdByID is required",
    alreadyExist: "Blog already exist",
    success: "Blog added sucessfully",
    successData: "data fetch sucessfully",

    NoRecord: "NO record found",


    Login:'Login success'

}


exports.eventMsg = {
    eventFee: "Please enter the fee",
    Bookedevent: "Event is already booked",
    alreadyBooked: "Event already booked",
    broadcastLink: "Broadcast Link is required",
    exist: (isActive, endDate, address) => `On ${endDate} at ${address} an event already exist${isActive ? "" : "but not active"}`,
    invitationAccepted: "Invitation accepted successfully",
    alreadySend: "Already send the invitation",
    invitationSend: "Invitation sent successfully",
    favouriteRemoved: "Event removed from your favourite list",
    alreadyFavourite: "This event is already in your favourite list",
    favouriteAdd: "Event added in your favourite list",
    alreadyInIntrust: "This event is already in your Interest list",
    intrustAdd: "Event added in your Interest list",
    intrustRemoved: "Event removed from your Interest",
    endTime: "End date time should be greater than start date time",
    brandLogo: "BandLogo is required",
    bannerImage: "Banner image is required",
    eventModeRreq: "Please enter event mode i.e. Online/Offline",
    nameRq: "Event name is required",
    descriptionRq: "Event description is required",
    typeRq: "Event type is required",
    startDateRq: "Event start date required",
    endDateRq: "Event end date required",
    attendeeRq: "Total attendees is required",
    logoRq: " Event logo  is required",
    imageRq: "Event image is required",
    categoryRq: "Event category is required",
    createdByRq: "Event created person name required ",
    eventFreeRq: "Event free is required",
    eventExits: "Event is already exits ",
    eventSaveMsg: "Event created successfully ",
    eventUpdated: "Event update successfully",
    eventIdRq: "Event id is required",
    EventUserIdRq: "User Id is required",
    EventUserRemove: "removed successfully",
    EventUserAdd: "add successfully",
    VisibilityRq: "Visibility is required",
    VenueDetails: "Please enter venue",
    Location: "Location is required i.e. coordinates",
    address: "Address is required",
    startTimeRq: "Event start time required",
    endTimeRq: "Event end time required",
    Speaker: "Speaker is required ",
    RegistrationRq: "Registration Link is required",
    type: "Event type is required",
    addEvent: "Event successfully added",
  timezoneId: "Timezone id is required",
  eventSuccess: "Event add successFully",
  alreadyExist: "Event already Exist",
  createdByID: "created By required",




  };