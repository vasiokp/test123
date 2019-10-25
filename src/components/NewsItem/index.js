import React from 'react'
import { View, Text, StyleSheet, ImageBackground, ActivityIndicator } from 'react-native'
import { BACK_COLOR, BLOCK_BORDER_COLOR } from '../../plugins/AppColors'
import moment from 'moment'
import image from '../../assets/img/t1.png'

const newsItem = (props) => (
  <View style={[styles.listItem, moment(props.Date).add(3, 'days') > moment.now() ? styles.newItemBorder : null]}>

    <ImageBackground source={props.imageLoading ? null : (props.image && props.imageError === false) ? { uri: 'data:image/jpeg;base64, ' + props.image } : image} style={styles.background}>
      {props.imageLoading ? <View>
        <ActivityIndicator style={{ marginBottom: 25 }} />
      </View> : null}
      <View>
        {moment(props.Date).add(3, 'days') > moment.now() ? <View style={styles.newItemTitle}><Text style={styles.newItemText}>  Нова  </Text></View> : <View></View>}
      </View>
      <View style={styles.title}>
        <View style={styles.titleBlock}>
          <Text numberOfLines={2} style={styles.titleText}>{props.Title || 'без назви'}</Text>
        </View>
        <View style={styles.dateBlock}>
          <Text style={styles.text}>{props.Author || 'Невідомий автор'}</Text>
          <Text style={styles.text}>{moment(props.Date).format('DD-MM-YYYY')}</Text>
        </View>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    height: 230,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor: BLOCK_BORDER_COLOR
  },
  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  title: {
    backgroundColor: 'rgba(135, 135, 135, 0.7)',
    height: '40%',
    padding: 7
  },
  titleText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: 'transparent'
  },
  dateBlock: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    color: '#fff'
  },
  titleBlock: {
    height: '80%'
  },
  newItemBorder: {
    borderWidth: 2,
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderColor: '#fff'
  },
  newItemTitle: {
    flexDirection: "row-reverse",
  },
  newItemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgba(255, 165, 97, 1)',
    backgroundColor: '#fff'
  }
})

export default newsItem;