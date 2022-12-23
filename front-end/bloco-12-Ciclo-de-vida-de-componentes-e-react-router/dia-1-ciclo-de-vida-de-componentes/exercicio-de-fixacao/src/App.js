import React from 'react';

class App extends React.Component {
  state = {
    user: [],
    isLoading: true,
  };

  componentDidMount() {
    // console.log('Did');
    this.getApi();
  }

  getApi = async () => {
    const endipoint = 'https://api.randomuser.me/';
    const response = await fetch(endipoint);
    const data = await response.json();
    this.setState({
      user: data.results,
      isLoading: false,
    })

  }

  render() {
    const { isLoading, user } = this.state;
    const { email} = user;
    console.log(user);
    return (
      <div>
        <h1>Exercício de Fixação</h1>
        { isLoading 
          ? <div>Carregando...</div>
          : <p>{ email }</p>
          // <img src={ user } alt="test" /> 
        }
      </div>
    );
  }
}

export default App;
