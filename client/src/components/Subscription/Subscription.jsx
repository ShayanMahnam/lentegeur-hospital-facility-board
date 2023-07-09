import "./Subscription.css";
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";
import { useState, useEffect } from "react";

function Subscription() {
	// tried to use env file but didn't work
	const url =
		"https://gmail.us21.list-manage.com/subscribe/post?u=062ecc3ec4949eb98966db14b&amp;id=0664e89465&amp;f_id=00da28e7f0";

	const { loading, error, success, message, handleSubmit } =
		useMailChimpForm(url);
	const { fields, handleFieldChange } = useFormFields({
		EMAIL: "",
	});
	const [errorMessage, setErrorMessage] = useState("");
	const [value, setValue] = useState("");
	const [msg, setMsg] = useState("");

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		// Email pattern validation using regex
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!emailPattern.test(value)) {
			setErrorMessage("Invalid email format.");
			return;
		}
		setErrorMessage("");

		await handleSubmit(fields);
		setValue("");
	};

	useEffect(() => {
		if (message) {
			setMsg(message);

			const timeoutId = setTimeout(() => {
				setMsg("");
			}, 3000);

			return () => {
				clearTimeout(timeoutId);
			};
		}
	}, [message]);

	const handleValueChange = (event) => {
		event.preventDefault();
		handleFieldChange(event);
		setValue(event.target.value);
	};

	return (
		<section className="subscribe-container">
			<form className="subscribe-form" onSubmit={handleFormSubmit}>
				<h3 className="subscribe-title">Subscribe to our newsletter</h3>
				<input
					id="EMAIL"
					className="subscribe-input"
					type="email"
					value={value}
					onChange={handleValueChange}
					placeholder="example@domain.com"
				/>
				<button className="subscribe-button">Subscribe</button>
			</form>
			{loading && "submitting"}
			{errorMessage && <p>{errorMessage}</p>}
			{error && <p>{msg}</p>}
			{success && <p>{msg}</p>}
		</section>
	);
}

export default Subscription;
