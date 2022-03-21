import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("useEffect wokrked");
  }, [counter]);
  // useEffect(()=>{console.log("useEffect wokrked")},[])
  //componentDidMount() la ayni olur,tek render hepsini render
  //her sayfa yuklediginde calisir

  // useEffect(()=>{console.log("useEffect wokrked")},[counter])
  //counter her update edildiginde useeffect calisir

  const increase = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="useeffect">
      <h3>UseEffect</h3>
      <hr></hr>
      <p>Counter: {counter}</p>
      <button onClick={() => increase()}>Increase</button>
    </div>
  );
};

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
