function Show_Danger(risk_identifier){
    switch(Math.ceil(risk_identifier)){

        case 10:
            //Opcional console.log("RED LIGHT, STOP THE OPERATIONS") pois ele já considera o mesmo para case 10 e 9
            // Pode colocar varias sentenças, sem necessidade de {};
            //Importante sempre colocar o break, pois ele ira rodar todos os cases.
            
        case 9:
            console.log("RED LIGHT, STOP THE OPERATIONS")
            break  
        
        case 8: case 7: case 6: case 5:
            console.log("ORANGE LIGHT, WAIT THE RESTART OF SERVICES")
            break
        
        case 0: case 1: case 2: case 3: case 4:
            console.log("REPORTING THE ISSUES TO DEVELOPER")
            break

        default:
            console.log("ERROR: INVALIDY IDENTIFIER")

    }   
}

Show_Danger(10)
Show_Danger(9)
Show_Danger(8)
Show_Danger(5)
Show_Danger(3)
Show_Danger(-1)
