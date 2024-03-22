console.log("Hello World!")

let B = false, I = false, N = false, G = false, O = false;

let BNum, INum, NNum, GNum, ONum;
let B1 = 0, B2= 0, B3= 0, B4= 0, B5= 0;
let I1 = 0, I2= 0, I3= 0, I4= 0, I5= 0;
let N1 = 0, N2= 0, N3= 0, N4= 0, N5= 0;
let G1 = 0, G2= 0, G3= 0, G4= 0, G5= 0;
let O1 = 0, O2= 0, O3= 0, O4= 0, O5= 0;


    function newNumber1 (maxNumber){
let x = Math.floor(Math.random() * maxNumber) + 1;


if(x <= 15){
    if (x != B1 || x != B2 || x != B3 || x != B4 || x != B5)
    console.log(`New number is ${x} belongs to "B"`);
    B=true;
    BNum = x;
    document.querySelector("#td1").textContent = x;
    if (B1 == 0) B1 = x;
} else if (x >= 16 && x <= 30 ){
    if (x != I1 || x != I2 || x != I3 || x != I4 || x != I5)
    console.log (`New number is ${x} belongs to "I"`);
    I= true;
    INum = x;
    document.querySelector("#td2").textContent = x;
    if (I1 == 0) I1 = x;
} else if (x >= 31 && x <=45 ) {
    if (x != N1 || x != N2 || x != N3 || x != N4 || x != N5)
    console.log (`New number is ${x} belong to "N"`);
    N=true;
    NNum = x;
    document.querySelector("#td3").textContent = x;
     if (N1 == 0) N1 = x;
} else if ( x >= 46 && x  <= 60){
    if (x != G1 || x != G2 || x != G3 || x != G4 || x != G5)
    console.log (`New number is ${x} belongs to "G"`);
    G=true;
    GNum = x;
    document.querySelector("#td4").textContent = x;
    if (G1 == 0) G1 = x;
}else if ( x >=  61 && x <= 75){
    if (x != O1 || x != O2 || x != O3 || x != O4 || x != O5)
    console.log (`New Number is ${x} belongs to "0"`);
    O=true;
    ONum = x;
    document.querySelector("#td5").textContent = x;
    if (O1 == 0) O1 = x;
}else{
    console.log(`New number ${x} is invalid!`);   
}

if (B = true && I == true && N == true && G == true && O == true){
}}
    
