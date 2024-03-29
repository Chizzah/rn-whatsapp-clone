import { NavigationContainer } from "@react-navigation/native";

import StackNavigation from "./components/StackNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
