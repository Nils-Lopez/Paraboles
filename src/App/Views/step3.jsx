import React from 'react'

import graph from '../../graph.png'

const StepTree = () => {

    return <>

                <h3 className="card-title text-center">Trouver les points remarquables :</h3>
                <br/> 
                <div className="container">
                    <h5>1) Trouver le sommet</h5>
                    <p>Pour trouver mathématiquement le sommet d'une parabole, il nous faut utiliser les formules ci-dessous :</p>
                    <p><strong>-b / 2a</strong>   et    <strong>-∆ / 4a</strong></p>
                    <p><u>Pour la fonction P :</u></p>
                    <p>-b / 2a = <strong> -3 / (2 · 1/2) = -3</strong></p>
                    <p>-∆ / 4a = <strong> -11 / 2 = -5,5</strong></p>
                    <p>La première formule nous permettant de calculer les coordonnées pour l'abscisse et la deuxième pour l'ordonnée, on sait que notre sommet de la parabole de P se trouvera en <strong>(-3 ; -5,5)</strong></p>
                    <p><u>On réutilise maintenant les mêmes formules pour la fonction Q :</u></p>
                    <p>-b / 2a <strong>⇔  (−4)/(2 . ((−1)/2) ) = 4</strong></p>
                    <p>-∆ / 4a <strong>⇔  (−18)/(4 . ((−1)/2) ) = 9</strong></p>
                    <p>Ce qui nous donne un sommet pour la parabole de la fonction Q dont les coordonnées sont : <strong>(4; 9)</strong></p>
                    <h5>2) Trouver les points d'intersections avec l'ordonnée</h5>
                    <p>Afin de trouver les coordonées des points auxquels notre parabole passe par l'ordonnée, on va remplacer x par 0.</p>
                    <p> P ≡ y = 1/2 x² + 3x – 1 ⇔ <strong>1/2 · 0² + 3 · 0 – 1 = - 1</strong></p>
                    <p>On sait déjà que notre x c'est 0 donc les coordonées de notre point d'intersection sont : <strong>(0; -1)</strong></p>
                    <p>On remplace x par 0 dans notre fonction Q aussi afin de trouver le point d'intersection avec l'ordonnée</p>
                    <p>Q ≡ 𝑦=  (−1)/2 x² + 4x + 1 ⇔ <strong>(−1)/2  . 0² + 4 . 0 + 1 = 1</strong></p>
                    <p>Les coordonnées du point d'intersection sont donc : <strong>(0; 1)</strong></p>
                    <h5>3) Trouver les points d'intersections de nos 2 paraboles :</h5>
                    <p>Pour trouver les points d'interesections de nos 2 paraboles</p>
                    <h5 className="text-center">Tous ces coordonnées correspondent au graphique de nos 2 paraboles :</h5>
                    <div className="d-flex justify-content-center m-auto">
                        <img src={graph} height="500" width="500"/>
                    </div>
                </div>  

    </>
}

export default StepTree