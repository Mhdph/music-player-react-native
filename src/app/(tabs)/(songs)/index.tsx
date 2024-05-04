import { screenPadding } from '@/constants/tokens'
import { useNavigationSearch } from '@/hooks/useNavgationSearch'
import { defaultStyles } from '@/styles'
import { ScrollView, View } from 'react-native'
import library from '@/assets/data/library.json'
import { useMemo } from 'react'
import { trackTitleFilter } from '@/helpers/filter'
import { TracksList } from '@/components/TrackList'
import { generateTracksListId } from '@/helpers/miscellaneous'
const SongScreen = () => {
	const search = useNavigationSearch({
		searchBarOptions: {
			placeholder: 'find in songs',
		},
	})
	const filteredSongs = useMemo(() => {
		if (!search) return library

		return library.filter(trackTitleFilter(search))
	}, [search])

	return (
		<View style={defaultStyles.container}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={{ paddingHorizontal: screenPadding.horizontal }}
			>
				<TracksList
					tracks={filteredSongs}
					scrollEnabled={false}
					id={generateTracksListId('songs', search)}
				/>
			</ScrollView>
		</View>
	)
}

export default SongScreen
