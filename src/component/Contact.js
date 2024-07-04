import React from 'react';
import Swal from 'sweetalert2';

function contact() {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "bb964fa8-a166-4862-81fb-862bf50c42c0");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
              });
        }
      };

  return (
    <section className='App'>
        <form onSubmit={onSubmit}>
            <h2>Contact Form</h2>
            <div>
            <lable>UserName: </lable>
            <input type="text" placeholder='  Enter your Email' name='name' required/>
            </div>
            <div>
            <lable>Email: </lable>
            <input type="email" placeholder='  Enter your Email' name='email' required/>
            </div>
            <div>
            <lable>Your Message: </lable>
            <textarea name="message" id="" placeholder='Enter your message' required></textarea>
            </div>
            <div>
                <button type='submit'>Send</button>
            </div>
        </form>
    </section>
  )
}

export default contact