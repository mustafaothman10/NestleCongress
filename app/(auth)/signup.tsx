import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { signupWithEmail } from '@/services/auth';

export default function SignUpScreen() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignup = async () => {
    if (!fullName.trim() || !email.trim() || !password.trim()) {
      Alert.alert('Missing information', 'Please complete your name, email, and password.');
      return;
    }

    if (!acceptedTerms) {
      Alert.alert('Terms required', 'Please accept the congress terms to continue.');
      return;
    }

    setIsSubmitting(true);

    try {
      await signupWithEmail({
        name: fullName,
        email,
        hospital: organization,
        password,
      });

      router.replace('/(tabs)' as any);
    } catch (error) {
      Alert.alert('Signup failed', error instanceof Error ? error.message : 'Could not create account.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[#081e3b]">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        className="bg-[#081e3b]"
      >
        <View className="flex-1 px-4 pb-6 pt-3">
          <View className="mx-auto w-full max-w-[420px] rounded-[30px] bg-[#0a2249] p-4 shadow-lg shadow-black/30">

            <Text className="text-center text-[34px] font-black leading-[38px] text-[#f7d86f]">
              Join the{"\n"}NESTLÉ{"\n"}CONGRESS
            </Text>

            <Text className="mt-3 text-center text-[14px] text-[#e7f1ff] opacity-90">
              Create your attendee profile and access sessions, resources, voting and Q&A.
            </Text>

            <View className="mt-6 rounded-[24px] border border-[#dfeeff]/10 bg-[#f3f7ff] p-4 shadow-sm shadow-black/10">
              <View className="mb-3 flex-row items-center rounded-[14px] border border-[#cfe0ff] bg-white px-3 py-3.5">
                <Ionicons name="person-outline" size={18} color="#6179a9" />
                <TextInput
                  value={fullName}
                  onChangeText={setFullName}
                  placeholder="Full name"
                  placeholderTextColor="#7a8eb6"
                  autoCapitalize="words"
                  className="ml-3 flex-1 text-[14px] text-[#1b2c4d]"
                />
              </View>

              <View className="mb-3 flex-row items-center rounded-[14px] border border-[#cfe0ff] bg-white px-3 py-3.5">
                <Ionicons name="mail-outline" size={18} color="#6179a9" />
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Email address"
                  placeholderTextColor="#7a8eb6"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  className="ml-3 flex-1 text-[14px] text-[#1b2c4d]"
                />
              </View>

              <View className="mb-3 flex-row items-center rounded-[14px] border border-[#cfe0ff] bg-white px-3 py-3.5">
                <Ionicons name="business-outline" size={18} color="#6179a9" />
                <TextInput
                  value={organization}
                  onChangeText={setOrganization}
                  placeholder="Hospital / Organization"
                  placeholderTextColor="#7a8eb6"
                  autoCapitalize="words"
                  className="ml-3 flex-1 text-[14px] text-[#1b2c4d]"
                />
              </View>

              <View className="mb-3 flex-row items-center rounded-[14px] border border-[#cfe0ff] bg-white px-3 py-3.5">
                <Ionicons name="lock-closed-outline" size={18} color="#6179a9" />
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Create password"
                  placeholderTextColor="#7a8eb6"
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  className="ml-3 flex-1 text-[14px] text-[#1b2c4d]"
                />

                <Pressable onPress={() => setShowPassword((current) => !current)}>
                  <Ionicons
                    name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                    size={18}
                    color="#6179a9"
                  />
                </Pressable>
              </View>

              <Pressable
                onPress={() => setAcceptedTerms((current) => !current)}
                className="mb-4 mt-1 flex-row items-center"
              >
                <View
                  className={`mr-2 h-4 w-4 items-center justify-center rounded border ${acceptedTerms ? 'border-[#2d7df6] bg-[#2d7df6]' : 'border-[#7a8eb6] bg-transparent'
                    }`}
                >
                  {acceptedTerms ? <Ionicons name="checkmark" size={10} color="#ffffff" /> : null}
                </View>

                <Text className="text-[12px] text-[#42557f]">
                  I agree to the congress terms, privacy policy and attendee guidelines.
                </Text>
              </Pressable>

              <Pressable
                onPress={handleSignup}
                disabled={isSubmitting}
                className="items-center justify-center rounded-full bg-gradient-to-r from-[#2e7ff6] to-[#6aa8ff] px-5 py-3.5 shadow-md shadow-[#2e7ff6]/30"
              >
                <Text className="text-[17px] font-extrabold text-white">
                  {isSubmitting ? 'Creating account...' : 'Create Account'}
                </Text>
              </Pressable>

              <View className="mt-5 items-center">
                <Text className="text-[12px] font-bold tracking-[2px] text-[#6478a0]">
                  OR SIGN UP WITH
                </Text>
              </View>

              <View className="mt-4 flex-row items-center justify-between gap-4">
                <Pressable className="flex-1 items-center justify-center rounded-full bg-white py-3 shadow-sm shadow-black/10">
                  <Text className="text-[18px] font-bold text-[#1b2c4d]">G</Text>
                </Pressable>

                <Pressable className="flex-1 items-center justify-center rounded-full bg-white py-3 shadow-sm shadow-black/10">
                  <Ionicons name="logo-apple" size={20} color="#1a1a1a" />
                </Pressable>
              </View>
            </View>

            <Pressable onPress={() => router.push('/(auth)' as any)} className="mt-5 items-center">
              <Text className="text-[13px] text-[#dfeaff]">
                Already have an account?{' '}
                <Text className="font-bold text-[#f4d36c]">Sign In</Text>
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
