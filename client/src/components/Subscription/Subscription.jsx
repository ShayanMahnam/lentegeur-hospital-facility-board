import "./Subscription.css";
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";

function Subscription() {
	// tried to use env file but didn't work
	const url =
		"https://gmail.us21.list-manage.com/subscribe/post?u=062ecc3ec4949eb98966db14b&amp;id=0664e89465&amp;f_id=00da28e7f0";

	const { loading, error, success, message, handleSubmit } =
		useMailChimpForm(url);
	const { fields, handleFieldChange } = useFormFields({
		EMAIL: "",
	});

	const handleFormSubmit = (event) => {
		event.preventDefault();
		handleSubmit(fields);
		handleFieldChange("EMAIL", ""); // Clear the EMAIL field its not working if you know how to fix it please try
	};

	return (
		<section className="subscribe-container">
			<form className="subscribe-form" onSubmit={handleFormSubmit}>
				<h3 className="subscribe-title">Subscribe to our newsletter</h3>
				<input
					id="EMAIL"
					className="subscribe-input"
					type="email"
					value={fields.EMAIL}
					onChange={handleFieldChange}
					placeholder="example@domain.com"
				/>
				<button className="subscribe-button">Subscribe</button>
			</form>
			{loading && "submitting"}
			{error && message}
			{success && message}
		</section>
	);
}

export default Subscription;
