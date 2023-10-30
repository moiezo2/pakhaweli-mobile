import { useState } from 'react';
import { Tab, Text, TabView } from '@rneui/themed';
import { TopTabBarParams } from '../../models/customTabBarProps';
import { appThemeColour } from '../../constants';
import { widthPercentageToDP as wp } from '../common/ResponsiveScreen';
import { getScaledFont } from '../common/FontSize';
import { StyleSheet } from 'react-native';

import LoginScreen from '../../screens/authscreens/LoginScreen';
import SignUpScreen from '../../screens/authscreens/SignUp';

export default ({
  conatinerStyle,
  tabsContent
}: TopTabBarParams) => {
  const [index, setIndex] = useState(0);
  return (
    <>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: appThemeColour,
          height: 3,
          width: '20%',
          marginLeft: `${11 + (index * 9)}%`
        }}
        style={{
          backgroundColor: '#FFFFFF',
          borderBottomLeftRadius: wp('10%'),
          borderBottomRightRadius: wp('10%'),
        }}
        buttonStyle={{
          width: '75%',
          marginLeft: '12.5%'
        }}
        variant="default"
      >
        {
          tabsContent.map(val => <Tab.Item
            style={{flex : 1 }}
            title={val.title}
            titleStyle={styles.tabItemText}
          />)
        }

      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item>
          <LoginScreen />
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
          <SignUpScreen />
        </TabView.Item>
      </TabView>
    </>
  );
};

const styles = StyleSheet.create({
  tabItemText: {
    color: '#000000',
    fontSize: getScaledFont(16),
    fontWeight: 'bold'
  }
})