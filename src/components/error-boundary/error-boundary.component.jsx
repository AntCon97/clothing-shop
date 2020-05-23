import React from 'react';

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from './error-boundary.styles';

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/DWO5Hzg.png' />
          <ErrorImageText>
            You have been trying for ten minutes. It’s pretty late at night and
            pretty dark in your room. You reach over and flick on a lamp. You
            feel oh so stupid. The gap in the toy is a triangle and you only
            have the cylinder and cube pieces. In dismay you toss the toy aside.
            Curse your five year old’s inability to keep track of the triangle!
          </ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
