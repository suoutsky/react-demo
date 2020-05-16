import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// These two containers are siblings in the DOM
const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }
  
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}

class Portal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false};
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleShow() {
    this.setState({showModal: true});
  }
  
  handleHide() {
    this.setState({showModal: false});
  }

  render() {
    const modal = this.state.showModal ? (
      // <Modal>
        <div className="modal">
          <div className="modal_content">
            With a portal, we can render content into a different
            part of the DOM, as if it were any other React child.
            <div>This is being rendered inside the #modal-container div.</div>
            <button onClick={this.handleHide}>Hide modal</button>
          </div>
        </div>
      //  </Modal> 
    ) : null;

    return (
      <div className="app">
        <div>This div has overflow: hidden.</div>
        <button onClick={this.handleShow}>Show modal</button>
        {modal}
      </div>
    );
  }
}

export default Portal;