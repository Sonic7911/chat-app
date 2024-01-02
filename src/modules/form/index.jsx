
import React, { useState } from 'react'
import Input from '../../components/input'
import Button from '../../components/button/button'

const Forms = (
  {
    
  }
) => {
    const[isSignedIn, setIsSignedIn] = useState(true);

    const [data, setdata] = useState({

        ...(!isSignedIn && {userName: ''}),

        email: '',
        password: '',

    })

    const toggleForm =()=>{
        setIsSignedIn(previousState => !previousState)
    }
    




   
  return (
    <>
     <div className="min-h-screen flex items-center justify-center bg-gray-200 bg-gradient-to-r from-blue-300 to-bg-cyan-200">
    <div className="bg-[#8dc6ff]  w-[400px] h-[600px] shadow-lg flex flex-col justify-center items-center rounded-lg" >
        <div className="text-4xl font-bold text-white pb-5">Welcome {isSignedIn && "Back"}</div>
        <div className='flex justify-center items-center mb-4'>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>  
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 11l0 5" /><path d="M8 8l0 .01" /><path d="M12 16l0 -5" /><path d="M16 16v-3a2 2 0 0 0 -4 0" /></svg>
        
        </div>  
        <div className="font-medium text-white mt-2">Please Enter your details</div>
        
       
        <form className="flex flex-col items-center justify-center w-full text-white"
        onSubmit={(e)=>{
            e.preventDefault() 
            
        }}>
        {!isSignedIn?<Input label='User Name' type='text' name='userName' id='userName' placeholder='Enter your user name' required='true' value={data.userName} onChange={(e)=>setdata({...data,userName: e.target.value})}/>:''}
        
        <Input label='Email' type='email' name='email' id='email' placeholder='Enter your email' required='true' value={data.email} onChange={(e)=>setdata({...data,email: e.target.value})} />
        
        <Input label='Password' type='password' name='password' id='password' placeholder='Enter your Password' required= 'true' value={data.password} onChange={(e)=>setdata({...data,password: e.target.value})} />
        
        {!isSignedIn?<Button id='signUp' label='Sign Up' type='submit'/>:<Button id='login' label='Login' type='submit'/>}
        
        </form>
      
        { isSignedIn ? <div className='text-white cursor-pointer' onClick={toggleForm}>Dont have an account?</div> :
        <div className='cursor-pointer text-white' onClick={toggleForm}> 
            already have an account? <span className='text-primary cursor-pointer'>login</span>
        </div>
        
         }

    </div>
    </div>
    </>
  )
}

export default Forms
