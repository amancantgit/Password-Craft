import React, { useEffect, useState } from 'react'

const Password = () => {

    // dark mode
    const [myStyle, setStyle] = useState({
        color: 'black', backgroundColor: 'white'
    })
    const [btnText, setText] = useState("Toggle to Dark Mode")

    function modeHandler(){
        if(myStyle.color === 'black'){
            setStyle({color: 'white', backgroundColor: 'black'})
            setText("Toggle to Dark Mode")
        }
        else if(myStyle.color === 'white'){
            setStyle({color: 'black', backgroundColor: "white"})
            setText("Toggle to Light Mode")
        }
    }



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


    // for button
    const [btnStyle, setBtnStyle] = useState({color: 'white', backgroundColor: 'black'})
   function  btnHandler(){
    if(btnStyle.color === 'white'){
        setBtnStyle({color: 'black', backgroundColor: 'white'})
    }
    else if(btnStyle.color=== 'black'){
        setBtnStyle({color: 'white', backgroundColor: 'black'})
    }
   }


  return (
    <>
    <div  className='absolute top-3 right-10'>
            <button onClick={() => {
                {modeHandler()}
                {btnHandler()};
            }} style={btnStyle} className=' px-4 mt-3 py-1 rounded-md '>{btnText}</button>
        </div>
        
<div style={myStyle} className='h-screen'>

  <br/>
  <div className='flex justify-center'>
  <h1 className= 'text-2xl font-serif '>User-Driven Password </h1>
  
  </div>

  <br/>
  <hr/>
  <br/>

  <h1 className='flex justify-center text-xl '>Password: &nbsp; <p className='text-xl text-black bg-blue-200 px-7 py-0.5 rounded-md'>{password}</p></h1>


  <div className='flex justify-center text-xl m-5  '>

  <h1 className=' mr-10 p-2'>Create a password based on your specifications.</h1>

  <div className='grid justify-items-start p-2 '>
    <div >
    Length: &nbsp; <input type='range' max={20} min={3}
    onChange={(event) =>{
    setLength(event.target.value)
    }}/>
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


</div>
    </>
  )
}

export default Password;