function newNumber2 (maxNumber){
    let x = Math.floor(Math.random() * maxNumber) + 1;
    
    
    if(x <= 15){
        if (x != B1 || x != B2 || x != B3 || x != B4 || x != B5)
        console.log(`New number is ${x} belongs to "B"`);
        B=true;
        BNum = x;
        document.querySelector("#td6").textContent = x;
        if (B2 == 0) B2 = x;
    } else if (x >= 16 && x <= 30 ){
        if (x != I1 || x != I2 || x != I3 || x != I4 || x != I5)
        console.log (`New number is ${x} belongs to "I"`);
        I= true;
        INum = x;
        document.querySelector("#td7").textContent = x;
         if (I2 == 0) I2 = x;
    } else if (x >= 31 && x <=45 ) {
        if (x != N1 || x != N2 || x != N3 || x != N4 || x != N5)
        console.log (`New number is ${x} belong to "N"`);
        N=true;
        NNum = x;
        document.querySelector("#td8").textContent = x;
        if (N2 == 0) N2 = x;
    } else if ( x >= 46 && x  <= 60){
        if (x != G1 || x != G2 || x != G3 || x != G4 || x != G5)
        console.log (`New number is ${x} belongs to "G"`);
        G=true;
        GNum = x;
        document.querySelector("#td9").textContent = x;
        if (G2 == 0) G2 = x;
    }else if ( x >=  61 && x <= 75){
        if (x != O1 || x != O4 || x != O3 || x != O4 || x != O5)
        console.log (`New Number is ${x} belongs to "0"`);
        O=true;
        ONum = x;
        document.querySelector("#td10").textContent = x;
         if (O2 == 0) O2 = x;
    }else{
        console.log(`New number ${x} is invalid!`);   
    }
    
    if (B = true && I == true && N == true && G == true && O == true){
    }}
    
    function newNumber3 (maxNumber){
        let x = Math.floor(Math.random() * maxNumber) + 1;
        
        
        if(x <= 15){
            if (x != B1 || x != B2 || x != B3 || x != B4 || x != B5)
            console.log(`New number is ${x} belongs to "B"`);
            B=true;
            BNum = x;
            document.querySelector("#td11").textContent = x;
            if (B3 == 0) B3 = x;
        } else if (x >= 16 && x <= 30 ){
            if (x != I1 || x != I2 || x != I3 || x != I4 || x != I5)
            console.log (`New number is ${x} belongs to "I"`);
            I= true;
            INum = x;
            document.querySelector("#td12").textContent = x;
             if (I3 == 0) I3 = x;
        } else if (x >= 31 && x <=45 ) {
            if (x != N1 || x != N2 || x != N3 || x != N4 || x != N5)
            console.log (`New number is ${x} belong to "N"`);
            N=true;
            NNum = x;
            document.querySelector("#td13").textContent = x;
            if (N3 == 0) N3 = x;
        } else if ( x >= 46 && x  <= 60){
            if (x != G1 || x != G2 || x != G3 || x != G4 || x != G5)
            console.log (`New number is ${x} belongs to "G"`);
            G=true;
            GNum = x;
            document.querySelector("#td14").textContent = x;
            if (G3 == 0) G3 = x;
        }else if ( x >=  61 && x <= 75){
            if (x != O1 || x != O2 || x != O3 || x != O4 || x != O5)
            console.log (`New Number is ${x} belongs to "0"`);
            O=true;
            ONum = x;
            document.querySelector("#td15").textContent = x;
             if (O3 == 0) O3 = x;
        }else{
            console.log(`New number ${x} is invalid!`);   
        }
        
        if (B = true && I == true && N == true && G == true && O == true){
        }}
        
    function newNumber4 (maxNumber){
        let x = Math.floor(Math.random() * maxNumber) + 1;
        
        
        if(x <= 15){
            if (x != B1 || x != B2 || x != B3 || x != B4 || x != B5)
            console.log(`New number is ${x} belongs to "B"`);
            B=true;
            BNum = x;
            document.querySelector("#td16").textContent = x;
            if (B4 == 0) B4 = x;
        } else if (x >= 16 && x <= 30 ){
            if (x != I1 || x != I2 || x != I3 || x !=I4 || x != I5)
            console.log (`New number is ${x} belongs to "I"`);
            I= true;
            INum = x;
            document.querySelector("#td17").textContent = x;
             if (I4 == 0) I4 = x;
        } else if (x >= 31 && x <=45 ) {
            if (x != N1 || x != N2 || x != N3 || x != N4 || x != N5)
            console.log (`New number is ${x} belong to "N"`);
            N=true;
            NNum = x;
            document.querySelector("#td18").textContent = x;
            if (N4 == 0) N4 = x;
        } else if ( x >= 46 && x  <= 60){
            if (x != G1 || x != G2 || x != G3 || x != G4 || x != G5)
            console.log (`New number is ${x} belongs to "G"`);
            G=true;
            GNum = x;
            document.querySelector("#td19").textContent = x;
            if (G4 == 0) G4 = x;
        }else if ( x >=  61 && x <= 75){
            if (x != O1 || x != O2 || x != O3 || x != O4 || x != O5)
            console.log (`New Number is ${x} belongs to "0"`);
            O=true;
            ONum = x;
            document.querySelector("#td20").textContent = x;
             if (O4 == 0) O4 = x;
        }else{
            console.log(`New number ${x} is invalid!`);   
        }
        
        if (B = true && I == true && N == true && G == true && O == true){
        }}
        
    function newNumber5 (maxNumber){
        let x = Math.floor(Math.random() * maxNumber) + 1;
        
        
        if(x <= 15){
            if (x != B1 || x != B2 || x != B3 || x != B4 || x != B5)
            console.log(`New number is ${x} belongs to "B"`);
            B=true;
            BNum = x;
            document.querySelector("#td21").textContent = x;
            if (B5 == 0) B5 = x;
        } else if (x >= 16 && x <= 30 ){
            if (x != I1 || x != I2 || x != I3 || x != I4 || x != I5)
            console.log (`New number is ${x} belongs to "I"`);
            I= true;
            INum = x;
            document.querySelector("#td22").textContent = x;
             if (I5 == 0) I5 = x;
        } else if (x >= 31 && x <=45 ) {
            if (x != N1 || x != N2 || x != N3 || x != N4 || x != N5)
            console.log (`New number is ${x} belong to "N"`);
            N=true;
            NNum = x;
            document.querySelector("#td23").textContent = x;
            if (N5 == 0) N5 = x;
        } else if ( x >= 46 && x  <= 60){
            if (x != G1 || x != G2 || x != G3 || x != G4 || x != G5)
            console.log (`New number is ${x} belongs to "G"`);
            G=true;
            GNum = x;
            document.querySelector("#td24").textContent = x;
            if (G5 == 0) G5 = x;
        }else if ( x >=  61 && x <= 75){
            if (x != O1 || x != O2 || x != O3 || x != O4 || x != O5)
            console.log (`New Number is ${x} belongs to "0"`);
            O=true;
            ONum = x;
            document.querySelector("#td25").textContent = x;
            if (O5 == 0) O5 = x;
        }else{
            console.log(`New number ${x} is invalid!`);   
        }
        
        if (B = true && I == true && N == true && G == true && O == true){
            console.log(`BINGOOOO!!!!`);
            console.table({
                B: BNum,
                I: INum,
                N: NNum,
                G: GNum,
                O: ONum,
        })
        
        }
        
        return console.log(x);
        }




//newNumber(75);

let counter = 5;
//for (counter = 10; counter >= 0; counter--){
//    console.log(Current counter is ${counter});
//    if (counter == 2 )break;

//    newNumber(75);
//}


while (B = false || I == false || N == false || G == false  || O == false){
    newNumber1(75);
    B = false;
    I = false;
    N = false;
    G = false;
    O = false;
}
    while (B = false || I == false || N == false || G == false  || O == false){
    newNumber2(75);
    B = false;
    I = false;
    N = false;
    G = false;
    O = false;
    }
    while (B = false || I == false || N == false || G == false  || O == false){
    newNumber3(75);
    B = false;
    I = false;
    N = false;
    G = false;
    O = false;}
    while (B = false || I == false || N == false || G == false  || O == false){
    newNumber4(75);
    B = false;
    I = false;
    N = false;
    G = false;
    O = false;}
    while (B = false || I == false || N == false || G == false  || O == false){
    newNumber5(75);
    B = false;
    I = false;
    N = false;
    G = false;
    O = false; 
}