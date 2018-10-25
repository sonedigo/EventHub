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
	eventTitle:null,
	eventId:10,
	eventDescription: "dasd",
	location:"dadf",
	startsDate: "dafvgaga",
	endsDate : "dfvzvafg",
	OrganizerName: "daggad",
	OrganizerDescription: "dasdfa",
	OrganizerEmail: undefined ,
	OrganizerPhone: undefined

}
const eventInfo_update = {
	eventId: 10,
	eventTitle: "eventTitle",
	eventDescription: "dasd",
	location:"dadf",
	startsDate: "dafvgaga",
	endsDate : "dfvzvafg",
	OrganizerName: "daggad",
	OrganizerDescription: "dasdfa",
	OrganizerEmail: undefined ,
	OrganizerPhone: undefined};
const eventInfo_error_update = eventInfo_error;
let res = jest.fn();

describe("Test eventService",()=>{
	it("Test createEvent",async()=>{
		
		let return_info = await eventService.createEvent(eventInfo);
		let return_info_error = await eventService.createEvent(eventInfo_error);
		expect(return_info.isEventCreated).toBe(true);
		expect(return_info_error.isEventCreated).toBe(false);
	});
	it("Test updateEvent", async()=>{
		let return_info = await eventService.updateEvent(eventInfo_update);
		let return_info_error = await eventService.updateEvent(eventInfo_error);
		expect(return_info.isEventUpdated).toBe(true);
		//expect(return_info_error.isEventUpdated).toBe(false);
	});
	it("Test getEvent", async()=>{
		let return_info = await eventService.getEvent({eventId:8});
		let return_info_error = await eventService.getEvent(0);
		expect(return_info.isGot).toBe(true);
		expect(return_info_error.isGot).toBe(false);
	});
	it("Test deleteEvent", async()=>{
		let return_info = await eventService.deleteEvent({eventId:3});
		let return_info_error = await eventService.deleteEvent(0);
		expect(return_info.isEventDeleted).toBe(true);
		expect(return_info_error.isEventDeleted).toBe(false);
	});
})