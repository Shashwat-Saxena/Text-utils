import React, { useEffect, useState } from 'react'

export default function Textutils() {
  const [text, setText] = useState('');
  const [backgroundcolor, setBackgroundcolor] = useState('#f0f0f0');

  const handlechange = (e) => {
    // console.log(e.target.value)
    setText(e.target.value)
    setBackgroundcolor('#f0f0f0');
  }

  const handleUppercase = () => {
    setText(text.toUpperCase())
  }

  const handleLowercase = () => {
    setText(text.toLowerCase())
  }

  const clear = () => {
    setText('')
  }



  // const count = () => {
  //   console.log(text.split(' ').length)
  // }
  let word = text.split(' ')
  // console.log(word)
  let wordcount = word.filter(word => word !== "").length

  let character = text.replaceAll(" ", "").length

  const dublicate = () => {
    setText(text + " " + text)
  }

  // let cop;

  const copy = () => {
    //  cop = text;
    // console.log(copy)
    navigator.clipboard.writeText(text)
  }

  const paste = async () => {
    let paste = text;
    console.log(paste)
    const clipboard = await navigator.clipboard.readText();
    setText(text + ' ' + clipboard);
  }

  useEffect(() => {
    if ('condition') {

      setBackgroundcolor('#ff0000')
      document.body.style.backgroundColor = '#f0f0f0';
    } else {

      setBackgroundcolor('#0000ff')
      document.body.style.backgroundColor = '#f0f0f0';
    }
  }, [text]);


  // const paste  = () =>{
  //   // navigator.clipboard.readText().then(res=> setText(res + " " + text))
  // }
  return (
    <div>
      <div style={{ backgroundColor: '#f0f0f0' }}>
        <div className='container'>

          <form>
            <div className="form-group" >
              <label htmlFor="exampleFormControlTextarea1"><h1>Write Something.....</h1></label>
              <textarea className="form-control" placeholder='Type here......' value={text} onChange={handlechange} id="type " rows="5" style={{ color: backgroundcolor }}></textarea>
            </div>

            <button type="button" className="btn btn-outline-warning" onClick={handleUppercase}>UpperCase</button>
            <button type="button" className="btn btn-outline-info m-3" onClick={handleLowercase}>LowerCase</button>
            <button type="button" className="btn btn-outline-success m-3" onClick={clear}>Clear</button>
            <button type="button" className="btn btn-outline-info m-3" onClick={dublicate}>Dublicate</button>
            <button type="button" className="btn btn-outline-warning m-3" onClick={copy}>Copy</button>
            <button type="button" className="btn btn-outline-dark m-3" onClick={paste}>Paste</button>

          </form>
          <div>{text}</div>

          <div> <h3>Word Count  : {wordcount}</h3> </div>
          <div> <h3>Character Count : {character}</h3></div>
        </div>
      </div>
    </div>
  )
}
