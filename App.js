import React, { Component } from 'react';
import AppIntro from 'react-native-app-intro';

export default class App extends Component {

  onSkipBtnHandle = (index) => {
    console.log(index);
  }
  doneBtnHandle = () => {

  }
  nextBtnHandle = (index) => {
    console.log(index);
  }
  onSlideChangeHandle = (index, total) => {
    console.log(index, total);
  }

  render() {

    const pageArray = [
      {
        title: 'TECHNA',
        description: 'We are React Native developers!!',
        img: require('./assets/images/react.png'),
        imgStyle: {
          height: 100 * 2.5,
          width: 109 * 2.5,
        },
        backgroundColor: '#20232A',
        fontColor: '#fff',
        level: 10,
      },
      {
        title: 'TECHNA',
        description: 'We do implement React with Redux!!',
        img: require('./assets/images/redux-white.png'),
        imgStyle: {
          height: 80 * 2.5,
          width: 89 * 2.5,
        },
        backgroundColor: '#764ABC',
        fontColor: 'white',
        level: 10,
      },
      {
        title: 'TECHNA',
        description: 'We can implement Firebase for you!!',
        img: require('./assets/images/firebase.png'),
        imgStyle: {
          height: 80 * 2.5,
          width: 89 * 2.5,
        },
        backgroundColor: '#1E88E5',
        fontColor: '#fff',
        level: 10,
      },
      {
        title: 'TECHNA',
        description: 'We can use Node.js server!!',
        img: require('./assets/images/nodejs-white.png'),
        imgStyle: {
          height: 90 * 2.5,
          width: 145 * 2.5,
        },
        backgroundColor: '#333333',
        fontColor: 'white',
        level: 10,
      }
    ];

    return (
      <AppIntro
        onNextBtnClick={this.nextBtnHandle}
        onDoneBtnClick={this.doneBtnHandle}
        onSkipBtnClick={this.onSkipBtnHandle}
        onSlideChange={this.onSlideChangeHandle}
        pageArray={pageArray}
      />
    );
  }
}