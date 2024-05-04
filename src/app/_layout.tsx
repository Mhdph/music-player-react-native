import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { SplashScreen, Stack } from 'expo-router'
import { useSetupTrackPlayer } from '@/hooks/useSetupTrackPlayer'
import { useCallback } from 'react'
import { useLogTrackPlayerState } from '@/hooks/useLogTrackPlayerState'

SplashScreen.preventAutoHideAsync()

export default function App() {
	useLogTrackPlayerState()

	const handleTrackPlayerLoaded = useCallback(() => {
		SplashScreen.hideAsync()
	}, [])

	useSetupTrackPlayer({
		onLoad: handleTrackPlayerLoaded,
	})
	return (
		<SafeAreaProvider style={styles.container}>
			<RootNavigation />
			<StatusBar style="auto" />
		</SafeAreaProvider>
	)
}

const RootNavigation = () => {
	return (
		<Stack>
			<Stack.Screen
				name="(tabs)"
				options={{
					headerShown: false,
				}}
			/>
		</Stack>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
