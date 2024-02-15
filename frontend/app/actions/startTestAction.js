'use server'

import axios from 'axios'


const getdata = async () => {

}

export const startTest = async(prevstate,formdata)=>{
    const id = formdata.id
    try {
        const res = await axios.get(`http://localhost:8000/test/${id}`, {
            headers: {
                'Content-Type': "application/json"
            }
        })
        if (res.status == 200){
            
            console.log(res.data.data.questions)
            

            
        }
    } catch (error) {
        console.log(error)

    }
    
    // try {
    //     const res = await axios.post(`http://localhost:8000/test/start/${id}`)
    //     if (res.status == 200){
    //         return {
    //             redir:true
    //         }
    //     }
    //     else{
    //         return{
    //             redir:false,
    //             message:"something went worng try again !"
    //         }
    //     }
    // } catch (error) {
    //     return{
    //         redir:false,
    //         message:"something wrong on server side try again after some time !"
    //     }
    // }

}