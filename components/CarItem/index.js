import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
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
                <TouchableOpacity>
                    <FontAwesomeIcon style={styles.icon} icon={faCog} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>ProgrammingWithGaurav</Text>
                <TouchableOpacity>
                    <FontAwesomeIcon style={styles.icon} icon={faToolbox} size={24} />
                </TouchableOpacity>
            </View>
            {/* Battery */}
            <View style={styles.batterySection}>
                <Image
                    source={require('../../assets/battery.png')}
                    style={styles.batteryImage}
                />
                <Text style={styles.batteryText}>150 mi</Text>
            </View>
            <View style={styles.status}>
                <Text style={styles.statusText}>Parked</Text>
            </View>
        </View>
    )
}
