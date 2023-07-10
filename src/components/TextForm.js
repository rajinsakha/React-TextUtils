import React, { useState } from 'react'

export default function TextForm(props) {
    

    const handleUpClick = ()=>{
       
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!","success");
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!","success");
    }
    const handleOnChange = (event)=>{
        
        setText(event.target.value);
    }
    const wordCount = (text) => {
        return text.replace(/\n/g, " ")
        .split(' ')
        .filter(text => text !== "")
        .length;
    };
    const handleClear = ()=>{
        setText('');
        props.showAlert("Text Cleared!","success");
    }

    const copyText = ()=> {
        
       navigator.clipboard.writeText(text);
       props.showAlert("Text Copied to Clipboard!","success");
      }

      const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        const toggle = document.getElementById('toggle')
        if (toggle.textContent === "Speak") {
            toggle.innerHTML = "Stop"
            props.showAlert("Voice Started!","success");
        }
        else {
            toggle.innerHTML = "Speak"
            if (toggle.innerHTML === "Speak"){
                window.speechSynthesis.cancel();
                props.showAlert("Voice Stopped!","success");
            }
        }
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
   
    
    const [text, setText] = useState("");
    return (
        <>
        <div className="container" style={{color:props.mode ==='light'?'black':'white'}}>
            <h1 >{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">
                </label>
                <textarea
                    className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='light'?'white':'#13466e', color:props.mode ==='light'?'black':'white'}  }
                    id="myBox"
                    rows="8"
                ></textarea>
            </div>
            <button disabled={text.length===0} className={`btn btn-${props.btnColor} mx-1 my-1`} onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className={`btn btn-${props.btnColor} mx-1 my-1`}onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className={`btn btn-${props.btnColor} mx-1 my-1`} onClick={handleClear}>Clear Text</button>
            <button disabled={text.length===0} className={`btn btn-${props.btnColor} mx-1 my-1`} onClick={copyText}>Copy Text</button>
            <button disabled={text.length===0} className={`btn btn-${props.btnColor} mx-1 my-1`} onClick={speak} id="toggle">Speak</button>
            <button disabled={text.length===0} className={`btn btn-${props.btnColor} mx-1 my-1`} onClick={handleExtraSpaces} >Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color:props.mode ==='light'?'black':'white'}}>
            <h1>Your text summary</h1>
            <p>{wordCount(text)} words and {text.length} characters</p>
            <p>{0.0008 * wordCount(text) } minutes to read</p>
            <h2>Preview</h2>
            <p style={{marginBottom:'40px'}}>{text.length>0?text:"Nothing to Preview"}</p>
        </div>
        </>
        
    );
}
