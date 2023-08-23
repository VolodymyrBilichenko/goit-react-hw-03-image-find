import { Component } from 'react';
import { Container } from './Container/Container';
import { getAllImages } from 'Api/imagesApi';
import { GlobalStyle } from './GlobalStyle/GlobalStyles.styled';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    images: [],
    error: '',
    // isLoading: false,

    page: 1,
    perPage: 12,
    searchQuery: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, searchQuery } = this.state;

    if (prevState.page !== page || prevState.searchQuery !== searchQuery) {
      this.handleImages(searchQuery, page);
    }
  }

  handleImages = async () => {
    const { page, perPage, searchQuery } = this.state;
    try {
      const data = await getAllImages(searchQuery, page, perPage);
      console.log(data);
      if (page === 1) {
        this.setState({ images: data.hits });
      } else {
        this.setState(set => ({
          images: [...set.images, ...data.hits],
        }));
      }
    } catch (error) {
      this.setState({ error: error.message, isLoading: false });
    }
  };

  handleSearch = searchQuery => {
    this.setState({ searchQuery, page: 1, images: [] });
  };

  render() {
    const { error, images, isLoading } = this.state;
    return (
      <>
        <GlobalStyle />
        <Searchbar onSubmit={this.handleSearch} />
        <Container></Container>
      </>
    );
  }
}
