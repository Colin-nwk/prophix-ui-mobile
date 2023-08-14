import "react-native-gesture-handler";

// import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "@rneui/themed";
import { AuthProvider } from "./src/context/AuthContext";

import Router from "./src/routes/Router";

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router />
        {/* <StatusBar style="auto" /> */}
      </ThemeProvider>
    </AuthProvider>
  );
}
