import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Alert, Text, View } from "react-native";
import { PageLayout } from "~/src/components";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!name.trim() || !email.trim()) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (!email.includes("@")) {
      Alert.alert("Error", "Please enter a valid email");
      return;
    }

    const userData = {
      id: 1,
      name: name.trim(),
      email: email.trim(),
    };

    global.saveUser(userData);
  };

  return (
    <PageLayout className="flex-1 p-5 bg-background">
      <Text className="text-2xl font-bold text-foreground mb-2">Welcome!</Text>
      <Text className="text-base text-muted-foreground mb-6">
        Please enter your details to continue
      </Text>

      <View className="space-y-4">
        <Input placeholder="Your Name" value={name} onChangeText={setName} />
        <Input
          placeholder="Your Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Button onPress={handleSubmit}>Continue</Button>
      </View>

      <Text className="mt-6 text-sm text-muted-foreground text-center">
        Note: Your information will only be stored locally on your device and
        won't be sent to any external servers.
      </Text>
    </PageLayout>
  );
}
