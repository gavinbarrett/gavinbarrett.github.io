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

const Form = styled.form`
	&[name=${props => props.formname}] {
		width: 80vw;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		white-space: nowrap;
		overflow: hidden;
		@media only screen and (min-width: 450px) {
			width: 70vw;
		}
		@media only screen and (min-width: 768px) {
			width: 40vw;
		}
	}
	&[name=${props => props.formname}] input {
		position: absolute;
		z-index: -1;
		display: none;
	}
	&[name=${props => props.formname}] label  {
		color: #fff;
		transition: transform 400ms ease-out;
		display: inline-block;
		width: 80vw;
		min-height: 70%;
		aspect-ratio: 16 / 9;		
		position: relative;
		z-index: 1;
		text-align: center;
		line-height: 100vh;
		background-size: cover;
		background-position: center center;
		font-size: 3rem;
		border-radius: 25px;
		@media only screen and (min-width: 450px) {
			width: 70vw;
		}
		@media only screen and (min-width: 768px) {
			width: 40vw;
		}
	}
`;

export const Carousel = ({images, set, genidx}) => {
	return (<div className={'carousel-box'}>
		<Form name={`form-${set}`} formname={`form-${set}`}>
			{images ? images.map((path, index) => <Input key={index + genidx} name={`image-${set}`} type={"radio"} id={`image-${set}-${index}`} num={index} shift={100 * index}/>) : ''}
			{images ? images.map((path, index) => {
				return <StyledLabel path={path} key={index + genidx} for={`image-${set}-${index}`} label_name={`image-${set}-${index}`}/>
			}) : ''}
		</Form>
	</div>);
}