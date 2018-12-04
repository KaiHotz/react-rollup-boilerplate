import React from 'react';

class ExampleComponent extends React.Component {
  state = {
    foo: 'Bar',
  }

  render() {
    return (
      <div>
        Example Component
        {' '}
        {this.state.foo}
      </div>
    );
  }
}

export default ExampleComponent;
