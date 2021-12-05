const mongoose = require('mongoose');

/*
    Meet up schema

    required
    - first, last, email, password
*/
const MeetupsSchema = new mongoose.Schema({
    schemaVersion: { type: int, default: 0 },
    mentor: { type: ObjectId },
    mentee: { type: ObjectId },
    status: { type: String }, // 0 pending // 1 scheduled // 2 completed // 3 canceled
    createdDate: { type: Date },
    meetingDate: { type: Date },
    lastEdited: { type: Date },
    // an easy way to store comms is store it here?
    // comms between mentor - mentees after matched by WoC
    // simpler to make it a forum thread instead of chat, but its not as fun
});

const MeetupModel = mongoose.model('meetup', UserSchema);

module.exports = MeetupModel;
