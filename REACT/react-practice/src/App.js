import React from 'react';
import FriendCard from './components/FriendCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import friends from './friends.json';


class App extends React.Component {
  state = {
    friendArray: friends
  };

  deleteFriend = (id) => {
    const result = this.state.friendArray.filter(item => item.id !== id)

    this.setState({friendArray: result})
  }

  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
          {this.state.friendArray.map(item => (
            <FriendCard
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            occupation={item.occupation}
            location={item.location}
            delete={this.deleteFriend}
            />
          ))}
      </Wrapper>
    );
  }
}

export default App;
