import {useState} from 'react';
import { StyleSheet,  Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import Header from './components/Header';
import {styles,} from './assets/styles/Mystyles'
//const App = () =>{
export default function App(){
  // Hooks para estados con useState
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState('');
  let mostrar = ()=>{
    alert(`El valor 1 es ${valor1}`)
  }

  let sumar = function(){
    setResultado(parseFloat(valor1) + parseFloat(valor2));
  }
  
  let calcular = (oper)=>{
    let mresult = 0;
    switch(oper){
      case "+":
        mresult = parseFloat(valor1) + parseFloat(valor2);
        break;

      case "-":
        mresult = parseFloat(valor1) - parseFloat(valor2);
        break;

      case "*":
        mresult = parseFloat(valor1) * parseFloat(valor2);
        break;

      case "/":
        mresult = parseFloat(valor1) / parseFloat(valor2);
        break;
    }
    setResultado(mresult)
  }

  const limpiar = ()=> {  
    setValor1('');
    setValor2('');
    setResultado(0);
  }
  return (
    <View style={[styles.container,styles.alignView]}>
      <Header src="cal2.jpg"></Header>
      <View style={[styles.viewChild,styles.alignView,{marginTop:10}]}>
          <Image
            source={{uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi_m_ljFkn_v6fLx5E9e8g5FYbVv4i1S3y5g&usqp=CAU'}}
            style={{width:100, height:100}}
          />
          <Text>Valor 1</Text>
          <TextInput
            placeholder='Ingrese valor 1'
            style={{borderWidth:1, borderStyle:'solid', padding:5, textAlign:'center'}}
            onChangeText={valor1 => setValor1(valor1)}
            value={valor1}
          />
          <Text>Valor 2</Text>
          <TextInput
            placeholder='Ingrese valor 2'
            style={{borderWidth:1, borderStyle:'solid', padding:5, textAlign:'center'}}
            onChangeText={valor2 => setValor2(valor2)}
            value={valor2}
          />
          <Text>Resultado</Text>
          <Text>{new Intl.NumberFormat('es-CO').format(resultado)}</Text>
          <Text>{'\n'}</Text>
          <View style={{flexDirection:'row', flexWrap:'wrap'}}>
          <TouchableOpacity
            style={{backgroundColor:'red', padding:5, borderRadius:10, marginLeft:10}}
            onPress={()=>calcular('+')}
          >
            <text style={{color:'white', fontWeight:'bold' }}>+</text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{backgroundColor:'red', padding:5, borderRadius:10, marginLeft:10}}
            onPress={()=>calcular('-')}
          >
            <text style={{color:'white', fontWeight:'bold' }}>-</text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{backgroundColor:'red', padding:5, borderRadius:10, marginLeft:10}}
            onPress={()=>calcular('*')}
          >
            <text style={{color:'white', fontWeight:'bold' }}>X</text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{backgroundColor:'red', padding:5, borderRadius:10, marginLeft:10}}
            onPress={()=>calcular('/')}
          >
            <text style={{color:'white', fontWeight:'bold' }}>/</text>
          </TouchableOpacity>
          </View>
      </View>
    </View>
  );
}



