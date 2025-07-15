export default function App() {
    const people=[
        {id:1,name:"Kiran",age:30},
        {id:2,name:"Pavan",age:32},
        {id:3,name:"Rakesh",age:34},
    ];
  return (<>
      <h1>People List</h1>
      <ul>
          {
              people.map(person=>(
                  <li key={person.id}>{person.name}-Age:{person.age}</li>
              ))
          }
      </ul>
  </>);
}
