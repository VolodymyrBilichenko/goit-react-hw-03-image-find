import { getAllImages } from 'Api/imagesApi';
import { Component } from 'react';

export class App extends Component {
  state = {
    images: [],
    // error: '',
    // isLoading: false,
  };

  componentDidMount() {
    this.hendleImages();
  }

  hendleImages = async () => {
    try {
      this.setState({ isLoading: true });
      const data = await getAllImages();
      this.setState({ images: data.images, isLoading: false });
      console.log(data);
    } catch (error) {
      this.setState({ error: error.message, isLoading: false });
    }
  };

  render() {
    const { error, images, isLoading } = this.state;
    return <div>React homework template</div>;
  }
}
