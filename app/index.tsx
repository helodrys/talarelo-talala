import { Redirect } from 'expo-router';

export default function Index() {
    const isLoggedIn = false; // 👈 hardcoded for testing

    return <Redirect href={isLoggedIn ? '/(tabs)/home' : '/welcome2'} />;
}
