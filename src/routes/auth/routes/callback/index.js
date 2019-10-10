import React from "react";
import { Loader } from "@8base/boost";
import { withAuth } from "@8base/app-provider";
import { PropTypes } from "prop-types";

class CallbackContainer extends React.Component {
  async componentDidMount() {
    const { auth, history, location } = this.props;
    const paramsString = location.hash.replace("#", "?");
    const params = new URLSearchParams(paramsString);
    const idToken = params.get("id_token");
    await auth.setAuthState({ token: idToken, idToken });
    const redirectUri = sessionStorage.getItem("redirectUri") || "/dashboard";
    history.replace(redirectUri);
  }

  render() {
    return (
      <div className="LoaderMain">
        <Loader />
      </div>
    );
  }
}

CallbackContainer.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

export default withAuth(CallbackContainer);
