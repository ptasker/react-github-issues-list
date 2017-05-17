import React from 'react';

class Issues extends React.Component {

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onInput = this.onInput.bind(this);

    // init state
    this.state = {
      input: ''
    };
  }

  // input change handler
  onInput(e) {
    this.setState({
      input: e.target.value
    });
    // console.log(this.state);
  }

  // submit handler
  onSubmit(evt) {
    this.props.loadIssues(this.state.input);
    evt.preventDefault();
  }

  render() {
    return (
      <div className="issues">
        <form onSubmit={this.onSubmit}>
        <input
          // use value and onChange so it will be a controlled component
          value={ this.state.value }
          onChange={ this.onInput }
          type="text"
          placeholder="Enter a Github repo Ex. WordPress/WordPress" />
        <button type="submit">Lookup</button>
      </form>
      <h3 className={this.props.titleVisible ? '': 'hidden'}>Github Issues for: {this.props.repoName}</h3>
      </div>
    );
  }
}

export default Issues;