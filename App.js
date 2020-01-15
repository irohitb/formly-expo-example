import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {autocomplete, picker, checkbox} from './dummy/index'
// import SignupFormComponent from 'rn-formly'
import SafeAreaDecider from 'react-native-smart-statusbar'

const inputFields = [
  {
    key: 'name', 
    type: 'text', 
    label: `Your Full Name`,
    required: true,
    helper: 'Using your real name would make it more likely for you to get a match',
    templateOptions: { 
      componentProps: {
        placeholder: 'Frank Murphy'
      }
    }
  }, 
  {
    key: 'otp', 
    type: 'otp', 
    label: 'Enter OTP',
    helper: '(optional) but try to enter incorrect date', 
    templateOptions: {
      noOfTextInput: 5,
    }
  }, 
  {
    key: 'image',
    type:'image', 
    label: "Upload your cover image", 
    helper: 'You can change your profile pic anytime from settings', 
  },
  {
    key: 'images',
    type:'images', 
    label: "Upload all your images", 
    helper: 'You can change your profile pic anytime from settings', 
  }, 
  {
    key: 'dob', 
    type: 'dateTyper', //change this to Dob component
    label: 'Your Date of birth',
    helper: 'Your Birthdate will help us in connecting you with people of similar age',
    required: true
  }, 
  {
    key: 'programmingLanguage', 
    type: 'picker', // CheckBoxes should have Maximum 4 elements, for others we should use dropdown
    label: 'Faviourite Programming language',
    helper: '(Optional) Please share your favourite Programming language',
    templateOptions: {
      options: picker
    },
    helper: `Optional Field`
  }, 
  {
    key: "gender", 
    type: 'checkboxes',
    label: 'Select your Gender', 
    helper: '(Optional), Please select a gender', 
    templateOptions: {
      options: checkbox
    }
  }, 
  {
    key: 'autoComplete', 
    type: 'autoComplete', 
    label: 'Type Programming language',
    helper: "This is an example of Auto Complete Component, Don't try to make sense out of the returned data",
    templateOptions: { 
      asyncFunction: async function (text) {
        return dummyAutoCompleteSuggestion
      }
    }
  }
]

export default function App() {
  return (
    <>
  </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// <SignupFormComponent 
// inputFields={inputFields}
// globalButtonText={'Next'}
// onButtonClick={this.justLogDataFromForms}
// defaultColor={colors.primaryGreen}
// ProgressBarProps={{
//   blink: false
// }}
// /> 