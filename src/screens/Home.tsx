import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import Background from '../assets/images/Background.png';
import LogoPokemonGo from '../assets/images/LogoPokemonGo.png';
export default function Home({ navigation }: any) {
    const styles = {
        container: {
            flex: 1,
        },

        containerName: {
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent',
            borderRadius: 999, 
            marginTop: 30,
            marginHorizontal: 50,
        },

        username: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#e8050d',
        },

        LogoBG:{
            
             flex: 1,
              justifyContent: 'center',
               alignItems: 'center',
               size: 'contain',
        },

        buttonContainer: {
       
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginBottom: 40,
        },

        button: {
            backgroundColor: '#ffffffff',
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderRadius: 8,
        },

        buttonText: {
            color: '#000000ff',
            fontSize: 16,
            fontWeight: '600',
        },
    };

    return (
        <ImageBackground
            source={Background}
            style={styles.container}
            resizeMode="cover"
        >
            {/* FAIXA BRANCA */}
            <View style={styles.containerName}>
                <Text style={styles.username}>KAYKY FIDELIS HILARIO</Text>
            </View>

<View style={styles.LogoBG}>
            <ImageBackground
                source={LogoPokemonGo}
                style={{ width: '100%', height: '100%' }}
                resizeMode="contain"
            />

        </View>
            {/* BOTÃO */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Scanner')}
                >
                    <Text style={styles.buttonText}>Scanner QRCODE</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}
