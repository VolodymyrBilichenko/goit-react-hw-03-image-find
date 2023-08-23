import { Component } from 'react';
import { Container } from './Container/Container';
import { getAllImages } from 'Api/imagesApi';
import { GlobalStyle } from './GlobalStyle/GlobalStyles.styled';

export class App extends Component {
  state = {
    images: [],
    error: '',
    // isLoading: false,

    page: 1,
    perPage: 12,
    searchQuery: '',
  };

  componentDidMount() {
    this.hendleImages();
  }

  hendleImages = async () => {
    const { page, perPage, searchQuery } = this.state;
    try {
      const data = await getAllImages(searchQuery, page, perPage);
      console.log(data);
    } catch (error) {
      this.setState({ error: error.message, isLoading: false });
    }
  };

  render() {
    const { error, images, isLoading } = this.state;
    return (
      <>
        <GlobalStyle />
        <Container></Container>
      </>
    );
  }
}
