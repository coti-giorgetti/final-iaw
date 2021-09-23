import React, {useState} from 'react';
import Subjects from './Subjects';
import SearchBox from './SearchBox';

const Presentation = ({subjects}) => { 

    const filterSubjects = (subjects, query) => {
        if(!query){
            return subjects;
        }
        return subjects.filter((subject) => {
            const subjectName = subject.name.toLowerCase();
            return subjectName.includes(query);
        });
    }

    const {search}= window.location;
    const query = new URLSearchParams(search).get('s')
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredSubjects = filterSubjects(subjects, searchQuery);

    return (
        <div>
            <SearchBox
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <br />
            <Subjects filteredSubjects={filteredSubjects}/>
        </div>
    )
}

export default Presentation;