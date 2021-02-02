import React from 'react';
import NodeLogo from './sass/assets/node.svg';
import ReactLogo from './sass/assets/react.svg';
import PostLogo from './sass/assets/post.svg';
import './sass/Stack.scss';

const Stack = () => {
	return (<div className="stack">
		<div>
			<img className="stackitem" loading='lazy' src={ReactLogo}/>
		</div>
		<div>
			<img className="stackitem" loading='lazy' src={NodeLogo}/>
		</div>
		<div>
			<img className="stackitem" loading='lazy' src={PostLogo}/>
		</div>
	</div>);
}

export {
	Stack
}
