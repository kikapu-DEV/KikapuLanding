import React from "react";
import { Collapse } from "antd";

const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eligendi, odit fugiat dicta inventore atque tenetur earum vitae cum repellendus asperiores iste corporis, officiis incidunt adipisci facilis, quam quis consectetur!`;

const items = [
	{
		key: "1",
		label: "Community-driven conservation",
		children: <p>{text}</p>,
	},
	{
		key: "2",
		label: "Sustainability",
		children: <p>{text}</p>,
	},
	{
		key: "3",
		label: "Collaboration and partnerships",
		children: <p>{text}</p>,
	},
];
const Faqs = () => {
	return (
		<div className='faqsContainer'>
			<div className='container1'>
				<p className='container2'></p>
				<h2 className='container3'>
					Guiding <span style={{ color: "#18D26E" }}>Principles</span>{" "}
				</h2>
			</div>

			<h1 className='header'>WHAT WE STAND FOR</h1>

			<div className='container4'>
				<Collapse accordion items={items} />
			</div>
		</div>
	);
};

export default Faqs;
