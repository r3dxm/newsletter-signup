import React, { useState } from "react";
import styles from "./SignupForm.module.scss";
import IllustrationDesktop from "../images/illustration-sign-up-desktop.svg";
import IllustrationMobile from "../images/illustration-sign-up-mobile.svg";
import { useDispatch } from "react-redux";
import { changeSuccess, changeEmail } from "../reducers/successSlice";

function SignupForm(props) {
	const [invalid, setInvalid] = useState(false);
	const [email, setEmail] = useState("");
	const dispatch = useDispatch();

	function handleSubmit() {
		if (
			String(email).match(
				/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
			)
		) {
			setInvalid(false);
			dispatch(changeSuccess());
			dispatch(changeEmail(email));
		} else {
			setInvalid(true);
		}
	}

	return (
		<section className={styles.container}>
			<div className={styles.info}>
				<h1>Stay updated!</h1>
				<p>Join 60,000 product managers receiving monthly updates on:</p>
				<ul>
					<li>Product discovery and building what matters</li>
					<li>Measuring to ensure updates are a success</li>
					<li>And much more!</li>
				</ul>
				<form onSubmit={() => false}>
					<div className={styles.labelContainer}>
						<p>Email Address</p>
						{invalid && <h5>Valid email required</h5>}
					</div>
					<input
						className={invalid ? styles.invalidInput : styles.input}
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						type="email"
						placeholder="email@company.com"
					/>
					<button onClick={handleSubmit} type="button">
						<span className={styles.buttonLeftShadow} />
						<span className={styles.buttonRightShadow} />
						Subscribe to monthly newsletter
					</button>
				</form>
			</div>
			<img
				className={styles.illustrationDesktop}
				src={IllustrationDesktop}
				alt="illustration"
			/>
			<img
				className={styles.illustrationMobile}
				src={IllustrationMobile}
				alt="illustration"
			/>
		</section>
	);
}

export default SignupForm;
