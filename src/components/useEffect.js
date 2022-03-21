import React, { useEffect, useState } from "react";

function UseEffect() {
  const [message, setMessage] = useState("bir");
  const [sari, setSari] = useState("sari");

  useEffect(
    function () {
      console.log("useEffecttt did redner");
    },
    [message]
  );
  return (
    <div className="useeffect">
      <h2>useEffect</h2>
      <br></br>
      {message}
      <button
        onClick={() => {
          setMessage("iki");
        }}
      >
        Change number
      </button>
      <br></br>
      {sari}
      <button onClick={() => setSari("kirmizi")}>gs</button>
    </div>
  );
}

export default UseEffect;

//function comp da  bir lyfcle olustumamanizi sagalar
// bu yontemle update upMoundt willMount gibi islemeleri yakalayabilyoiruz
//useEffect bir fonksiyon, iki parametre aliyor ilk parametere bir fonksiyon; ikincisi bir [] arry
//bu fonksiyon sayfa her render update edilginde calisir
//sayfa her render edilginde =console log() calisir, bunu sadece bir kerz yapar
//butona her tikladimizda sayfamiz guncellencek, sayfa guncellneice useEffcet hook fonk calisir
// bu sekilde comp didMount ve didUpdate lyfcele metheolarini calistirdik
//bu sayde hem sayfamizin render ve update islemini yakaladik
//------
//sayfanin icinde belli seyler update edildiginde, useEfectin calismasina karar verebilriz
//bunun hangi islem sonrasi useEffect fonk calismasini istersek [icine]  yazamamiz yeterli olacaktir
// sedece [burdaki] eleman update edilise useEffect fonk (ilk parametre) calisir
//--
//bunu test etmek maksadiyla sari kirmiz yi gs butonu ile degisklik yaptik
//bunun sonucunda useEffect fonk calismadi 
//--
//useEffectin ikinci parametresine birden fazla [mesage,sari] gib birden fazala parameter
//de ekleyebiliyoruz

