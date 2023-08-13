import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {
  Alert,
  ImageBackground,
  View,
} from 'react-native';
import {PersonInterface} from '../../../models/PersonInterface';
import IconMolecule from '../../molecules/IconMolecule';
import {PersonData, NotificationData} from '../../../data/data';
import styles from './HomePageStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NotificationInterface } from '../../../models/NotificationInterface';


interface Props extends StackScreenProps<any, any> {}

const dataUser: PersonInterface = PersonData;
const dataNotification: NotificationInterface[] = NotificationData;

const HomePage = ({navigation}: Props) => {
  console.log(navigation);

  return (
    <ImageBackground
      source={require('../../../assets/g5.jpeg')}
      style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.headerButtons}>
          <IconMolecule
            containerIconStyles={styles.iconStyle}
            iconName="person-outline"
            iconSize={26}
            iconColor="rgba(255, 255, 255, 0.9)"
            onPress={() => navigation.navigate('ProfilePage', {...dataUser})}
            activeOpacity={0.6}
            button={true}
          />
          <View style={styles.headerRightButtons}>
            <IconMolecule
              containerIconStyles={styles.iconStyle}
              iconName="notifications-outline"
              iconSize={26}
              iconColor="rgba(255, 255, 255, 0.9)"
              onPress={() => navigation.navigate('NotificationPage', [...dataNotification])}
              activeOpacity={0.6}
              button={true}
            />
            <IconMolecule
              containerIconStyles={[styles.iconStyle, styles.iconRightStyle]}
              iconName="power-outline"
              iconSize={26}
              iconColor="rgba(255, 255, 255, 0.9)"
              onPress={() => {Alert.alert('Cerrar Sesión', '¿Estás seguro de cerrar sesión?', [ {text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}, {text: 'Aceptar', onPress: () => navigation.navigate('AuthPage')} ], {cancelable: false}, );}}
              activeOpacity={0.6}
              button={true}
            />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default HomePage;
