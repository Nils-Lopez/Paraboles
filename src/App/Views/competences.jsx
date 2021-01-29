import React from 'react'

const Competences = () => {

    return <>

                <h5 className="card-title text-center">Liste des compétences qui vont être vus sur ce site :</h5>
                <br/>   
                <table className="table w-75 m-auto text-center">
                    <thead>
                        <tr>
                            <th scope="col">Compétence</th>
                            <th scope="col">Appréciation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Résoudre une équation du second degré ​</td>
                            <td>
                                <select className="form-control" id="skill1">
                                    <option>...</option>
                                    <option className="text-success">A</option>
                                    <option className="text-warning">ECA</option>
                                    <option className="text-danger">NA</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Interpréter géométriquement les solution d’une équation​​</td>
                            <td>
                                <select className="form-control" id="skill1">
                                    <option>...</option>
                                    <option className="text-success">A</option>
                                    <option className="text-warning">ECA</option>
                                    <option className="text-danger">NA</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Déterminer les coordonnées des points remarquable d’une parabole​</td>
                            <td>
                                <select className="form-control" id="skill1">
                                    <option>...</option>
                                    <option className="text-success">A</option>
                                    <option className="text-warning">ECA</option>
                                    <option className="text-danger">NA</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Déterminer les coordonnées des points d’intersection de deux paraboles</td>
                            <td>
                                <select className="form-control" id="skill1">
                                    <option>...</option>
                                    <option className="text-success">A</option>
                                    <option className="text-warning">ECA</option>
                                    <option className="text-danger">NA</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Déterminer le tableau des signes d’une parabole</td>
                            <td>
                                <select className="form-control" id="skill1">
                                    <option>...</option>
                                    <option className="text-success">A</option>
                                    <option className="text-warning">ECA</option>
                                    <option className="text-danger">NA</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Structurer la rédaction d’un texte mathématique</td>
                            <td>
                                <select className="form-control" id="skill1">
                                    <option>...</option>
                                    <option className="text-success">A</option>
                                    <option className="text-warning">ECA</option>
                                    <option className="text-danger">NA</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Maitrise et respect de la nomenclature​</td>
                            <td>
                                <select className="form-control" id="skill1">
                                    <option>...</option>
                                    <option className="text-success">A</option>
                                    <option className="text-warning">ECA</option>
                                    <option className="text-danger">NA</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>

    </>
}

export default Competences