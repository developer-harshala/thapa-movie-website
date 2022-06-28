
// context API
// useContext hook

// context (warehouse)
// Provider (delivery person)
// Consumer //(useContext(you))
import React,{useContext,useEffect, useState} from "react";


const API_URL= `http://www.omdbapi.com/?apikey=727bbdc1&s=titanic`;

const AppContext = React.createContext();

//We need to create a provider function

const AppProvider = ({children}) => {
  const [isLoading,setIsLoading] = useState(true);
  const [movie,setMovie] = useState([]);
  const [isError,setIsError] = useState({show:"false",msg:""});


  const getMovies = async(url)=>{
    try{
      const res=await fetch(url);
      const data=await res.json();
      console.log (data);
      if(data.Response === "True"){
        setIsLoading(false);
        setMovie(data.Search);
      } else {
setIsError({
  show:true,
  msg:data.error,
})
      }
    }
    catch(error)
{
  console.loG(error);
}


    
    }
  
  useEffect(() => {
getMovies(API_URL);
  },[]);

  return<AppContext.Provider value={{isLoading,movie,isError}}>
  {children}
  </AppContext.Provider>

  }




// global custom hooks

const useGlobalContext=()=>{
  return useContext(AppContext);
}

export {AppContext,AppProvider,useGlobalContext};

