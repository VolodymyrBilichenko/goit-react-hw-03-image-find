import { Component } from 'react';
import { HeaderSearchBarStye } from './SearchBar.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class SearchBar extends Component {
  state = {
    searchQuery: '',
  };

  handelInput = evt => {
    this.setState({ searchQuery: evt.currentTarget.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    if (this.state.searchQuery.trim() === '') {
      toast.info('Please fill in the input field');
      return;
    }

    this.props.onSubmit(this.state.searchQuery);

    this.handleReset();
  };

  handleReset = () => {
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <div>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />

        <HeaderSearchBarStye className="searchar">
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
        </HeaderSearchBarStye>
      </div>
    );
  }
}
