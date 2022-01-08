import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCog, faToolbox } from '@fortawesome/free-solid-svg-icons';

export default function CarItem() {
    return (
        <View style={styles.carContainer}>
            <ImageBackground
                source={require('../../assets/background.png')}
                style={styles.backgroundImage}
            />
            <View style={styles.header} size={24}>
                <FontAwesomeIcon style={styles.icon} icon={faCog} />
                <Text style={styles.headerTitle}>ProgrammingWithGaurav</Text>
                <FontAwesomeIcon style={styles.icon} icon={faToolbox} size={24} />
            </View>
        </View>
    )
}
