export const WhyUs = () => {
	const reasons = [
		{
			title: "Effortless Inventory Management",
			description:
				"Say goodbye to manual tracking and wasted food. KikapuApp gives you real-time data to optimize ordering and minimize waste.",
		},
		{
			title: "Seamless Point-of-Sale",
			description:
				"Process transactions, manage orders, and accept all payments – all in one user-friendly system and application.",
		},
		{
			title: "Actionable Business Analytics",
			description:
				"Make data-driven decisions with comprehensive reports that unlock valuable customer and business performance insights.",
		},
		{
			title: "Unlock Financial Potential",
			description:
				"Our unique credit score solutions can open doors to financing opportunities, empowering your restaurant&#39;s growth.",
		},
		{
			title: "Effortless Ordering & Reservations",
			description:
				"KikapuApp offers online ordering and reservation booking, increasing customer satisfaction and loyalty.",
		},
		{
			title: "Diverse Payment Options",
			description:
				"Give your customers the flexibility to pay the way they want with our integrated payment processing system.",
		},
	];
	return (
		<div className='whyContainer'>
			<div className='header'>
				<h3>Why KikapuApp</h3>
			</div>
			<div className='reasons-container'>
				{reasons.map((reason) => (
					<div className='reason'>
						<h4>{reason.title}</h4>
						<p>{reason.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};
