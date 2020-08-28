import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import * as Yup from "yup";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  ErrorMessage,
} from "../components/forms";
import Screen from "../components/Screen";
import users from "../api/users";
import useAuth from "../auth/useAuth";
import authApi from "../api/auth";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen(props) {
  const { login } = useAuth();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [registerFailed, setRegisterFailed] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async ({ name, email, password }) => {
    setProgress(0);
    setUploadVisible(true);

    const result = await users.register(name, email, password, (progress) =>
      setProgress(progress)
    );

    if (!result.ok) {
      return setRegisterFailed(true), setUploadVisible(false);
    } else {
      setRegisterFailed(false);

      const result2 = await authApi.login(email, password);

      if (!result2.ok) {
        return console.log("error in login"), setUploadVisible(false);
      }

      login(result2.data);
    }
  };
  return (
    <Screen>
      <UploadScreen
        progress={progress}
        visible={uploadVisible}
        onDone={() => setUploadVisible(false)}
      />
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {registerFailed && (
          <View
            style={{
              marginVertical: 20,
              marginHorizontal: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ErrorMessage
              error="A user with the given email already exists."
              visible={registerFailed}
            />
          </View>
        )}
        <AppFormField
          icon="account"
          placeholder="Name"
          autoCorrect={false}
          name="name"
        />

        <AppFormField
          icon="email"
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          typeContextType="emailAddress" //IOS
          name="email"
        />

        <AppFormField
          icon="lock"
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          typeContextType="password" //IOS
          name="password"
        />
        <SubmitButton title="REGISTER" />
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 30,
  },
});
export default RegisterScreen;
