import React from "react";

function SocialKakao() {
	const REST_API_KEY = "1e09039424e0e7f1c16a409b3c31a3c3";
	const REDIRECT_URI = "http://localhost:3000/auth";

	// oauth 요청 URL
	const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
	const handleLogin = () => {
		window.location.href = kakaoURL;
	};

	const code = new URL(window.location.href).searchParams.get("code");
	// console.log(code);

	return (
		<div>
			<button onClick={handleLogin}>카카오 로그인</button>
		</div>
	);
}

export default SocialKakao;
