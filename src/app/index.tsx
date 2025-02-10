import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View className="w-full h-full flex justify-center items-center">
      <Text>Open up App.tsx to start working on your app!</Text>
      <Link href="/about">Sobre</Link>
      <Link href="/contact">Contato</Link>
      <Link href="/info">Info</Link>
      <StatusBar style="auto" />
    </View>
  );
}