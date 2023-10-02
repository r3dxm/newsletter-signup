import React from "react";
import styles from "./Success.module.scss";
import { useDispatch, useSelector } from "react-redux";
import SuccessIcon from "../images/icon-success.svg";
import { changeSuccess } from "../reducers/successSlice";

function Success(props) {
	const email = useSelector((state) => state.success.email);
	const dispatch = useDispatch();
	console.log(email);
	return (
		<div className={styles.container}>
			<img src={SuccessIcon} alt="success-icon" />
			<h1>Thanks for subscribing!</h1>
			<p>
				A confirmation email has been sent to <span>{email}</span>. Please open
				it and click the button inside to confirm your subscription.
			</p>
			<button onClick={() => dispatch(changeSuccess())}>
				<span className={styles.buttonLeftShadow} />
				<span className={styles.buttonRightShadow} />
				Dismiss message
			</button>
		</div>
	);
}

export default Success;
