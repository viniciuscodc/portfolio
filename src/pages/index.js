import * as React from "react";
import "src/style/loader.scss"
import IndexContent from "src/components/pageContent/indexContent";
import Loader from "src/components/Loader"

export default class Index extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    // this simulates an async action, after which the component will render the content
    this.demoAsyncCall().then(() => this.setState({ loading: false }));
  }

  render() {
    const { loading } = this.state;

    if (loading) {
   
      return (
        <Loader />
      );
    } else {
      return <IndexContent />;
    }
  }

  demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 800));
  }
}

