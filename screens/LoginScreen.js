import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import Svg, { Path } from 'react-native-svg';
import MaskedView from '@react-native-masked-view/masked-view';

const { width, height } = Dimensions.get('window');

export default function LoginScreen({ onLoginSuccess }) {
  const [showSignup, setShowSignup] = useState(false);
  // Add state for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle the login button press
  const handleLogin = () => {
    // console.log('Email:', email);
    // console.log('Password:', password);
    // send this info to backend API
    onLoginSuccess();
  };

  return (
    <View style={styles.container}>
      {!showSignup ? (
        <>
          <Swiper
            style={styles.wrapper}
            showsPagination={true}
            //autoplay
            //autoplayTimeout={30}
            //loop
            
          >
          <MaskedView
            style={{ height: height - 150, width }}
            maskElement={
              <Svg
                width={width}
                height={height}
                viewBox={`0 0 ${width} ${height}`}
              >
                <Path
                  fill="#000"
                  d={`
                    M0,0
                    H${width}
                    V${height - 270}
                    C${width * 0.75},${height - 170} ${width * 0.25},${height - 370} 0,${height - 270}
                    Z
                  `}
                />
              </Svg>
            }
          >
            <Image
              source={require('../assets/img1.png')}
              style={{ width, height, resizeMode: 'cover' }}
            />
            </MaskedView>
            
            <MaskedView
              style={{ height, width }}
              maskElement={
                <Svg
                  width={width}
                  height={height}
                  viewBox={`0 0 ${width} ${height}`}
                >
                  <Path
                    fill="#000"
                    d={`M0,0
                        H${width}
                        V${height - 270}
                        C${width * 0.75},${height - 170} ${width * 0.25},${height - 370} 0,${height - 270}
                        Z
                      `}
    
                  />
                </Svg>
                    }
            >
              <Image
                source={require('../assets/img2.png')}
                style={{
                  width: width,
                  height: height,
                  resizeMode: 'cover',
                }}
              />
            </MaskedView>

            <MaskedView
              style={{ height, width }}
              maskElement={
                <Svg
                  width={width}
                  height={height}
                  viewBox={`0 0 ${width} ${height}`}
                >
                  <Path
                    fill="#000"
                    d={`M0,0
                      H${width}
                      V${height - 270}
                      C${width * 0.75},${height - 170} ${width * 0.25},${height - 370} 0,${height - 270}
                      Z
                    `}
    
                  />
                </Svg>
                    }
            >
              <Image
                source={require('../assets/img3.png')}
                style={{
                  width: width,
                  height: height,
                  resizeMode: 'cover',
                }}
              />
            </MaskedView>

          </Swiper>

          <View style={styles.overlay}>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Giris Yap</Text>
            </TouchableOpacity>
            <Text style={styles.reg_Text}> Hesabin yok mu? </Text>
            <TouchableOpacity style={[styles.button, styles.signupButton]} onPress={() => setShowSignup(true)}>
              <Text style={styles.buttonText}>Uye ol</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        // Placeholder logic — you can render your actual login/signup forms here
        <View style={styles.authContainer}>
          <Text style={styles.caption}>
            {showLogin ? 'Login Form' : 'Signup Form'}
          </Text>
        </View>
      )
    
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // wrapper: {
  //   flex: 1,
  // },
  // swiper: {
  //   flex: 1,
  // },
  slide: {
    width,
    height,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    position: 'static',
    width: 300,
    height: 300,
    resizeMode: 'contain',

  },
  reg_Text: {
    fontSize: 13,
    fontWeight: '600',
    color: '#ff8c00',
    // textShadowColor: 'rgba(0,0,0,0.6)',
    // textShadowOffset: { width: 1, height: 1 },
    // textShadowRadius: 3,
    marginBottom: 10,
    textAlign: 'center',
    fontStyle: 'normal',
  },
  caption: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fff',
    textShadowColor: 'rgba(0,0,0,0.6)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    marginBottom: 300,
    textAlign: 'justify',
  },
  overlay: {
    position: 'absolute',
    bottom: 60,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#ff8c00',
    padding: 12,
    borderRadius: 100,
    width: 200,
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#ff4500', // intense orange-red
    shadowOpacity: 1,
    shadowRadius: 0, // no blur = sharp shadow
    shadowOffset: { width: 0, height: 5 }, // push it to the LEFT
    elevation: 8, // Android shadow

    // iOS border for sharpness (optional)
    borderWidth: 1,
    borderColor: '#ff914d',
  },
  signupButton: {
    backgroundColor: '#ff8c00',
    width: 100,
    padding: 7,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  authContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wave: {
    position: 'relative',
    bottom: 0,
    left: 0,
    right: 0
  },
});