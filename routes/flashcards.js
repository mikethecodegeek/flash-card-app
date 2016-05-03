/**
 * Created by Admin on 5/2/16.
 */
var express = require('express');
var router = express.Router();
var FlashCard = require('../models/flashCards');


router.get('/', (req,res)=> {

    FlashCard.find((err, data) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send(data);
            }

        });
    });

router.post('/', (req,res)=> {

   var card = new FlashCard(req.body);
    card.save((err)=> {
        if (err){
            console.log(err);
        } else {
            res.send(card);
        }
    });

});

router.get('/:id', (req,res)=> {
    //console.log(req.params);
    FlashCard.find({category:req.params.id}, (err,data) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(data);
        }
    })
});


router.delete('/:id', (req,res)=> {
    FlashCard.findByIdAndRemove(req.params.id, (err,data)=> {
        if (err){
            console.log(err);
        }
        else {
            res.send(data);
        }
    });
});

router.put('/:id', (req,res)=> {
    FlashCard.findByIdAndUpdate(req.params.id,{$set: req.body}, {new:true}, (err,data)=> {
        if (err){
            console.log(err);
        }
        else {
            res.send(data);
        }
    });
})



module.exports = router;
