import * as React from "react";
import "src/style/loader.scss";
import Loader from "src/components/Loader"
import ProjectsContent from "src/components/pageContent/projectsContent";

export default class Projects extends React.Component {
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
      return <ProjectsContent />;
    }
  }

  demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 800));
  }
}
