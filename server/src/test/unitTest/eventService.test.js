const {mysqlConnection,mysqlPromise} = require("../../database/mysqlConfig");
const eventService = require("../../services/eventService");

const eventInfo = {
	eventTitle: "eventTitle",
	eventDescription: "dasd",
	location:"dadf",
	startsDate: "dafvgaga",
	endsDate : "dfvzvafg",
	OrganizerName: "daggad",
	OrganizerDescription: "dasdfa",
	OrganizerEmail: undefined ,
	OrganizerPhone: undefined
}

const eventInfo_error = {
	//eventTitle is null
	eventDescription: "dasd",
	location:"dadf",
	startsDate: "dafvgaga",
	endsDate : "dfvzvafg",
	OrganizerName: "daggad",
	OrganizerDescription: "dasdfa",
	OrganizerEmail: undefined ,
	OrganizerPhone: undefined

}
describe("Test eventService",()=>{
	it("Test createEvent",async function(){
		let res = jest.fn();
		let return_info = await eventService.createEvent(eventInfo);
		let return_info_error = await eventService.createEvent(eventInfo_error);
		expect(return_info.isEventCreated).toBe(true);
		expect(return_info_error.isEventCreated).toBe(false);
	});
	it("Test updateEvent", ()=>{

	});
	it("Test getEvent", ()=>{

	});
	it("Test deleteEvent", ()=>{

	});
})