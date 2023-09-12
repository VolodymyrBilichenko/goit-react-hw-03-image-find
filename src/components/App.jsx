import { Component } from 'react';
import { Container } from './Container/Container';
import { getAllImages } from 'Api/imagesApi';
import { GlobalStyle } from './GlobalStyle/GlobalStyles.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { NotFound } from './NotFound/NotFound';
import { LoadMore } from './LoadMore/LoadMore';
import { Loading } from './Loading/Loading';

export class App extends Component {
  state = {
    images: [],
    error: '',
    isLoading: false,

    page: 1,
    perPage: 12,
    searchQuery: '',

    hasSearched: false,
    showNotFound: false,
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
      this.setState({ isLoading: true });
      const data = await getAllImages(searchQuery, page, perPage);
      this.setState({ isLoading: false });
      console.log(data);
      if (page === 1) {
        this.setState({ images: data.hits });
      } else {
        this.setState(set => ({
          images: [...set.images, ...data.hits],
        }));
      }

      if (data.hits.length === 0) {
        this.setState({ showNotFound: true });
      } else {
        this.setState({ showNotFound: false });
      }
    } catch (error) {
      this.setState({ error: error.message, isLoading: false });
    }
  };

  handleSearch = searchQuery => {
    this.setState({ searchQuery, page: 1, images: [], hasSearched: true });
  };

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, hasSearched, showNotFound, isLoading } = this.state;
    return (
      <>
        <GlobalStyle />
        {isLoading && <Loading />}
        <Searchbar onSubmit={this.handleSearch} />
        <Container>
          <ImageGallery imagesLi={images} />
          {hasSearched && showNotFound && <NotFound />}

          <LoadMore onClick={this.onLoadMore} />
        </Container>
      </>
    );
  }
}
