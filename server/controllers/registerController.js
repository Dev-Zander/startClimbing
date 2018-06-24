module.exports = {
    addPerson:(req,res,next)=>{
        const db = req.app.get('db');
        db.regUser([req.body.guestCount, req.body.time, req.body.firstName, req.body.lastName, req.body.middleInt, req.body.emailAddress, req.body.phoneNumber, req.body.ageCheck, req.body.lawViolation, req.body.tosAcknoledgeMent, req.body.confirmationNum]).then( success =>{
            res.status(200).send(success)
        })
    },
    checkAdmin:(req,res,next)=>{
        const db = req.app.get('db');
        db.checkAdmin([req.user]).then(response =>{
       if(!response[0].is_admin){
           res.status(404).send(false)
       }else if(response[0].is_admin === true){
           res.status(200).send(true)
       }else{res.status(404).send(false)}
        }).catch(response=>{
            res.status(200).send(false)
        }
        )
    }
   
}
