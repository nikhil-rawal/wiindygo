import { Text, View } from "react-native";
import File from "../components/File";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";

function Index() {
  return (
    <SafeAreaView>
      <View>
        <Text className="text-5xl">Text 1</Text>
        <Text className="text-3xl">Text 2</Text>
        <Text className="text-red-600">Text 3</Text>
        <File />
      </View>
    </SafeAreaView>
  );
}

export default Index;
