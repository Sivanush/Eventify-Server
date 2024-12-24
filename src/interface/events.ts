export interface Event{
    eventId:string,
    name:string,
    date?:Date,
    time:string,
    location:string,
    audiences:string[] | { $in: string[] },
    images:string[],
    createdAt:string
}