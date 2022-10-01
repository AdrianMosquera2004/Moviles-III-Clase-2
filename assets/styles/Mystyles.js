import { StyleSheet } from "react-native";

const myStyle = StyleSheet.create({
    viewHeader:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'green',
        width:'80%',
        
    }
})

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    viewChild:{
      flex:5, 
      backgroundColor:'yellow',
      width:'80%',
    },
    alignView:{
      justifyContent:'center',
      alignItems:'center'
    }
  });

  export {styles, myStyle}