import React from 'react';

const Contact = () => (
    <div>
        <h1>Contact</h1>
        <form >
            <label for="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
            <break />
            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
            <break />
            <label for="country">Country</label>
            <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
            </select>

            <label for="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

            <input type="submit" value="Submit"/>

        </form>
    </div>
)

export default Contact
