import React from 'react'



const StepTwo = () => {

    return <>

                <h3 className="card-title text-center">Tableau des signes :</h3>
                <br/> 
                <div className="container">
                    <p>Maintenant qu'on a calculé nos 2 racines de P, nous pouvons factoriser la fonction P</p>
                    <p>P ≡ y =  1/2 x² + 3x – 1  ⇔  <strong>P ≡ y =  1/2 (x + 3 + √11) · (x + 3 − √11)</strong></p>
                    <p>Grâce à cette forme factorisée nous pouvons établir notre tableau des signes</p>
                    <table className="table m-auto text-center">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col"> · </th>
                                <th scope="col"> -3 - √11 </th>
                                <th scope="col"> · </th>
                                <th scope="col"> -3 + √11 </th>
                                <th scope="col"> · </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>(x + 3 + √11)</td>
                                <td> - </td>
                                <td> 0 </td>
                                <td> + </td>
                                <td> + </td>
                                <td> + </td>
                            </tr>
                            <tr>
                                <td>(x + 3 - √11)</td>
                                <td> - </td>
                                <td> - </td>
                                <td> - </td>
                                <td> 0 </td>
                                <td> + </td>
                            </tr>
                            <tr>
                                <td>1 / 2</td>
                                <td> + </td>
                                <td> + </td>
                                <td> + </td>
                                <td> + </td>
                                <td> + </td>
                            </tr>
                            <tr>
                                <td> P </td>
                                <td> + </td>
                                <td> 0 </td>
                                <td> - </td>
                                <td> 0 </td>
                                <td> + </td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Nous pouvons en faire de même pour Q.</p>
                    <p>Q ≡ y =  1/2 x² + 4x + 1  ⇔  <strong>Q ≡ y =  -1/2 (x -4 + 3√2) · (x -4 − 3√2)</strong></p>
                    <p>Grâce à cette forme factorisée nous pouvons établir notre tableau des signes, en suivant le même procédé que pour le précédent.</p>
                    <table className="table m-auto text-center">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col"> · </th>
                                <th scope="col"> 4 - 3√2 </th>
                                <th scope="col"> · </th>
                                <th scope="col"> 4 + 3√2 </th>
                                <th scope="col"> · </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>(x - 4 - 3√2)</td>
                                <td> - </td>
                                <td> - </td>
                                <td> - </td>
                                <td> 0 </td>
                                <td> + </td>
                            </tr>
                            <tr>
                                <td>(x - 4 + 3√2)</td>
                                <td> - </td>
                                <td> 0 </td>
                                <td> + </td>
                                <td> + </td>
                                <td> + </td>
                            </tr>
                            <tr>
                                <td>- (1 / 2)</td>
                                <td> - </td>
                                <td> - </td>
                                <td> - </td>
                                <td> - </td>
                                <td> - </td>
                            </tr>
                            <tr>
                                <td> Q </td>
                                <td> - </td>
                                <td> 0 </td>
                                <td> + </td>
                                <td> 0 </td>
                                <td> - </td>
                            </tr>
                        </tbody>
                    </table>
                </div>  

    </>
}

export default StepTwo