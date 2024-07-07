import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./store/store";
import MainNavigator from "./navigation/MainNavigator";
import LoginScreen from "./screens/LoginScreen";
import CustomSafeArea from "./components/CustomSafeArea";

const App = () => {
  const isLogedIn = true;
  return (
    <Provider store={store}>
      <NavigationContainer>
        <CustomSafeArea />
        {isLogedIn ? <MainNavigator /> : <LoginScreen />}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
