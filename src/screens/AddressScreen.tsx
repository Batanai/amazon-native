import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import countryList from 'country-list';
import CustomInput from '../components/CustomInput';
import Button from '../components/Button';

const countries = countryList.getData();

const AddressScreen = () => {
  const [country, setCountry] = useState(countries[0].code);
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');

  const onCheckout = () => {
    console.warn('checkout');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
      <ScrollView style={styles.root}>
        <View style={styles.row}>
          <Picker selectedValue={country} onValueChange={setCountry}>
            {countries.map((country: any) => (
              <Picker.Item
                value={country.code}
                label={country.name}
                key={country.code}
              />
            ))}
          </Picker>
        </View>

        <CustomInput
          inputLabel="Full name"
          input={fullname}
          setInput={() => setFullname}
        />

        <CustomInput
          inputLabel="Phone Number"
          input={phone}
          setInput={() => setPhone}
        />

        <CustomInput
          inputLabel="Address"
          input={address}
          setInput={() => setAddress}
        />

        <CustomInput inputLabel="City" input={city} setInput={() => setCity} />

        <Button
          text="Checkout"
          onPress={() => onCheckout}
          containerStyles={styles.addressButton}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  row: {
    margin: 10,
  },
  addressButton: {
    margin: 10,
  },
});
