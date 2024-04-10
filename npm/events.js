//event

const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('Check-Page',(data)=>{
    console.log('Event-Occured',data.message);
})

emitter.on('Check-Page',(data)=>{
    console.log('Event-Occured',data.message);
})

emitter.on('Check-Page',(data,status)=>{
    console.log('Event-Occured',data.message,status);
})

emitter.emit('Check-Page',{message:'Hello World'},200)