import React, { Component } from "react";
import { Comment } from "semantic-ui-react";
import LoadingOverlay from "./LoadingOverlay";

class CommentsPost extends Component {
  state = {
    loading: false,
    comments: [],
  };

  componentDidMount() {
    this.loadComments();
  }

  loadComments() {
    this.setState({ loading: true });
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${this.props.postId}/comments`
    )
      .then((res) => res.json())
      .then((comments) => {
        this.setState({
          loading: false,
          comments,
        });
      })
      .catch(() => this.setState({ loading: false }));
  }

  render() {
    const { comments } = this.state;
    return (
      <Comment.Group className="comments">
        <LoadingOverlay active={this.state.loading} />
        {comments.length > 0 &&
          comments.map((comment) => (
            <Comment>
              <Comment.Content>
                <Comment.Author as="h2">{comment.email}</Comment.Author>
                <Comment.Text>{comment.name}</Comment.Text>
                <Comment.Text>{comment.body}</Comment.Text>
              </Comment.Content>
            </Comment>
          ))}
      </Comment.Group>
    );
  }
}

export default CommentsPost;
