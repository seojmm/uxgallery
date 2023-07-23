import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { theme } from "./theme";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
		<ThemeProvider theme={theme} />
	</React.StrictMode>
);
