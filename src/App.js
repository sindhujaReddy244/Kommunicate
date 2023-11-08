import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react'

const App = () => {
    const [activeNum,setActiveNum] = useState(1)
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [plan1,setPlan1]=useState(false)
    const [plan2,setPlan2]=useState(false)
    const [plan3,setPlan3]=useState(false)
    const [step3Active1,setStep3Active1] = useState(false)
    const [step3Active2,setStep3Active2] = useState(false)
    const [step3Active3,setStep3Active3] = useState(false)


    const validateEmail = (email) => {
        console.log("ans")
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return regex.test(email)
      };

    const secondNxtBtn = ()=>{
        if(plan1 || plan2 || plan3){
            setActiveNum(3)
        }
        else{
            setActiveNum(2)
        }
    }

    const thirdNxtBtn = ()=>{
        if(step3Active1 || step3Active2 || step3Active3){
            setActiveNum(4)
        }else{
            setActiveNum(3)
        }
    }

  return (
    <div className='container-fluid bg-success p-5'>
        <div className='row'>
            <div className='col-12 col-md-3 side-bar-container'>
                <div className='sidebar-mini-container'>
                    <button className={activeNum ===1? `${"sidebar-btn active-btn"}`:"sidebar-btn"}>1</button>
                    <ul className='sidebar-ul'>
                        <li>STEP 1</li>
                        <li className='sidebar-li'>YOUR INFO</li>
                    </ul>
                </div>
                <div className='sidebar-mini-container'>
                    <button className={activeNum ===2? `${"sidebar-btn active-btn"}`:"sidebar-btn"}>2</button>
                    <ul className='sidebar-ul'>
                        <li>STEP 2</li>
                        <li className='sidebar-li'>SELECT PLAN</li>
                    </ul>
                </div>
                <div className='sidebar-mini-container'>
                    <button className={activeNum ===3? `${"sidebar-btn active-btn"}`:"sidebar-btn"}>3</button>
                    <ul className='sidebar-ul'>
                        <li>STEP 3</li>
                        <li className='sidebar-li'>ADD-ONS</li>
                    </ul>
                </div>
                <div className='sidebar-mini-container'>
                    <button className={activeNum ===4? `${"sidebar-btn active-btn"}`:"sidebar-btn"}>4</button>
                    <ul className='sidebar-ul'>
                        <li>STEP 4</li>
                        <li className='sidebar-li'>SUMMARY</li>
                    </ul>
                </div>
            </div>
            <div className='col-12 col-md-9 content-container'>
                {activeNum===1? 
                <div className='form-container'>
                    <h1>Personal info</h1>
                    <p>Please provide your name,email address, and phone number.</p>
                    <form className='form-input-container'>
                        <label htmlFor='name'>Name</label>
                        <input 
                        value={name} 
                        onChange={(e)=>{
                            setName(e.target.value)
                        }}
                        className='input-type-cl' 
                        type="text" 
                        id="name" 
                        required 
                        placeholder='Enter Name'/>
                        
                        <label htmlFor='email'>E-mail Address</label>
                        <input 
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                        className='input-type-cl' 
                        type="email" id="email" 
                        required 
                        placeholder='Enter E-mail address'/>
                        
                        <label htmlFor='phone'>Phone Number</label>
                        <input 
                        value={phone} 
                        onChange={(e)=>{setPhone(e.target.value)}}
                        className='input-type-cl' 
                        type="tel" 
                        id="phone" 
                        required 
                        placeholder='Enter Phone Number'/>
                        <div className='btn-container'>
                            <button 
                            onClick={(e)=>{
                                e.preventDefault()
                                const okemail = validateEmail(email)
                                if(name.length> 3 && okemail && phone.length >3){
                                    setActiveNum(2)
                                }
                                else{
                                    alert("Please Fill the form Properly")
                                }
                            }}
                            className='btn btn-primary'>Next Step</button>
                        </div>
                    </form>
                </div>
                :''}
                {activeNum===2? 
                <div>
                    <h1>Select your plan</h1>
                    <p>You have the option of monthly or yearly billing</p>
                    <div className="grid-container">
                        <div onClick={()=>{
                            setPlan1(true)
                            setPlan2(false)
                            setPlan3(false)
                        }} 
                            
                            className={plan1? `${"grid-item grid-item-active"}`:"grid-item"}>
                            <button className='sidebar-btn'>1</button>
                            <ul className='ul-plan'>
                                <li>Arcade</li>
                                <li>$9/mo</li>
                            </ul>
                        </div>
                        <div onClick={()=>{
                            setPlan1(false)
                            setPlan2(true)
                            setPlan3(false)
                        }} 
                        className={plan2? `${"grid-item grid-item-active"}`:"grid-item"}>
                            <button className='sidebar-btn'>2</button>
                            <ul className='ul-plan'>
                                <li>Advanced</li>
                                <li>$12/mo</li>
                            </ul>
                        </div>
                        <div onClick={()=>{
                            setPlan1(false)
                            setPlan2(false)
                            setPlan3(true)
                        }} className={plan3? `${"grid-item grid-item-active"}`:"grid-item"}>
                            <button className='sidebar-btn'>3</button>
                            <ul className='ul-plan'>
                                <li>Pro</li>
                                <li>$15/mo</li>
                            </ul>
                        </div>
                    </div>
                    <div className='monthly-container'>
                        <div className='d-flex'>
                            <h4>Monthly</h4>
                            <label className="switch m-2" >
                                <input type="checkbox" checked/>
                                <span className="slider round"></span>
                            </label>
                            <h4>Yearly</h4>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between mt-5'>
                        <button onClick={()=>{setActiveNum(1)}} className='btn btn-info'>Go Back</button>
                        <button onClick={secondNxtBtn} className='btn btn-dark'>Next Step</button>
                    </div>
                </div>
                :''}
                {activeNum===3? 
                
                <div>
                    <h1>Pick add-ons</h1>
                    <p>Add-ons help enhance your gaaming experience</p>
                    <div className={step3Active1? `${"container-3 container-3-active"}`:"container-3"}>
                        <div className='d-flex justify-centent-center align-items-center '>
                            <input
                            onChange={()=>{
                                setStep3Active1(!step3Active1)
                            }}
                            checked={step3Active1}
                            type='checkbox'
                            className='container-3-input' />
                            <ul className='container-3-ul'>
                                <li className='text-bold-3'>Online service</li>
                                <li>Access to multiplayer games</li>
                            </ul>
                        </div>
                        <p>+$1/mo</p>
                    </div>

                    <div className={step3Active2? `${"container-3 container-3-active"}`:"container-3"}>
                        <div className='d-flex justify-centent-center align-items-center '>
                            <input 
                            onChange={()=>{
                                setStep3Active2(!step3Active2)
                            }}
                            checked={step3Active2}
                            type='checkbox' className='container-3-input'/>
                            <ul className='container-3-ul'>
                                <li className='text-bold-3'>Online service</li>
                                <li>Access to multiplayer games</li>
                            </ul>
                        </div>
                        <p>+$1/mo</p>
                    </div>

                    <div className={step3Active3? `${"container-3 container-3-active"}`:"container-3"}>
                        <div className='d-flex justify-centent-center align-items-center '>
                            <input
                            onChange={()=>{
                                setStep3Active3(!step3Active3)
                            }}
                            checked={step3Active3}
                            type='checkbox' className='container-3-input' />
                            <ul className='container-3-ul'>
                                <li className='text-bold-3'>Online service</li>
                                <li>Access to multiplayer games</li>
                            </ul>
                        </div>
                        <p>+$1/mo</p>
                    </div>

                    <div className='d-flex justify-content-between mt-5'>
                        <button onClick={()=>{setActiveNum(2)}} className='btn btn-info'>Go Back</button>
                        <button onClick={thirdNxtBtn} className='btn btn-dark'>Next Step</button>
                    </div>
                </div>
                :''}
                {activeNum===4? <h1>4</h1>:''}
            </div>
        </div>

    </div>
  )
}

export default App;
