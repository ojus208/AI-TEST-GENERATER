'use server'
import axios from 'axios'
export const genTestAction = async(prevstate,e)=>{
    const data = {
        topic:e.get("topic"),
        number_of_question:e.get("number_of_question"),
        level:e.get("hardness_level")
    }
    console.log(data)
try {
    console.log("working try part")
    const res =  await axios.post('http://localhost:8000/test/new/', data,{
        headers:{
            'Content-Type':"application/json"
        }
    })
    if (res.status == 201){
        return {
            redir:true,
            test_id:res.data.data
        }
    }
    else{
        return{
            redir:false,
            message:"server is unable to generate test try again"
        }
    }
} catch (error) {
    console.log("working catch part")
    return {
        redir:false,
        message:"something went wrong !"
    }
}
}