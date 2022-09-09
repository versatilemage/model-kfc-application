import {KFCModel} from '../Models/KfcModel.js';
import Jwt from 'jsonwebtoken';
const {sign, verify} = Jwt
const ACCESS = "4da4e435a4455093aff344937e824f2938b79620fc04ae3693443e1391c2b01b1cbf0c609178669f79c4fa27e40c7744e7e25f4b7bed6bede36b4914b48b13fa"
import('dotenv')

export const addMenuToKfc = async (req, res) => {
    const {identifier, price, name, img} = req.body
    const accessToken = sign({identifier: identifier},ACCESS, {expiresIn: "60s"})

    res.cookie(String(identifier), accessToken, {
        path: "/",
        expires: new Date(Date.now() + 1000 * 60),
        httpOnly: true,
        sameSite: "lax"
    })
    const data = new KFCModel({
            price: price,
            name: name,
            img: img,
            identifier: identifier
    })
    data.save((err, data) => {
        if(err) {
            res.send("error")
        }
        res.send({
            status: 200,
            message: 'Data saved!!',
            data: data,
            Token: accessToken
        })
    })
}

export const tokenVerification = (req, res, next) => {
    const cookies = req.headers.cookie
    const token = cookies.split("=")[1]
    verify(String(token), ACCESS, (err, data) => {
        if (err) {
            return res.send({
                status: 400,
                message: "invalid token used"
            })
        }
        // else {
        //     res.send ({
        //         status: 200,
        //         data: [data],
        //         message: "menu is present"
        //     })
        // }
        console.log(data.identifier)
        req.identifier = data.identifier
    })
    next()
}

export const getMenu = (req, res) => {
    const menuid = req.identifier
    KFCModel.findOne({ identifier: menuid }, 
    (err, data) => {
        if(err){
            console.log(err);
        }
        else {
            if(!data) {
                return res.send({
                    status: 404,
                    message: "menu identifier is not found"
                })
            }
            return res.send({
                status: 200,
                message: 'Data retrived!!',
                data: [data]
            });
        }
    });

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
    const {price, name, img} = req.body
    const upid = req.params.identifier
    KFCModel.findOneAndUpdate({identifier: upid},
        {$set:{
            price: price,
            name: name,
            img: img
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