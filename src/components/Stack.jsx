import React from 'react';
import NodeLogo from './sass/assets/node.svg';
import ReactLogo from './sass/assets/react.svg';
import PostLogo from './sass/assets/post.svg';
import './sass/Stack.scss';

export const Stack = () => {
	return (<div className="stack">
		<div>
			<img className="stackitem" src={ReactLogo}/>
		</div>
		<div>
			<img className="stackitem" src={NodeLogo}/>
		</div>
		<div>
			<img className="stackitem" src={PostLogo}/>
		</div>
	</div>);
}
