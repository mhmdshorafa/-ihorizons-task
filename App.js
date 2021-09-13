/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {Colors} from './src/styles';
import DevicesSvg from './src/assets/svgs/devices.svg';
import RechargeSvg from './src/assets/svgs/recharge.svg';
import GiftCardsSvg from './src/assets/svgs/gift-cards.svg';
import OffersSvg from './src/assets/svgs/offers.svg';
import ArrowSvg from './src/assets/svgs/arrow.svg';
import * as Progress from 'react-native-progress';
import IconsWidget from './src/components/iconsWidget';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Pressable,
  Image,
} from 'react-native';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const rectangles = [
    {
      IconComponent: () => <RechargeSvg height={32} width={23} />,
      text: 'Recharge',
    },
    {
      IconComponent: () => <GiftCardsSvg height={21.46} width={31.13} />,
      text: 'Gift Cards',
    },
    {
      IconComponent: () => <OffersSvg height={26.13} width={27.55} />,
      text: 'Offers',
    },
    {
      IconComponent: () => <DevicesSvg height={28} width={28} />,
      text: 'Devices',
    },
  ];

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={[styles.container, styles.backgroundStyle]}>
        <View style={styles.componentsContainer}>
          <View style={styles.rectanglesContainer}>
            <IconsWidget icons={rectangles} />
          </View>
          <View style={styles.userContainer}>
            <View style={styles.userProfile}>
              <View style={styles.imageNameContainer}>
                <View>
                  <Image
                    style={styles.image}
                    source={require('./src/assets/images/profile-pic.png')}
                  />
                </View>
                <View style={styles.textView}>
                  <Text style={styles.idText} numberOfLines={1}>
                    65743628
                  </Text>
                  <Text style={styles.nameText} numberOfLines={1}>
                    - Sara Jone
                  </Text>
                </View>
              </View>
              <View>
                <ArrowSvg height={16} width={16} />
              </View>
            </View>
            <View style={styles.userInfo}>
              <View style={styles.userInfoItem}>
                <View>
                  <Text style={styles.userItemUpperText}>
                    20 <Text style={styles.unit}>GB</Text>
                  </Text>
                </View>
                <View>
                  <Progress.Bar
                    progress={0.87}
                    color="#FFD500"
                    unfilledColor="#E8E8E8"
                    borderWidth={0}
                    width={100}
                  />
                </View>
                <View>
                  <View>
                    <Text style={styles.nameText} numberOfLines={1}>
                      Data
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.userInfoItem}>
                <View>
                  <Text style={styles.userItemUpperText}>
                    400 <Text style={styles.unit}>mins</Text>
                  </Text>
                </View>
                <View>
                  <Progress.Bar
                    progress={0.51}
                    color="#FFA300"
                    unfilledColor="#E8E8E8"
                    borderWidth={0}
                    width={100}
                  />
                </View>
                <View>
                  <View>
                    <Text style={styles.nameText} numberOfLines={1}>
                      Calls
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.userInfoItem}>
                <View>
                  <Text style={styles.userItemUpperText}>
                    250 <Text style={styles.unit}>mins</Text>
                  </Text>
                </View>
                <View>
                  <Progress.Bar
                    progress={0.13}
                    color={Colors.RED}
                    unfilledColor="#E8E8E8"
                    borderWidth={0}
                    width={100}
                  />
                </View>
                <View>
                  <View>
                    <Text style={styles.nameText} numberOfLines={1}>
                      Intl.
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.userKD}>
              <View style={styles.kdItem}>
                <Text style={styles.kdUpperText}>KD 50.00</Text>
                <Text style={styles.kdDownText}>Expires in 5 days</Text>
              </View>
              <View>
                <Pressable style={styles.button} onPress={() => {}}>
                  <Text style={styles.buttonText}>RECHARGE</Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View style={styles.recommended}>
            <View style={styles.recommendedLabels}>
              <View>
                <Text style={styles.recommendedText}>Recommended for you</Text>
              </View>
              <View>
                <Pressable onPress={() => {}}>
                  <Text style={styles.seeMoreText}>See more</Text>
                </Pressable>
              </View>
            </View>
            <ScrollView horizontal>
              <View style={styles.recommendedImage}>
                <Image
                  style={styles.recommendedImage}
                  source={require('./src/assets/images/recommend-1.png')}
                />
              </View>
              <View style={styles.recommendedImage}>
                <Image
                  style={styles.recommendedImage}
                  source={require('./src/assets/images/recommend-2.png')}
                />
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
  },
  backgroundStyle: {
    backgroundColor: Colors.GRAY_LIGHT,
  },
  rectanglesContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%',
    height: 87,
    marginVertical: 20,
  },
  textView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
  },
  text: {
    fontSize: 14,
    color: Colors.BLACK_LIGHT,
  },
  componentsContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 27,
    paddingVertical: 24,
    borderRadius: 18,
    justifyContent: 'center',
  },
  userContainer: {
    height: 182,
    display: 'flex',
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: Colors.GRAY_MEDIUM,
    borderRadius: 8,
    backgroundColor: Colors.WHITE,
  },
  imageNameContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '65%',
  },
  userProfile: {
    paddingHorizontal: 9,
    paddingVertical: 7,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  idText: {
    color: Colors.BLACK_LIGHT,
    fontSize: 14,
    fontFamily: 'Ooredoo-Heavy',
    fontWeight: 'bold',
    marginRight: 3,
  },
  nameText: {
    color: Colors.GRAY_LIGHTER,
    fontSize: 12,
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 9,
    paddingVertical: 7,
  },
  unit: {
    fontSize: 12,
  },
  userInfoItem: {
    display: 'flex',
    height: 70,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  userItemUpperText: {
    color: Colors.BLACK_LIGHT,
    fontSize: 18,
  },
  userKD: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 9,
    paddingVertical: 7,
    backgroundColor: Colors.GRAY_DARK,
  },
  kdItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  kdUpperText: {
    fontSize: 14,
    color: Colors.BLACK_LIGHT,
  },
  kdDownText: {
    fontSize: 12,
    color: Colors.GRAY_LIGHTER,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    width: 94,
    height: 36,
    backgroundColor: Colors.RED,
  },
  buttonText: {
    color: Colors.WHITE,
    fontSize: 12,
    height: 15,
    fontWeight: '900',
  },
  recommended: {
    display: 'flex',
    flexDirection: 'column',
    marginVertical: 50,
  },
  recommendedLabels: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  recommendedText: {
    fontSize: 20,
    fontWeight: '900',
    color: Colors.BLACK_LIGHT,
  },
  seeMoreText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    color: Colors.RED,
  },
  recommendedImage: {
    width: 249,
    height: 293,
    marginRight: 30,
  },
});

export default App;
