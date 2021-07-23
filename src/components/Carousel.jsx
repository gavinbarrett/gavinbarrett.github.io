import React from 'react';
import styled from 'styled-components';
import './sass/Carousel.scss';

const StyledLabel = styled.label`
	&[for=${props => props.label_name}] {
		background-image: url(${props => props.path});
	}
`;

const Input = styled.input`
	&:nth-of-type(${prop => prop.num + 1}):checked ~ label:nth-of-type(${prop => prop.num + 1}) { 
	   z-index: 0;
	}
	&:nth-of-type(${prop => prop.num + 1}):checked ~ label {
		transform: translate3d(-${prop => prop.shift}%, 0, 0);
	}
`;

export const Carousel = ({images, set, genidx}) => {
	return (<div className={'container'}>
		<form id={`form-${set}`}>
			{images ? images.map((path, index) => <Input key={index + genidx} name={`image-${set}`} type={"radio"} id={`image-${set}-${index}`} num={index + genidx} shift={100 * index}/>) : ''}
			{images ? images.map((path, index) => {
				return <StyledLabel path={path} key={index + genidx} for={`image-${set}-${index}`} label_name={`image-${set}-${index}`}/>
			}) : ''}
		</form>
	</div>);
}


/*
const StyledLabel = styled.label`
	&[for=${props => props.label_name}] {
		background-image: url(assets/tunnelr.png);
	}
`;

const Input = styled.input`
	&:nth-of-type(${props => props.num + 1}):checked ~ label:nth-of-type(${props => props.num + 1}) { 
	   z-index: 0;
	}
	&:nth-of-type(${props => props.num + 1}):checked ~ label {
		transform: translate3d(-${props => props.shift}%, 0, 0);
	}
`;

export const Carousel = ({images, set, genidx}) => {
	return (<div className={'container'}>
		<form>
			{images ? images.map((path, index) => {
				return <Input key={index} type={"radio"} name={`image`} id={`car${index}`} num={index + genidx} shift={100 * index}/>
			}) : ''}
			{images ? images.map((path, index) => {
				console.log(`Setting path: ${path}\nfor label_name: ${`image-${set}-${index}`}`);
				return <StyledLabel key={index} for={`car${index}`} path={'../../dist/tunnelr.png'} label_name={`car${index}`}/>
			}) : ''}
		</form>
	</div>);
}
*/