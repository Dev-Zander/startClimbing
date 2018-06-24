module.exports = {
    getUserInfo:(req,res,next)=>{
        const db = req.app.get('db')
        db.find_user([req.user]).then(response =>{
            res.status(200).send(response)
        }).catch(response =>{
            if(!response){
                res.status(400).send(console.log('Not Logged In'))
            }
        })
    },
    getGuestList:(req, res, next)=>{
        const db = req.app.get('db');
        db.getguests().then( guest =>{
            res.status(200).send(guest)
        }).catch( guest =>{
            if(!guest){
                res.status(400).send('No Guest')
            }
        })
    }
}
