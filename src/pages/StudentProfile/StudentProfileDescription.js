import React from 'react';

class StudentProfileDescription extends React.Component {
    render() {
        return (
            <div className="ml-3 mr-3 ">
                <h2>Om oss</h2>
                <div className="border container-medium mr-1 ">
                    <div className="col-8">
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies, libero luctus consectetur egestas, nulla eros tempus odio, sed lacinia sapien dui nec diam. Integer ut nunc magna. In eu enim felis. Cras neque eros, varius consequat arcu at, facilisis venenatis purus. Quisque at venenatis augue. Proin interdum ultrices efficitur. Maecenas ut mauris at dolor mollis euismod. </p>
                        <p>Aenean risus massa, vulputate non fermentum id, venenatis nec tortor. Etiam dui turpis, consequat et dui dapibus, cursus iaculis erat. Mauris feugiat felis et nunc posuere elementum. Integer sapien justo, vulputate sit amet congue sed, pellentesque sit amet justo.</p>
                    </div>  
                </div>
            </div>
        );
    }
}

export default StudentProfileDescription;