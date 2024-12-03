process.on('message', (message)=>{
    // Imprimimos mensaje recibido
    console.log(`🎅_💌_➡️_👦: ${message.message}`)
    // Respondemos mensaje al padre
    process.send({message: '🎆 And a happy new year 🎆'});
});