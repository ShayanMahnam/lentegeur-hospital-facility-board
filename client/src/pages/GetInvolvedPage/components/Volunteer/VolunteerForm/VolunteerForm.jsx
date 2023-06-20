import "./VolunteerForm.css";
import { useRef, useState } from "react";

const VolunteerForm = () => {
	// this is deliberately using an "uncontrolled" form
	// we can switch it to a "controlled" form (using State) if required
	const formRef = useRef(null);

	// mocking a form submission (to test disabling the submit button)
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();

		setIsSubmitting(true);

		const formData = new FormData(formRef.current);
		const firstname = formData.get("firstname");
		const lastname = formData.get("lastname");
		const email = formData.get("email");
		const phone = formData.get("phone");

		const requestBody = {
			firstname,
			lastname,
			email,
			phone,
		};

		// inspect requestBody before POST
		console.log("Volunteer Form Submit requestBody:", requestBody);

		// mocking a network request/response cycle delay
		await new Promise((resolve) => setTimeout(resolve, 2000));

		setIsSubmitting(false);
	};

	return (
		<div className="volunteer-form-container">
			<h3>Do you want to become a Volunteer?</h3>
			<p>Fields marked with an asterisk (*) are required.</p>
			<form ref={formRef} onSubmit={handleSubmit} className="volunteer-form">
				<div className="volunteer-form-group">
					<label htmlFor="firstname" className="volunteer-form-label">
						First Name *
					</label>
					<input
						type="text"
						name="firstname"
						placeholder="e.g. John"
						required
						className="volunteer-form-input"
					/>
				</div>
				<div className="volunteer-form-group">
					<label htmlFor="lastname" className="volunteer-form-label">
						Last Name *
					</label>
					<input
						type="text"
						name="lastname"
						placeholder="e.g. Smith"
						required
						className="volunteer-form-input"
					/>
				</div>
				<div className="volunteer-form-group">
					<label htmlFor="email" className="volunteer-form-label">
						Email *
					</label>
					<input
						type="email"
						name="email"
						placeholder="e.g. name@company.name"
						required
						className="volunteer-form-input"
					/>
				</div>
				<div className="volunteer-form-group">
					<label htmlFor="phone" className="volunteer-form-label">
						Phone Number
					</label>
					<input
						type="tel"
						name="phone"
						// regex pattern for initial phone number validation, optional + a the start, and then numbers only
						pattern="^\+?[0-9]+$"
						placeholder="+27 77 555 4455"
						className="volunteer-form-input"
					/>
				</div>
				<button
					type="submit"
					disabled={isSubmitting}
					className="volunteer-form-submit"
				>
					{isSubmitting ? "SUBMITTING..." : "SUBMIT"}
				</button>
			</form>
		</div>
	);
};

export default VolunteerForm;
