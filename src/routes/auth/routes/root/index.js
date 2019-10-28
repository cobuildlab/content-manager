import React from "react";
import { Loader } from "@8base/boost";
import { withAuth } from "@8base/app-provider";
import { PropTypes } from "prop-types";

class AuthContainer extends React.Component {
  async componentDidMount() {
    const { auth } = this.props;
    await auth.authorize({
      mode: "signup",
      state: `{ someKey: 'some value' }`
    });
  }

  render() {
    return (
      <div className="LoaderMain">
        <Loader />
      </div>
    );
  }
}

AuthContainer.propTypes = {
  auth: PropTypes.object.isRequired
};

export default withAuth(AuthContainer);
