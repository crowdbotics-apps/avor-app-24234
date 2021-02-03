import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen14199991Navigator from '../features/BlankScreen14199991/navigator';
import Settings199990Navigator from '../features/Settings199990/navigator';
import UserProfile199983Navigator from '../features/UserProfile199983/navigator';
import Settings199980Navigator from '../features/Settings199980/navigator';
import SignIn2199978Navigator from '../features/SignIn2199978/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen14199991: { screen: BlankScreen14199991Navigator },
Settings199990: { screen: Settings199990Navigator },
UserProfile199983: { screen: UserProfile199983Navigator },
Settings199980: { screen: Settings199980Navigator },
SignIn2199978: { screen: SignIn2199978Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
