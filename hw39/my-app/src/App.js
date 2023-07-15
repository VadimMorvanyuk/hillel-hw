import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ posts: json });
      });
  }

  deletePostHandler = (event) => {
    const postId = event.target.parentElement.id;
    this.setState(
      (prevState) => {
        const updatedPosts = prevState.posts.filter(
          (post) => post.id !== +postId
        );
        return { posts: updatedPosts };
      },() => {
        const postElement = document.getElementById(postId);
        if (postElement) {
          postElement.remove();
        }
      }
    );
  };

  addPostHandler = () => {
    const newPost = {
      id: this.state.posts.length + 1,
      title: "Type your title here...",
      body: "Type your body here...",
    };

    this.setState((prevState) => ({
      posts: [newPost, ...prevState.posts],
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <button onClick={this.addPostHandler} className="add">
          Add post
        </button>
        {this.state.posts.map((item) => {
          return (
            <div className="post" id={item.id} key={item.id}>
              <h3 contentEditable suppressContentEditableWarning>
                {item.title}
              </h3>
              <p contentEditable suppressContentEditableWarning>
                {item.body}
              </p>
              <button onClick={this.deletePostHandler} className="delete">
                Delete post
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
