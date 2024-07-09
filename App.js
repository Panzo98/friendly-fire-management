import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { PaperProvider } from "react-native-paper";
import store from "./store/store";
import MainNavigator from "./navigation/MainNavigator";
import LoginScreen from "./screens/LoginScreen";
import CustomSafeArea from "./components/CustomSafeArea";

const App = () => {
  const isLogedIn = true;
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <CustomSafeArea />
          {isLogedIn ? <MainNavigator /> : <LoginScreen />}
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;
