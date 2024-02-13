import { Image, Text, View } from "react-native";



const Header = ({textone , textwo , image}) => {
    return(
<View style={styles.hcontainer}>
<Image source={IMAGES.cross} />
<Text style={styles.header}>Sign U</Text>
<Text style={styles.log}>Login</Text>
</View>
    )
}

export default Header ;

