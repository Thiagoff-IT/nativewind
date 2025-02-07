import { useState } from 'react';
import { Alert, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { contactFormSchema } from './validation/contactSchema';

export default function Contact() {
  // Estados para os campos e erros
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<{ nome?: string; email?: string }>({});

  // Função de envio com validação
  const handleSubmit = () => {
    console.log("handleSubmit chamado", { nome, email });
    const result = contactFormSchema.safeParse({ nome, email });
    if (!result.success) {
      const errs = result.error.flatten().fieldErrors;
      console.log("Erros de validação:", errs);
      setErrors({
        nome: errs.nome ? errs.nome.join(', ') : undefined,
        email: errs.email ? errs.email.join(', ') : undefined
      });
      Alert.alert("Erro", Object.values(errs)
        .map(err => err?.join(', '))
        .join('\n'));
      return;
    }
    console.log("Formulário validado com sucesso!");
    setErrors({});
    Alert.alert("Sucesso", "Formulário enviado com sucesso!");
  };

  return (
    <View className="w-full h-full p-4 bg-white">
      <Text className="text-xl font-bold mb-4">Contato</Text>

      <TextInput 
        placeholder="Nome" 
        value={nome}
        onChangeText={(text) => { setNome(text); setErrors(prev => ({ ...prev, nome: undefined })); }}
        className="border border-gray-300 rounded p-2 mb-1" 
      />
      {errors.nome && <Text className="text-red-500 text-sm mb-2">{errors.nome}</Text>}

      <TextInput 
        placeholder="Email" 
        value={email}
        onChangeText={(text) => { setEmail(text); setErrors(prev => ({ ...prev, email: undefined })); }}
        keyboardType="email-address" 
        className="border border-gray-300 rounded p-2 mb-1" 
      />
      {errors.email && <Text className="text-red-500 text-sm mb-2">{errors.email}</Text>}

      <TouchableOpacity onPress={handleSubmit} className="bg-blue-500 p-3 rounded">
        <Text className="text-white text-center">Enviar</Text>
      </TouchableOpacity>
      <Link href="/about" className="mt-4 text-blue-500">Sobre</Link>
      <StatusBar style="auto" />
    </View>
  );
}