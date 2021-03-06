import React from 'react';
import {
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import styled from 'styled-components/native';
import Header from '../components/Header';
import color from '../theme/color';
import config from '../config';

const isPlatformIOS = Platform.OS === 'ios';

const TitleInput = styled.TextInput`
  backgroundColor: ${color.white};
  borderRadius: 4px;
  fontWeight: 500;
  fontSize: 24;
  padding: 8px;
`;

const DescriptionInput = styled.TextInput`
  marginTop: 20px;
  padding: 8px;
  backgroundColor: ${color.white};
  borderRadius: 4px;
  fontSize: 14;
  height: 200px;
  textAlignVertical: top;
`;

const SubmitButton = styled.TouchableOpacity`
  backgroundColor: ${color.greyDark};
  height: 48px;
  alignItems: center;
  justifyContent: center;
`;

const SubmitButtonText = styled.Text`
  color: ${color.white};
  fontWeight: 500;
`;

class NewPostScreen extends React.Component {
  state = {
    isEditPost: false,
  }

  componentDidMount() {
    this.checkIfEditPost();
  }

  checkIfEditPost = () => {
    const { navigation: { state: { params } } } = this.props;
    this.setState({ isEditPost: !!params });
  }

  handleSubmitPost = async () => {
    const { navigation } = this.props;

    const POST_DATA_URL = `${config.baseUrl}/posts`;
    const title = this.titleRef._lastNativeText || '';
    const description = this.descriptionRef._lastNativeText || '';

    try {
      await fetch(POST_DATA_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      });
      navigation.goBack();
    } catch (err) {
      alert('An error occurred!');
    }
  }

  handleEditPost = async () => {
    const { navigation } = this.props;
    const { state: { params } } = navigation;

    const PUT_DATA_URL = `${config.baseUrl}/posts/${params.id}`;
    const title = this.titleRef._lastNativeText || params.title;
    const description = this.descriptionRef._lastNativeText || params.description;

    try {
      await fetch(PUT_DATA_URL, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      });
      navigation.goBack();
    } catch (err) {
      alert('An error occurred!');
    }
  }

  render() {
    const { isEditPost } = this.state;
    const { navigation: { state: { params } } } = this.props;

    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={isPlatformIOS ? 'padding' : null}
        keyboardVerticalOffset={isPlatformIOS ? 18 : 0}
      >
        <Header />
        <ScrollView
          style={styles.content}
          keyboardShouldPersistTaps="handled"
        >
          <TitleInput
            innerRef={(x) => { this.titleRef = x; }}
            placeholder="Your awesome title..."
            underlineColorAndroid="transparent"
            autoFocus
            onSubmitEditing={() => this.descriptionRef.focus()}
            returnKeyType="next"
            defaultValue={isEditPost ? params.title : ''}
          />
          <DescriptionInput
            innerRef={(x) => { this.descriptionRef = x; }}
            placeholder="Put that Ipsum here..."
            underlineColorAndroid="transparent"
            multiline
            defaultValue={isEditPost ? params.description : ''}
          />
        </ScrollView>
        <SubmitButton
          onPress={isEditPost ? this.handleEditPost : this.handleSubmitPost}
        >
          <SubmitButtonText>
            {isEditPost ? 'Edit Post' : 'Create Post'}
          </SubmitButtonText>
        </SubmitButton>
      </KeyboardAvoidingView>
    );
  }
}

export default NewPostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.greyLighter,
  },
  content: {
    padding: 16,
    flex: 1,
  },
});
