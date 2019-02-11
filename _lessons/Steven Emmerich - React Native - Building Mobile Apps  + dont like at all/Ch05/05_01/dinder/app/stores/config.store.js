import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAWRkbpcgUZvX94b16MkYni19kkD18O_3M",
  authDomain: "dinder-e9d67.firebaseapp.com",
  databaseURL: "https://dinder-e9d67.firebaseio.com",
  projectId: "dinder-e9d67",
  storageBucket: "dinder-e9d67.appspot.com",
  messagingSenderId: "416874629484"
};




export default class ConfigStore {
  constructor() {
    firebase.initializeApp(config)
    this.splashTime = 1000
    this.splashImg = require('../../images/splash.jpg')
    this.loginBG = require('../../images/login.jpg')
  }
  get SplashImg() {
    return this.splashImg
  }
  get SplashTime() {
    return this.splashTime
  }
  get LoginBG() {
    return this.loginBG
  }
}