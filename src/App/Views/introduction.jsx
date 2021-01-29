import React from 'react'

const Introduction = () => {

    return <>

                <h3 className="card-title text-center">Utilisation de ∆ :</h3>
                <br/> 
                <div className="container">
                    <h5>Si nous avons deux équations : </h5>
                    <h3>P ≡ y = 3x + x²/2 – 1  </h3>
                     
                    et
                    <br/>
                    <h3>Q ≡ y = 1 + 4x - x²/2</h3>
                    <p>Pour établir un tableau des signes il nous faut d'abord restructurer nos équations afin de pouvoir y appliquer la méthode de Delta.</p>
                    <p>Ce qui nous donne : <strong>P ≡ y =  1/2 x² + 3x – 1</strong> et <strong>Q ≡ y =  −1/2 x² + 4x + 1</strong> </p>
                    <p>Une fois nos équations sous la forme optimal pour appliquer Delta on peut calculer les racines.</p>   
                    <p>On sait que ∆ = b² - 4ac</p>     
                    <p>Donc pour P : <strong>∆ = 9 - 4 · 1/2 · (-1) = 9 + 2 = 11</strong></p>      
                    <p>Maintenant qu'on a la valeur de ∆ on peut en calculer les racines avec la formule suivante : (−b ± √∆) / 2a</p>           
                    <p>Ce qui nous donne donc deux résultats x1 (appliquer la formule avec +) et x2 (appliquer la formule avec -)</p>
                    <p><strong>x1 = -3 + √11</strong></p>
                    <p><strong>x2 = -3 - √11</strong></p>
                    <p>Vous remarquerez qu'on a supprimé le diviseur de la formule ( 2a ) car 2 · 1/2 = 1</p>
                    <p>Il nous suffit d'appliquer les mêmes étapes pour Q. Ce qui nous donne :</p>
                    <p><strong>∆ = 16 – 4 · (−1 / 2) · 1 = 18</strong></p>   
                    <p>On va donc chercher la racines maintenant qu'on connait la valeur de ∆. Toujours avec la formule : (−b ± √∆) / 2a</p>
                    <p>⇔ <strong>(-4 ± √18)/(-1) = (−4 ± 3√2)/(−1)</strong></p>
                    <p>⇔ <strong>x1 = (−4 + 3√2)/(−1) = 4 + 3√2</strong></p>
                    <p>⇔ <strong>x2 = (−4 - 3√2)/(−1) = 4 - 2√2</strong></p>
                    <p>Nous avons donc calculer toutes nos racines:</p>
                    <p>P : <strong>x1 = -3 + √11</strong> et <strong>x2 = -3 - √11</strong></p>
                    <p>Q : <strong>x1 = 4 + 3√2</strong> et <strong>x2 = 4 - 3√2</strong></p>
                </div>  

    </>
}

export default Introduction