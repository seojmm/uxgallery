import React, { useState } from "react";
import { redirect } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
	display: flex;
`;

const LoginButton = styled.button`
	/* margin-top: 10px;
	padding: 0;
	width: 250px;
	height: 30px;
	border: none;
	background-color: #0095f6;
	color: white;
	font-size: 17px;
	border-radius: 5px;

	&:disabled {
		background-color: rgba(0, 149, 246, 0.3);
	} */
`;

export const Login = (props: any) => {
	const [id, setId] = useState("");
	const [pwd, setPwd] = useState("");
	const [button, setButton] = useState(true);
	const realId = "abc@gmail.com";
	const realPwd = "12345";

	const changeButton = () => {
		id.includes("@") && pwd.length >= 5 ? setButton(false) : setButton(true);
	};

	return (
		<div>
			<Container>
				<input
					placeholder="youremail@example.com"
					size={25}
					id="id"
					className="login"
					onChange={(e) => {
						setId(e.target.value);
					}}
					onKeyUp={changeButton}
				/>
				<input
					type="password"
					placeholder="비밀번호"
					id="password"
					className="login"
					onChange={(e) => setPwd(e.target.value)}
					onKeyUp={changeButton}
				/>
				<LoginButton
					className="loginButton"
					disabled={button}
					onClick={(e) => {
						if (id === realId && pwd === realPwd) {
							e.stopPropagation();
							redirect("/");
						} else {
							alert("아이디 또는 비밀번호가 일치하지 않습니다.");
						}
					}}
				>
					로그인
				</LoginButton>
			</Container>
		</div>
	);
};
