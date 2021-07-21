import * as React from "react";
import "./../style/loader.scss";
import Loader from "./../components/Loader"
import Index from "../components/pageContent/aboutContent";

export default class About extends React.Component {
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
      return <Index />;
    }
  }

  demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 800));
  }
}
