import React, {Component} from 'react'
import {
  Button,
  Icon,
  Spinner,
  Card,
  CardItem,
  DeckSwiper
} from 'native-base';
import { View, Text, Image} from 'react-native';
import { observer } from 'mobx-react/native';
import { observable } from 'mobx';
import { createAutoSubscriber, autoSubscriber } from 'firebase-nest';

class Match extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _autoSubscriberFetching: true,
      _autoSubscriberError: null
    };
  }
  static getSubs(props, state) {
    const {auth, matches} = props.stores;
    return auth.authUser ? matches.subs() : [];
  }
  subscribeSubs(subs, props, state) {
    const { matches } = props.stores;
    return matches.subscribeSubsWithPromise(subs);
  }
  markViewed(match) {
    this.props.stores.matches.markViewed(match[0]);
  }
  renderCard(post, store) {
    const postObj = post ? post[1] : null;
    if(postObj) {
      let pic = {uri: postObj.url}
      let text = postObj.text;

      return (
        <Card>
          <CardItem cardBody>
            { pic.uri != undefined && pic.uri != "" ? <Image source={pic}/> : null}
          </CardItem>
          <CardItem>
            <Text>
              {text}
            </Text>
          </CardItem>
        </Card>
      )
    }
    return null;
  }
  renderNoMoreCards() {
    return (
      <Card>
        <CardItem cardBody>
          <Text> Out of Matches </Text>
        </CardItem>
      </Card>
    )
  }
  render() {
    return null;
  }
}

export default autoSubscriber(observer(Match))