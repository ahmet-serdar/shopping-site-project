import React, { useState } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { closeModal } from '../store/actions/cart'
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
const ErrorModal = (props) => {

  const handleCloseModal = () => {
    props.dispatch(closeModal())
  }
  return (
    <Modal
      isOpen={props.data.isModalOpen}
      contentLabel="Error message"
      style={customStyles}
      ariaHideApp={false}
    >
      <div>
        <h3>You can not add the same item more than 10 times </h3>
        <button onClick={handleCloseModal}>Okay</button>
        <button>
          <Link to="/shoppingCart">
            <div>Go to shopping cart</div>
          </Link>
        </button>
      </div>
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    data: state.cart
  };
};

export default connect(mapStateToProps)(ErrorModal);
