import { createContext, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Exercise = {
  id : string,
  series : string
}

export type Day = {
  name : string,
  exercises : Exercise[]
}

export type Routine = {
  id : string,
  numDays : number,
  days? : Day[]
} 

// let prova_rutina : Routine = {id : "1", numDays : 4}

// Recordar que tens que pasar una array de rutinas
// Tambe mirar si existeix en el storage el objecte Routines
// Posar valor default
// Crear clase per poder modificar aquest objecte routines: crear, eliminar y editar rutines

export const AppContext = createContext<Routine[] | undefined>(undefined);

export function useAppContext() {

  const routines = useContext(AppContext);

  if(routines === undefined){
    throw new Error("useAppContext is undefined")
  }

  return routines;

}

export const storeData = async (value : Routine[]) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('my-key', jsonValue);
  } catch (e) {
    // saving error
  }
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('my-key');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

