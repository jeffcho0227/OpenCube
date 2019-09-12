import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


import Homepage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shopPage/shopPage.component.jsx';
import Checkout from './pages/checkout/checkout.component.jsx';
import Header from './components/header/header.component.jsx';
import ContactPage from './pages/contactPage/contactPage.component.jsx';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-out.component.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils.js';

import { setCurrentUser } from './redux/user/user.action.js';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { selectCollectionForPreview } from './redux/shop/shop.selector.js';

library.add(fab);

class App extends React.Component {

  unsubscribeFromAuth = null;
  
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }
      setCurrentUser(userAuth);
      //the line below is to add collection data to firebase
      // addCollectionAndDocuments('collection', collectionsArray.map(({title, items}) => ({title, items})))
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render () {

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/checkout' component={Checkout}/>
          <Route path='/contact' component={ContactPage}/>
          <Route path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : <SignInAndSignUp />}/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser, 
  // collectionsArray: selectCollectionForPreview
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
