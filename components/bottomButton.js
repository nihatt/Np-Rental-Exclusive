import * as React from 'react';
import { View, Text } from 'react-native';
import AppBar from '../components/appHeader';
import { FAB, Portal, Provider } from 'react-native-paper';









function BottomButton() {
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
            onPress: () => console.log('Pressed star'),
          },
          {
            icon: 'email',
            label: 'Mail Hattı',
            onPress: () => console.log('Pressed email'),
          },
          {
            icon: 'phone',
            label: 'Bizi Ara!',
            onPress: () => console.log('Pressed email'),
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