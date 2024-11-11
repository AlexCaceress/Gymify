import { createContext, useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Exercise = {
  id: string,
  series: string
}

export type Day = {
  name: string,
  exercises: Exercise[]
}

export type Routine = {
  id: string,
  name: string
  numDays: number,
  days?: Day[]
}

interface AppContextType {
  data: Routine[],
  storeData: (data: Routine[]) => void,

}

const AppContext = createContext<AppContextType>({
  data: [],
  storeData: () => { },
});

export const AppProvider = ({ children }: any) => {

  const [data, setData] = useState<Routine[]>([]);

  useEffect(() => {

    const loadData = async () => {
      const items = await getData();
      if (items !== null) setData(items)
    }

    loadData();

  }, []);

  const storeData = async (value: Routine[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      setData(value);
      await AsyncStorage.setItem('routines', jsonValue);
    } catch (e) {
      console.error("No se ha podido cargar los datos al almacenamiento")
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('routines');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.error("No se ha podido descargar los datos")
    }
  };

  return (
    <AppContext.Provider value={{ data, storeData }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext);
