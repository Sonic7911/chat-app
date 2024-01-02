import React, { useState } from 'react'
import { useRef,useEffect } from 'react'
import Avatar from '../../assets/user.png'
import '../../css/scroll.css'


const DashBoard = () => {

const [messages, setMessages] = useState([])
const [currMessage,setCurrMessage] = useState('')


const messagesEndRef = useRef(null);



    const contacts = [
        {
            name: 'User 1',
            status: 'online',
            image: '',
        },
        {
            name: 'User 2',
            status: 'online',
            image: '',
        },
        {
            name: 'User 3',
            status: 'offline',
            image: '',
        },
        {
            name: 'User 4',
            status: 'online',
            image: '',
        },
        {
            name: 'User 5',
            status: 'online',
            image: '',
        },
    ]
    const handleChange = (e) => {
        setCurrMessage(e.target.value)
    }

    //scroll to recent messages
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
      };

      useEffect(()=>{scrollToBottom();},
      [messages])

        const handleSendMessage = () => {
            if (currMessage.trim() !== '') {
              setMessages([...messages, { message: currMessage }]);
              setCurrMessage(''); // Clear the current message after sending
            }
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          handleSendMessage(); // Call the function to send the message
        }
    }
            

           




  return (
    <div className='w-screen flex'>
      <div className='w-[25%] h-screen border bg-slate-50'>
            <div className='flex justify-center items-center my-8'>
                <div className='rounded-full border-2 py-1.5 border-primary '>
            <img src={Avatar} width={50} />
            </div>
            <div className='ml-10'>
                <h3 className='text-2xl'>
                    User Name
                </h3>
                <p className='text-lg font-thin'>
                    My account
                </p>
            </div>
            </div>
            <hr />
            <div className='text-primary text-lg ml-14 mt-5'> Messages
            </div>
            <div>
              {
                contacts.map(({name, status, image })=>{
                    return(
                                <div>
                                    <div className='flex ml-16 items-center my-8'>
                                        <div className='rounded-full border-2 py-1 border-primary '>
                                    <img src={Avatar} width={40} />
                                    </div>
                                    <div className='ml-10'>
                                        <h3 className='text-xl'>
                                            {name}
                                        </h3>
                                        <p className='text-lg font-thin'>
                                            {status}
                                        </p>
                                    </div>
                                    </div>
                                    
                                </div>
                                
                    )
                })
              }
            </div>


        
      </div>
      

      <div className='w-[50%] h-screen bg-white flex flex-col items-center'>
              <div className='w-[75%] bg-stone-200 h-[80px] mt-14 rounded-full flex items-center px-10 m-8'>
                <div><img src={Avatar} width={60} height={60} /></div>
                <div className='ml-1 mr-auto'>
                    <h3 className='text-lg ml-5'>Alex</h3>
                <p className='text-sm font-light text-green-300 px-5'>online</p>
              </div>
              <div className='cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone-call" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /><path d="M15 7a2 2 0 0 1 2 2" /><path d="M15 3a6 6 0 0 1 6 6" /></svg>
              </div>
              
              </div>
              <div className='border w-full h-2/3 overflow-y-auto '>
              
               {messages.map((msg, index)=>(
                   <div key={index} className='bg-custom text-white  w-52 my-5 mx-5 px-8 py-2 rounded-md max-w-[200px]'>{msg.message}</div>
                   ))}

                   <div ref={messagesEndRef}/>
               
              </div>

              <div className='w-4/6 flex cursor-pointer'>
                <div className='flex items-center mx-2'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
             
              </div>
              <div className='flex items-center mx-2'>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8.813 11.612c.457 -.38 .918 -.38 1.386 .011l.108 .098l4.986 4.986l.094 .083a1 1 0 0 0 1.403 -1.403l-.083 -.094l-1.292 -1.293l.292 -.293l.106 -.095c.457 -.38 .918 -.38 1.386 .011l.108 .098l4.674 4.675a4 4 0 0 1 -3.775 3.599l-.206 .005h-12a4 4 0 0 1 -3.98 -3.603l6.687 -6.69l.106 -.095zm9.187 -9.612a4 4 0 0 1 3.995 3.8l.005 .2v9.585l-3.293 -3.292l-.15 -.137c-1.256 -1.095 -2.85 -1.097 -4.096 -.017l-.154 .14l-.307 .306l-2.293 -2.292l-.15 -.137c-1.256 -1.095 -2.85 -1.097 -4.096 -.017l-.154 .14l-5.307 5.306v-9.585a4 4 0 0 1 3.8 -3.995l.2 -.005h12zm-2.99 5l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" stroke-width="0" fill="currentColor" /></svg>
              </div>

              <div className='w-full'>
        <textarea
          id="textarea"
          name="textarea"
          className="w-full px-3 py-2 my-2 border rounded-xl text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500 bg-slate-50"
              value={currMessage}
          placeholder="message..."
             onChange={handleChange}
             onKeyDown={handleKeyDown}

        ></textarea>
        </div>

        <div className='flex items-center pl-8' onClick={handleSendMessage}>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z" /><path d="M6.5 12h14.5" /></svg>
        </div>
        </div>
              
      </div>
      
      <div className='w-[25%] h-screen bg-slate-50'></div>

    </div>
  )
}

export default DashBoard
