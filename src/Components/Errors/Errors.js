import React from "react";
import { removeError } from "../../store/actions/errors";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

function Errors({errors=null, removeError}) {

	// Get hustory
	let history = useHistory();

	// Listen for change in url,
	// returns unlisten function
	let unlisten = history.listen(() => {
		// clear errors
		removeError();
	});

	React.useEffect(()=>{
		// Unmount function
		return function cleanup(){
			// Remove history listener
			unlisten();
		};
	},[unlisten]);

		return (
			<div className="errors">
				<p>
					Error {errors.status}: {errors.message}
				</p>
			</div>
		);
}

export default connect(null, { removeError })(Errors);