import { createContext, useState, useEffect } from "react"



const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({ children }) => {

const operatorId= '1bccfb1c-7dea-4ae8-a303-b0464027bdad'

    const [user, setUser] = useState(() => 
        localStorage.getItem("user") ? localStorage.getItem("user") : null
    )
    const [loading, setLoading] = useState(true)

    const loginUser = async (nickname, password) => {

      let datos = {
        nickname,
        password,
        operatorId
      }
      var formBody = [];
      for (var property in datos) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(datos[property]);
        formBody.push(encodedKey + "=" + encodedValue);
      }
      formBody = formBody.join("&");

        const response = await fetch("https://us-central1-cloud-sales-da995.cloudfunctions.net/app/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: formBody
        });
        const data = await response.json();
    
        if (response.status === 200) {
          setUser(data);
          localStorage.setItem("user", JSON.stringify(data))
          
        } 
      }

      const registerUser = async (operatorId, name , nickname, password, level) => {
        const response = await fetch("https://us-central1-cloud-sales-da995.cloudfunctions.net/app/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            operatorId,
            name,
            nickname,
            password,
            level
          })
        });
        if (response.status === 201) {
        //   history.push("/login");
        } else {
          alert("Something went wrong!");
        }
      };
    
     

      const contextData = {
        operatorId,
        user,
        setUser,
        registerUser,
        loginUser,
        
      };
      
      useEffect(() => {
       setLoading(false)
      }, [user, loading]
    )

      return (
        <AuthContext.Provider value={contextData}>
          { children}
        </AuthContext.Provider>
      );
}