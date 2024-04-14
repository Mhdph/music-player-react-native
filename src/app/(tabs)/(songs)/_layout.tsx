import { Stack } from 'expo-router'
import { View } from 'react-native'
import { defaultStyles } from '@/styles'

const SongScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{
						headerTitle: 'Songs',
					}}
				/>
			</Stack>
		</View>
	)
}

export default SongScreenLayout
