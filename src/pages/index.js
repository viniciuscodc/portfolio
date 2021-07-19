import * as React from "react";
import "./../style/loader.scss"
import spinner from "./../images/load.png";
import IndexContent from "../components/pageContent/indexContent";

 class Index extends React.Component {
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
      // if your component doesn't have to wait for an async action, remove this block
      return (
        <div className="loader-wrapper">
          <img src={spinner} alt="spinner-img" />
          <span>Loading</span>
          <div></div>
          <div className="bar">
            <div className="bar-progress"></div>
          </div>
        </div>
      );
    } else {
      return <IndexContent />;
    }
  }

  demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 800));
  }

}

export default Index;