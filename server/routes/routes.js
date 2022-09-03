import {KFCModel} from '../Models/KfcModel.js';

export const addMenuToKfc = async (req, res) => {
    const upid = req.body.identifier
    const price = req.body.price
    const name = req.body.name
    const img = req.body.img
    const data = new KFCModel({
            price: price,
            name: name,
            img: img,
            identifier: upid
    })
    data.save((err, data) => {
        if(err) {
            res.send("error")
        }
        res.send({
            status: 200,
            message: 'Data saved!!',
            data: data
        })
    })
}

export const getAllMenu = (req, res) => {
    KFCModel.find(function(err,data) {
        if(err){
            console.log(err);
        }
        else {
            return res.send({
                status: 200,
                message: 'Data retrived!!',
                data: data
            })
        }
    });
}

export const getMenuById = (req, res) => {
    console.log(req.params);
    KFCModel.findOne({ identifier: req.params.identifier }, 
    (err, data) => {
        if(err){
            console.log(err);
        }
        else {
            if(!data) {
                return res.send('Please enter valid item')
            }
            return res.send({
                status: 200,
                message: 'Data retrived!!',
                data: [data]
            });
        }
    });

}

export const updateMenuById = async(req, res) => {
    const upid = req.params.identifier
    const price = req.body.price
    const name = req.body.name
    const img = req.body.img
    KFCModel.findOneAndUpdate({identifier: upid},
        {$set:{
            price: price,
            name: name,
            img: img,
            identifier: upid
        }},
        (err, data) => {
        if(data==null){
            res.send("enter the value present in database")
        }else{
            res.send(data)
        }
    })
}

export const deleteMenuById = (req, res) => {
    KFCModel.deleteOne({identifier: req.params.identifier}, (err, data) => {
        return res.send({
            status: 200,
            message: 'Data deleted!!',
            data: data
        });
    })
}