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

import { loginWithEmail } from '@/services/auth';

const featureItems = [
    { label: 'Global Experts', icon: 'globe-outline' },
    { label: 'Knowledge Sessions', icon: 'library-outline' },
    { label: 'Networking', icon: 'people-outline' },
    { label: 'Opportunities', icon: 'sparkles-outline' },
] as const;

export default function AuthScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleLogin = async () => {
      if (!email.trim() || !password.trim()) {
        Alert.alert('Missing information', 'Please enter both email and password.');
        return;
      }

      setIsSubmitting(true);

      try {
        await loginWithEmail(email, password);
        router.replace('/(tabs)' as any);
      } catch (error) {
        Alert.alert('Login failed', error instanceof Error ? error.message : 'Unable to sign in.');
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
                        <View className="mb-4 items-center">
                            <Text className="text-[11px] font-bold tracking-[2px] text-[#d7e7ff] opacity-90">
                                NESTLÉ MEDICAL CONGRESS
                            </Text>
                        </View>

                        <Text className="text-center text-[38px] font-black leading-[42px] text-[#f7d86f]">
                            NESTLÉ{"\n"}CONGRESS
                        </Text>

                        <Text className="mt-2 text-center text-[16px] text-[#e7f1ff] opacity-90">
                            The Next Era of{"\n"}Nutrition & Health
                        </Text>

                        <View className="mt-7 rounded-[26px] border border-[#dfeeff]/10 bg-[#f3f7ff] p-4 shadow-sm shadow-black/10">
                            <View className="mb-5 flex-row items-center justify-between">
                                <Text className="text-[26px] font-extrabold text-[#0b1f3f]">
                                    Welcome Back
                                </Text>

                                <View className="h-12 w-12 items-center justify-center rounded-full bg-[#2d7df6] shadow-md shadow-[#2d7df6]/30">
                                    <Ionicons name="shield-checkmark-outline" size={24} color="#ffffff" />
                                </View>
                            </View>

                            <View className="mb-3 flex-row items-center rounded-[14px] border border-[#cfe0ff] bg-white px-3 py-3.5">
                                <Ionicons name="mail-outline" size={18} color="#6179a9" />
                                <TextInput
                                    value={email}
                                    onChangeText={setEmail}
                                    placeholder="Enter your email"
                                    placeholderTextColor="#7a8eb6"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    className="ml-3 flex-1 text-[14px] text-[#1b2c4d]"
                                />
                            </View>

                            <View className="mb-3 flex-row items-center rounded-[14px] border border-[#cfe0ff] bg-white px-3 py-3.5">
                                <Ionicons name="lock-closed-outline" size={18} color="#6179a9" />
                                <TextInput
                                    value={password}
                                    onChangeText={setPassword}
                                    placeholder="Enter your password"
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
                                onPress={handleLogin}
                                disabled={isSubmitting}
                                className="mt-2 items-center justify-center rounded-full bg-gradient-to-r from-[#2e7ff6] to-[#6aa8ff] px-5 py-3.5 shadow-md shadow-[#2e7ff6]/30"
                            >
                                <Text className="text-[17px] font-extrabold text-white">
                                  {isSubmitting ? 'Signing in...' : 'Sign In'}
                                </Text>
                            </Pressable>

                            <View className="mt-5 items-center">
                                <Text className="text-[12px] font-bold tracking-[2px] text-[#6478a0]">
                                    OR CONTINUE WITH
                                </Text>
                            </View>

                            <View className="mt-4 flex-row items-center justify-between gap-4">
                                <Pressable className="flex-1 items-center justify-center rounded-full bg-white py-3 shadow-sm shadow-black/10">
                                    <View className="flex-row items-center gap-2">
                                        <Text className="text-[18px] font-bold text-[#1b2c4d]">G</Text>
                                    </View>
                                </Pressable>

                                <Pressable className="flex-1 items-center justify-center rounded-full bg-white py-3 shadow-sm shadow-black/10">
                                    <Ionicons name="logo-apple" size={20} color="#1a1a1a" />
                                </Pressable>
                            </View>

                            <Pressable className="mt-4 self-center">
                                <Text className="text-[13px] font-semibold text-[#2d7df6]">
                                    Forgot password?
                                </Text>
                            </Pressable>
                        </View>

                        <Pressable onPress={() => router.push('/(auth)/signup' as any)} className="mt-5 items-center">
                            <Text className="text-[13px] text-[#dfeaff]">
                                Don’t have an account?{' '}
                                <Text className="font-bold text-[#f4d36c]">Create Account</Text>
                            </Text>
                        </Pressable>

                        <View className="mt-5 flex-row flex-wrap justify-between gap-2">
                            {featureItems.map((item) => (
                                <View
                                    key={item.label}
                                    className="min-w-[120px] flex-1 items-center rounded-[16px] border border-white/10 bg-[#0d2b5f]/60 px-2 py-3"
                                >
                                    <Ionicons name={item.icon as any} size={18} color="#dfeaff" />
                                    <Text className="mt-2 text-center text-[10px] font-semibold text-[#edf4ff]">
                                        {item.label}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
