import * as React from "react";
import "./../style/loader.scss";
import Loader from "./../components/Loader"
import ContactContent from "../components/pageContent/contactContent";

export default class Contact extends React.Component {
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
      return <ContactContent />;
    }
  }

  demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 800));
  }
}
