import React, {Component} from 'react';
import Subject from './Subject';

class Subjects extends Component{
  render() {
    return  this.props.filteredSubjects.map(subject => <Subject subject={subject} key={subject.id}/> ) 
  }
}

export default Subjects;