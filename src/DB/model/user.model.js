import {Schema, model } from "mongoose";
const schema = new Schema({
    firstName:{
        type:String,
        required:true,
        trim: true,
        lowercase:true
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
    email:{
        type:String,
        required:function(){
            if(this.phoneNumber){
                return false
            }
            return true
        },
        trim:true,
        lowercase:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:function(){
            if(this.email){
                return false
            }
            return true
        },
        unique:true
    },
    dob:{
        type:Date
    }

},{timestamps:true})


schema.virtual("fullName").get(function (){
    return `${this.firstName} ${this.lastName}`
})

schema.virtual("fullName").set(function(value){
    const [firstName,lastName] = value.split(" ")
    this.firstName = firstName
    this.lastName = lastName
})
schema.virtual("age").get(function(){
    return new Date().getFullYear() - new Date(this.dob).getFullYear()
})

export const User = model("User", schema)
