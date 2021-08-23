import React, {useState} from 'react';
import Subjects from './Subjects';
import SearchBox from './SearchBox';

const subjects = [
    {id: 1, subject:"Algoritmos y complejidad", cod:1234},
    {id: 2, subject:"Resolucion de problemas y algoritmos", cod:1234},
    {id: 3, subject:"Sistemas inteligentes artificiales", cod:1234},
    {id: 4, subject:"Introduccion a la programacion orientada a objetos", cod:1234},
    {id: 5, subject:"Lenguajes formales y automatas", cod:1234},
    {id: 6, subject:"Verificacion y validacion de software", cod:1234},
    {id: 7, subject:"Analisis matematico I", cod:1234},
    {id: 8, subject:"Analisis matematico II", cod:1234},
    {id: 9, subject:"Fisica II", cod:1234},
    {id: 10, subject:"Gestion de calidad", cod:1234}
];

const filterSubjects = (subjects, query) => {
    if(!query){
        return subjects;
    }
    return subjects.filter((subject) => {
        const subjectName = subject.subject.toLowerCase();
        return subjectName.includes(query);
    });
}

const Home = () => { 
    const {search}= window.location;
    const query = new URLSearchParams(search).get('s')
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredSubjects = filterSubjects(subjects, searchQuery);

    return (<div>
        <SearchBox
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
        />
        <br />
        <Subjects filteredSubjects={filteredSubjects} />
    </div>)
}

export default Home;