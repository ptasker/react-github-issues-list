import React from 'react';
import './App.css';
import Issues from './Issues';
import IssueInfo from './IssueInfo';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: [],
    };

    this.loadIssues = this.loadIssues.bind(this);
  };

  loadIssues(initialState) {
    this.setState({
      api_message: null,
      input: initialState,
      data: [],
      titleVisible: false
    });

    const endpoint = `https://api.github.com/repos/${initialState}/issues`;

    return fetch(endpoint)
      .then((response) => {
        this.setState({ titleVisible: false });
        //Handle 400s and 500s
        if (response.status !== 200) {
          this.setState({ api_message: 'Invalid org/repo yo.' });
          throw new Error('Network response was not ok.');
        }
        return response.json();
      })
      .then((responseJson) => {
        if (!responseJson.length) {
          this.setState({ api_message: `No issues for ${initialState}` });
          return;
        }
        this.setState({ titleVisible: true });
        let json = responseJson;
        this.setState({
          data: json,
          api_message: null
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="https://upload.wikimedia.org/wikipedia/en/a/a7/React-icon.svg" className="App-logo" alt="logo" />
          <h2>Welcome to the React Github Widget</h2>
        </div>
        <div className="App-intro">
          <h3 className="message error">{this.state.api_message}</h3>
        </div>
        <Issues loadIssues={this.loadIssues} repoName={this.state.input} titleVisible={this.state.titleVisible} />
        <div className="issues-box">
          {
            Object.keys(this.state.data).map(key =>
              <IssueInfo key={key} index={key} details={this.state.data[key]} />)
          }
        </div>
      </div>
    );
  }
}

export default App;
