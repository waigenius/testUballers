import { View, Text, Button, Modal } from 'react-native'
import React from 'react'

export default function GroundInfo(props) {
  return (
    <View>
        <Modal visible={props.isVisible}>
    
        <Text>Détails sur le terrain</Text>
        <Button title="Close" onPress={props.handleClose}></Button>
      </Modal>
    </View>
  )
}