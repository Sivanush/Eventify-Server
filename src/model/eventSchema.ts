import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    eventId: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    audiences: [{
        type: String,
        required: true
    }],
    images: [{
        type: String,
    }],
    createdAt: {
        type: Date,
        default: Date.now()
    },
    details:{
        type:String,
        required:true
    }
})


export const eventModel = mongoose.model('events',eventSchema)