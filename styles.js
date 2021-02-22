import {StyleSheet} from 'react-native'

const nunito = (weight) => {

  const fontStyles = {
    '200':'ExtraLight',
    '300':'Light',
    '400':'Regular',
    '600':'SemiBold',
    '700':'Bold',
    '800':'ExtraBold',
    '900':'Black',
  }

  return `Nunito_${weight}${fontStyles[`${weight}`]}`
}

const primary = '#FFC700'
const borderRad = 20

const styles = StyleSheet.create({
    app: {
      flex: 1,
      backgroundColor: '#fff',
    //   alignItems: 'center',
      // justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
      
    },
    flex:{flex:1},
    top:{
        backgroundColor: primary,
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 200
    },
    bottom:{
      padding: 30,
        backgroundColor: '#fff',
        flex: 4,
        // padding: 20
    },
    type:{
        width: 200,
        height: 84
    },
    inputField:{
      marginVertical: 10
    },
    formInput:{
      height:50,
      backgroundColor: '#E4E4E4',
      borderTopLeftRadius: borderRad,
      borderTopRightRadius: borderRad,
      padding:10
    },
    formTitle:{
      textAlign: 'center',
      fontSize: 50,
      padding: 10,
      color: primary,
      fontFamily: nunito(600)
    },
    inputTitle:{
      fontFamily: nunito(400),
      fontSize: 20,
      color: 'gray'
    },
    formButton:{
      backgroundColor:primary,
      padding: 15,
      marginVertical: 10,
      alignItems:'center',
      justifyContent: 'center',
      borderRadius: 40,
    },
    formButtonText:{
      fontFamily: nunito(700),
      color: '#fff',
      fontSize:20
    },
    link:{
      color: 'blue',
      textDecorationLine: 'underline',
    },
    text:{
      fontFamily: nunito(400),
      fontSize: 17
    },
    formNav:{
      flexDirection:'row', 
      alignItems:'center', 
      justifyContent:'center',
    },
    userBar:{
      // height:50,
      justifyContent: 'center',
      alignItems: 'flex-end',
      padding: 20,
      backgroundColor: primary
    },
    chatCard:{
      padding:20,
      // marginBottom:10,
      // borderBottomColor: 'gray',
      // borderBottomWidth:1,
      // backgroundColor: 'silver'
    },
    chatSeperator: {
      height: 1,
      backgroundColor: 'gray',
      marginHorizontal: 10
    },
    logout:{
      backgroundColor: 'white',
      padding: 10,
      marginRight:10
    },
    messages:{
      backgroundColor: primary,
      flex:1
    },
    message:{
      backgroundColor: '#FFF3C7',
      padding: 5,
      margin:5,
      marginRight:50,
      alignSelf: 'flex-start',
      // flex:0
      borderRadius:10,
      borderBottomLeftRadius:0,
    },
    user:{
      marginLeft: 50,
      alignSelf: 'flex-end',
      marginRight: 5,
      backgroundColor:'#fff',
      borderBottomLeftRadius:10,
      borderBottomRightRadius:0
    },
    inputForm:{
      display:'flex',
      flexDirection: 'row',
      padding: 10,
      backgroundColor: primary,
      fontFamily: nunito(400)
      // borderRadius:15,
    },
    messageInput:{
      // width: 50
      flex:1,
      padding: 10,
      backgroundColor: '#fff',
      borderTopLeftRadius: borderRad,
      borderBottomLeftRadius: borderRad,
      fontFamily: nunito(400)
    },
    sendButton:{
      // width:50,
      // margin:10,
      backgroundColor: "#fff",
      // padding: 10,
      alignItems:'center',
      justifyContent: 'center',
      borderBottomRightRadius: borderRad,
      borderTopRightRadius: borderRad,
    },
    sendButtonInner:{
      backgroundColor:'#FFC700', 
      // padding: 10, 
      borderRadius: 99, 
      height:30, 
      width:30, 
      alignItems: 'center', 
      justifyContent: 'center',
      margin: 10, 
    },
    searchCard:{
      padding: 10,
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#fff',
      margin: 2,
    },
    searchLeft:{
      flex: 1,
    },
    searchName:{
      fontSize: 22,
      fontFamily: nunito(400)
    },
    searchUsername:{
      color: primary,
      fontFamily: nunito(700)
    },
    dummy:{},
    dummy:{},
    dummy:{},
    dummy:{},
    dummy:{},
  });

  export default styles