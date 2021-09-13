import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { IconsWidgetSchema } from '../schema';
import { Colors } from '../styles';

export default (props: IconsWidgetSchema) => {

  return props.icons.map((icon) =>
    <View style={styles.rectangleContainer} key={icon.text}>
      <View style={styles.rectangle}>
        <icon.IconComponent />
      </View>
      <View style={styles.textView}>
        <Text style={styles.text} numberOfLines={1}>
          {icon.text}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rectangle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 66,
    width: 66,
    marginRight: 20,
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.GRAY_MEDIUM,
  },
  rectangleContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: 'auto',
    height: 87,
  },
  textView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    marginRight: 20
  },
  text: {
    fontSize: 14,
    color: Colors.BLACK_LIGHT,
  },
});
