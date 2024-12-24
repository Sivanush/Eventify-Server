import express from 'express';
import { createEvents, getEventDetails, getEvents, getEventsFiltered } from '../controller/eventController';
export const eventRouter = express.Router()




eventRouter.post('/create',createEvents)
eventRouter.get('/events',getEvents)
eventRouter.get('/events-filtered',getEventsFiltered)
eventRouter.get('/event/:eventId',getEventDetails)