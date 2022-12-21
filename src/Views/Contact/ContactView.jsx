import React, { useEffect } from 'react'
import './ContactView.css'

const ContactView = () => {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'instant'}); 
  }, [])

  return (
    <div className='ContactView frame'>
          <h1 className='top-header'>KONTAKTA OSS</h1>
          <div className="wrapper">
            <form>
                <div>
                  <label>Typ av meddelande</label>
                  <select>
                    <option selected>  -- VÄLJ --</option>
                    <option>Synpunkt</option>
                    <option>Bokningsförfrågan</option>
                    <option>Jobbansökan</option>
                  </select>
                </div>
                <div>
                  <label>Ditt meddelande</label>
                  <textarea rows="10"></textarea>
                </div>
                <div>
                  <label>Ditt namn</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Ditt telefonnummer</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Din e-postadress</label>
                  <input type="text" />
                </div>
                <button className='btn btn-online'>skicka</button>
            </form>
            {/* <div className="text-div">
              <h4>Eller konta</h4>
                <p>Här ska det vara ett kontaktformulär</p>
                <p>och kanske övriga kontaktuppgifter???</p>
            </div> */}

          </div>
    </div>
  )
}

export default ContactView