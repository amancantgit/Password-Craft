import React, { useEffect, useState } from 'react'
import unsplash from '../assets/unsplash.jpg'
import net from '../assets/net.jpg'
import nft from '../assets/nft.jpg'



const Password = () => {

    // dark mode
    const [myStyle, setStyle] = useState({
        color: 'black', backgroundImage: `url(${unsplash})`, backgroundSize: 'cover', backgroundPosition: 'center',
    })
    const [btnText, setText] = useState("Toggle Mode")

    function modeHandler(){
        if(myStyle.color === 'black'){
            setStyle({color: 'white', backgroundImage: `url(${nft})`, backgroundSize: 'cover', backgroundPosition: 'center'})
            // setText("Toggle Mode")
            setBotStyle({color: '#D1D5DB'})
        }
        else if(myStyle.color === 'white'){
            setStyle({color: 'black'})
            // setText("Toggle Mode")
            setBotStyle({color: 'white'})
        }
    }

    // for button
    const [btnStyle, setBtnStyle] = useState({color: 'white'})
    function  btnHandler(){
     if(btnStyle.color === 'white'){
         setBtnStyle({color: 'gray', backgroundColor: 'white'})
     }
     else if(btnStyle.color=== 'gray'){
         setBtnStyle({color: 'white'})
     }
    }

    const [botStyle, setBotStyle] = useState({color: 'white', marginLeft: '2.5rem', marginRight: '2.5rem', marginTop:'1rem', marginBottom: '1rem', fontSize: '1.125rem'})

    // generating password
    const [password , setPassword] = useState("")
    const [length, setLength] =useState(9)
    const [specialchar, setSpecialChar] = useState(false)
    const [number, setNumber] = useState(false)

    useEffect(() => {
        let str = "AqwertnCimbuszExcvad";
        if(specialchar) str += "!@#$&*";
        if(number) str += "1234567890";
        let generatedpassword = "";

        for(let i=0; i<length; i++){
            let index = Math.random() * str.length;
            generatedpassword += str.charAt(index)
        }

        setPassword(generatedpassword)
    }, 
    [length, specialchar, number])


  return (
  <>
  <div className='bg-cover bg-center' style={{backgroundImage: `url(${unsplash})`}}>
    <div  className='absolute top-3 right-10'>
        <button onClick={() => {
            {modeHandler()}
            {btnHandler()};
        }} style={btnStyle} className=' px-4 mt-3 py-1 rounded-full '>{btnText}</button>
    </div>
        
    <div style={myStyle} className='h-screen '>
        <br/>
        
        <div className='flex justify-center'>
          <h1 className= 'text-2xl font-serif '>User-Driven Password </h1>
        </div>

        <br/> <hr/> <br/>
        <h1 className='flex justify-center items-center text-xl'>Password: &nbsp; <p className='text-xl text-black bg-blue-200 px-8 py-1 rounded-md'>{password}</p></h1>

        <div className='flex justify-center items-center mx-auto m-10 text-xl w-full max-w-[75vw] min-h-[40%] bg-white rounded-lg shadow-xl bg-opacity-75'>
           
            <div className='w-[60%] m-5'>
                <h1 >Customize and generate a password tailored to your specific preferences, including length, special characters, and numbers.</h1>
                <p className="mt-4 text-lg text-gray-700">
                    “Creating a strong password is one of the best ways to secure your personal information online. Our password generator allows you to control the complexity of your password by selecting the desired length, adding special characters, and incorporating numbers.”
                </p>
            </div>

            <div className='p-2 w-[40%]'>
                <div className='mb-3'>
                    Password Length &nbsp; <input type='range' max={20} min={4} className='w-[40%]'
                    onChange={(event) =>{
                    setLength(event.target.value)
                }}/>
                <p className='text-[1rem] text-gray-600'>Length: {length}</p>
                </div>
      
                <div>
                    <input type='checkbox' 
                    onChange={() => {
                    setSpecialChar((prev) => !prev)
                    }} /> Special Character
                </div>
      
                <div>
                    <input type='checkbox' 
                    onChange={() => {
                      setNumber((prev) => !prev)
                    }}/> Number
                </div>
            </div>
        </div>

        <div style={botStyle}>   
            <p className="mx-12 my-4 text-lg">
              You can also include special characters like symbols and punctuation, which are known to enhance the strength of your password. Additionally, if you need a password with numeric digits, you can opt to add them, making it even more secure. The more you customize, the stronger your password will be, ensuring that your online accounts remain protected against unauthorized access.
            </p>
        </div>

    </div>
  </div>
  </>
  )
}

export default Password;