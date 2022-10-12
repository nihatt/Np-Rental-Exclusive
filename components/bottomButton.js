import * as React from 'react';
import { View, Text,Linking } from 'react-native';
import AppBar from '../components/appHeader';
import { FAB, Portal, Provider } from 'react-native-paper';









function BottomButton() {
  const [url,setUrl] = React.useState("");

  const handlePress = React.useCallback(async (url) => {
    console.log(url)
    const supported = await Linking.canOpenURL(url);
    console.log(url)
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`URL Kısmında Bir Hata Var: ${url}`);
    }
  }, [url]);


    const [state, setState] = React.useState({ open: false });

    const onStateChange = ({ open }) => setState({ open });
  
    const { open } = state;
  return (
    <Provider>
    <Portal>
      <FAB.Group
        open={open}
        icon={open ? 'minus' : 'plus'}
        actions={[
          {
            icon: 'whatsapp',
            label: 'Whatsapp İletişim',
            onPress: () => {handlePress("https://wa.me/905551592342")},
          },
          {
            icon: 'email',
            label: 'Mail Hattı',
            onPress: () => {handlePress("mailto: support@expo.io")},
          },
          {
            icon: 'phone',
            label: 'Bizi Ara!',
            onPress: () => {handlePress("tel:+905551592342")},
          },
        ]}
        onStateChange={onStateChange}
        onPress={() => {
          if (open) {
            // do something if the speed dial is open
          }
        }}
      />
    </Portal>
  </Provider>
  );
}

export default BottomButton;