import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";

const Switch = ({ isOn, ...rest }) => {

const customClassName =
	`toggleSwitch ${isOn ? "on" : "off"}`;

const src = isOn ?"https://picsum.photos/200": "https://picsum.photos/200";

return (
	<motion.div animate className=
		{customClassName} {...rest}>
	<motion.div animate>
		<img src={src} />
	</motion.div>
	</motion.div>
);
};

const App = () => {

const [isOn, setIsOn] = useState(false);

useEffect(() => {
	
	document.body.style.backgroundColor =
			isOn ? "#1c1c1c" : "#ffffff";
}, [isOn]);

return <Switch isOn={isOn} onClick={() =>
						setIsOn(!isOn)} />;
};

export default App;
