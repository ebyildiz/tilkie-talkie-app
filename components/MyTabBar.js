import React from 'react';
import { View, Text } from 'react-native';
import { useTheme, useLinkBuilder } from '@react-navigation/native';
import { PlatformPressable } from '@react-navigation/elements';

export default function MyTabBar({ state, descriptors, navigation }) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();

  return (
    <View style={{
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderTopColor: '#ddd',
      borderTopWidth: 2,
      paddingBottom: 40,
      paddingTop: 10
    }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={route.key}
            href={buildHref(route.name)}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: 'center' }}
          >
            <Text style={{
              color: isFocused ? '#ff914d' : '#aaa',
              fontWeight: isFocused ? 'bold' : 'normal',
              fontSize: 15,
              padding: 6,
            }}>
              {label}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
}
