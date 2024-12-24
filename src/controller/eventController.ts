import { Request, Response } from 'express';
const { v4: uuidv4 } = require('uuid');
import { eventModel } from '../model/eventSchema';
import { Event } from '../interface/events';
import { log } from 'node:console';


const generateShortUuid = (): string => {
    const fullUuid = uuidv4().replace(/-/g, '');  
    return fullUuid.slice(0, 8);  
  };



export const createEvents = async (req:Request,res:Response) => {
    try {

        const eventData = req.body

        let event = new eventModel({
            ...eventData,
            eventId:generateShortUuid()
        })

        let savedEvent = await event.save()
        res.status(201).json(savedEvent)
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
}



export const getEventsFiltered = async (req:Request,res:Response) => {
    try {

        const { date, location, audience } = req.query;

        
        let query: Partial<Event> = {};

        if (date) {
            query.date = new Date(date as string);
          }
      
          if (location) {
            query.location = location as string
          }
      
          if (audience) {
            query.audiences = { $in: [audience as string] };
          }
          
          console.log(query);
          
        const events = await eventModel.find(query).sort({ eventDate: 1 });
        res.status(200).json(events)

    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
}

export const getEvents = async (req:Request,res:Response) => {
    try {
        const events = await eventModel.find().sort({ eventDate: 1 });
        res.status(200).json(events)

    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
}


export const getEventDetails = async (req:Request,res:Response) => {
    try {

        const {eventId} = req.params
        const event = await eventModel.findOne({eventId});
        res.status(200).json(event)

    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
}

