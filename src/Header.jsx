import React from 'react';

function Name(props) {
	return (<div id='name'>
		{props.name}
	</div>);
}

function ProfilePic() {
	return (<img id='profile' src='../dist/Astral.jpg'/>);
}

function Header() {
	return (<div id='header'>
		<Name name={'Gavin Barrett'}/>
		<ProfilePic/>
	</div>);
}

export {
	Header
}
