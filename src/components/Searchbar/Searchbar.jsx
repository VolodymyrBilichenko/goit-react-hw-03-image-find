import { Component } from 'react';
import { HeaderSearchbarStye } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handelInput = evt => {
    this.setState({ searchQuery: evt.currentTarget.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    this.props.onSubmit(this.state.searchQuery);

    this.handleReset();
  };

  handleReset = () => {
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <HeaderSearchbarStye className="searchbar">
        <form className="form" role="search" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handelInput}
            value={this.state.searchQuery}
          />
        </form>
      </HeaderSearchbarStye>
    );
  }
}
