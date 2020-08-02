import React from 'react';

function Subject() {
	return (<div>
      <label for="subject">
        <input type="text" name="subject" id="subject" placeholder='Enter your subject here'/>
      </label>
      </div>);
}

function ReplyEmail() {
      return(<div>
        <label for="email">
          <input type="text" name="email" id="email" placeholder='Enter your email address here'/>
        </label>
        </div>);
}

function Message() {
	return(<div>
        <label>Email Body:</label>
        <br/>
        <textarea name="comments" rows="12" cols="35" placeholder='Enter your email message here'/>
        </div>);
}

function Submit() {
	return(<div>
      <input id='submit' type="submit" name="submit" value="Send"/>
      </div>);
}

function ExitButton({updateEmailer}) {
	return(<div className='close' onClick={() => updateEmailer(false)}>&times;</div>);
}

export default function Emailer({updateEmailer}) {
	return (<div id='emailContainer'>
	<div id='emailer'>
	<ExitButton updateEmailer={updateEmailer}/>
    <form action="https://formspree.io/xknqyrkd" method="POST">
    <Subject/>
	<ReplyEmail/>
	<Message/>
	<Submit/>
	</form>
	</div>
	</div>);
}
