module.exports = {
    addPerson:(req,res,next)=>{
        const db = req.app.get('db');
        db.regUser([req.body.guestCount, req.body.time, req.body.firstName, req.body.lastName, req.body.middleInt, req.body.emailAddress, req.body.phoneNumber, req.body.ageCheck, req.body.lawViolation, req.body.tosAcknoledgeMent, req.body.confirmationNum]).then( success =>{
            res.status(200).send(success)
        })
    }
}
