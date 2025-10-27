import {View, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import styles from './Style';

const Login = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Phone"
                />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
    );
};

export default LoginScreen;